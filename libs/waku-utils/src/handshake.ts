import debug from 'debug'

import * as pkcs7 from 'pkcs7-padding'
import isEqual from 'lodash/isEqual'

import {
  HandshakeResult,
  MessageNametagBuffer,
  CipherState,
  Nonce,
  PayloadV2,
} from '@waku/noise'

import { LostNametag } from './messagenametag'

const log = debug('nimbus-gui:waku:handshake')

export class CustomHandshakeResult extends HandshakeResult {
    protected lostNametagsInbound: LostNametag[] = []
    constructor(
      csInbound: CipherState,
      csOutbound: CipherState,
      nametagsInbound: MessageNametagBuffer,
      nametagsOutbound: MessageNametagBuffer,
      rs: Uint8Array,
      h: Uint8Array,
    ) {
      super(csInbound, csOutbound)
      this.nametagsInbound = nametagsInbound
      this.nametagsOutbound = nametagsOutbound
      this.rs = rs
      this.h = h
    }

    override readMessage(
      readPayload2: PayloadV2,
      inboundMessageNametagBuffer: MessageNametagBuffer | undefined = undefined,
    ): Uint8Array {
      const inboundNametagBuffer =
        inboundMessageNametagBuffer ?? this.nametagsInbound

      // The output decrypted message
      let message = new Uint8Array()

      // According to 35/WAKU2-NOISE RFC, no Handshake protocol information is sent when exchanging messages
      if (readPayload2.protocolId != 0) {
        log('Protocol Id mismatch')
        return message
      }

      const nametagIsOk = inboundNametagBuffer.checkNametag(
        readPayload2.messageNametag,
      )

      if (!nametagIsOk) {
        // We take the index of the messageNametag in the inbound Message Nametag Buffer
        const index = inboundNametagBuffer.getNametagPosition(
          readPayload2.messageNametag,
        )

        // If the index is greater than 0, it means that some messages have been lost.
        // We need to perform a catch up, so we can decrypt the message that we just received
        if (index > 0) {
          this.performCatchUp(index, inboundNametagBuffer)
        }

        // If the index is -1, it means that the messageNametag is not in the inbound Message Nametag Buffer.
        // We need to search the lost items to see if this is one of them
        if (index == -1) {
          const foundLostNametag = this.lostNametagsInbound.find(({ value }) =>
            isEqual(value, readPayload2.messageNametag),
          )

          if (foundLostNametag) {
            // If we found the lost message, we can try to decrypt it.
            return this.readLostMessage(foundLostNametag, readPayload2)
          } else {
            // The received message is not in the inbound Message Nametag Buffer and is not one of the lost messages.
            throw new Error('nametag is not ok')
          }
        }
      }

      // At this point the messageNametag matches the expected nametag.
      // On application level we decide to discard messages which fail decryption, without raising an error
      try {
        // Decryption is done with messageNametag as associated data
        const paddedMessage = this.csInbound.decryptWithAd(
          readPayload2.messageNametag,
          readPayload2.transportMessage,
        )
        // We unpad the decrypted message
        message = pkcs7.unpad(paddedMessage)
        // The message successfully decrypted, we can delete the first element of the inbound Message Nametag Buffer
        this.nametagsInbound.delete(1)
      } catch (err) {
        log(
          'A read message failed decryption. Returning empty message as plaintext.',
          `Error: ${err}`,
        )
        message = new Uint8Array()
      }
      return message
    }

    performCatchUp(index: number, inboundNametagBuffer: MessageNametagBuffer) {
      log(`${index} messages have been lost. Preforming a catch up!`)
      // First we save the nametags of the lost messages, so if they arrive later we can decrypt them
      for (let i = 0; i < index; i++) {
        this.lostNametagsInbound.push({
          nonce: new Nonce(this.csInbound.getNonce().getUint64() + i),
          value: inboundNametagBuffer.getNametagAtPosition(i),
        })
      }

      // Then we delete the lost messages from the inbound Message Nametag Buffer
      inboundNametagBuffer.delete(index)

      // We update the nonce of the CipherState, so we can decrypt the next message
      this.csInbound.setNonce(
        new Nonce(this.csInbound.getNonce().getUint64() + index),
      )
    }

    readLostMessage(foundLostNametag: LostNametag, readPayload2: PayloadV2) {
      let message = new Uint8Array()

      log('Received previously lost message')

      // We save the current nonce of the CipherState
      const currNonce = this.csInbound.getNonce()

      // We update the nonce of the CipherState, so we can decrypt the message
      this.csInbound.setNonce(foundLostNametag.nonce)
      try {
        // Decryption is done with messageNametag as associated data
        const paddedMessage = this.csInbound.decryptWithAd(
          readPayload2.messageNametag,
          readPayload2.transportMessage,
        )
        // We unpad the decrypted message
        message = pkcs7.unpad(paddedMessage)

        // The message successfully decrypted, we can set the nonce of the CipherState back to the previous value
        this.csInbound.setNonce(currNonce)

        // We delete the lost message from the list of lost messages
        this.lostNametagsInbound = this.lostNametagsInbound.filter(
          item => item.nonce !== foundLostNametag.nonce,
        )
      } catch (err) {
        log(
          'A read message failed decryption. Returning empty message as plaintext.',
          `Error: ${err}`,
        )
        message = new Uint8Array()
      }
      return message
    }
  }
