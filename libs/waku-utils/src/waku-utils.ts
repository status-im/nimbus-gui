import debug from 'debug'

import { randomBytes } from '@stablelib/random'
import { HMACDRBG } from '@stablelib/hmac-drbg'

import { LightNode } from '@waku/interfaces'
import { bytesToHex } from '@waku/utils/bytes'
import {
  HandshakeResult,
  WakuPairing,
  X25519DHKey,
  ResponderParameters,
  NoiseSecureTransferEncoder,
  NoiseSecureTransferDecoder,
} from '@waku/noise'

import { CustomHandshakeResult } from './handshake'

const log = debug('nimbus-gui:waku:utils')

export function getPairingObject(node: LightNode): WakuPairing {
  const dhKey = new X25519DHKey()
  const rng = new HMACDRBG()

  const nimbusGUIStaticKey = dhKey.generateKeyPair()

  const applicationName = 'nimbus-gui'
  const applicationVersion = '0.0.0'
  const shardIdAsBytes = randomBytes(16, rng)
  const shardId = bytesToHex(shardIdAsBytes)

  const pairingObj = new WakuPairing(
    node.lightPush,
    node.filter,
    nimbusGUIStaticKey,
    new ResponderParameters(applicationName, applicationVersion, shardId),
  )

  const pInfo = pairingObj.getPairingInfo()
  log(`Initial messageNameTag: "${bytesToHex(pInfo.qrMessageNameTag)}"`)
  log(`QR Code: "${pInfo.qrCode}"`)
  log(`Content topic: "${pairingObj.contentTopic}"`)

  return pairingObj
}

export async function scheduleHandshakeAuthConfirmation(
  pairingObj: WakuPairing,
) {
  const authCode = await pairingObj.getAuthCode()
  log('Auth code is: ' + authCode)
  pairingObj.validateAuthCode(true)
}

export async function proceedHandshake(pairingObj: WakuPairing): Promise<{
  encoder: NoiseSecureTransferEncoder
  decoder: NoiseSecureTransferDecoder
  handshakeResult: HandshakeResult
}> {
  const pExecute = pairingObj.execute(120000) // timeout after 2m
  await scheduleHandshakeAuthConfirmation(pairingObj)
  log("Authcode confirmed")
  const [encoder] = await pExecute
  const handshakeResult = pairingObj.getHandshakeResult()
  handshakeResult ? log('Handshake successful') : log('Handshake failed')

  const customHandshakeResult = new CustomHandshakeResult(
    handshakeResult.getCSOutbound(),
    handshakeResult.getCSInbound(),
    handshakeResult.nametagsInbound,
    handshakeResult.nametagsOutbound,
    handshakeResult.rs,
    handshakeResult.h,
  )

  const decoder = new NoiseSecureTransferDecoder(
    pairingObj.contentTopic,
    customHandshakeResult,
  )
  return { encoder, decoder, handshakeResult: customHandshakeResult }
}
