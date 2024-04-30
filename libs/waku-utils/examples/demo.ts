import debug from 'debug'
import { writeFileSync } from 'fs'

import { Protocols, createLightNode, waitForRemotePeer } from '@waku/sdk'
import * as utils from '@waku/utils/bytes'

import { getPairingObject, proceedHandshake } from 'waku-utils/src/waku-utils'
import { NoiseSecureMessage } from '@waku/noise/dist/codec'
import { statusProdBootstrapPeers, wakuDefaultPubsubTopic } from '../src/const'

debug.enable('nimbus-gui:*')

const log = debug('nimbus-gui:waku:demo')

async function startNode() {
  const node = await createLightNode({
    defaultBootstrap: false,
    pubsubTopics: [wakuDefaultPubsubTopic],
    bootstrapPeers: statusProdBootstrapPeers,
  })

  await node.start()
  await waitForRemotePeer(node, [Protocols.Filter, Protocols.LightPush])

  const pairingObj = getPairingObject(node)
  const pInfo = pairingObj.getPairingInfo()

  writeFileSync(
    process.env['QR_MESSAGE_PATH']!,
    utils.bytesToHex(pInfo.qrMessageNameTag),
  )

  writeFileSync(process.env['QR_PATH']!, pInfo.qrCode)

  const { decoder } = await proceedHandshake(pairingObj)

  const callback = (wakuMessage: NoiseSecureMessage) => {
    log('New message received. Payload:', wakuMessage.payload)
  }

  await node.filter.subscribe([decoder], callback)
  log('Subscription created')
}
log('Starting Waku')
startNode()
