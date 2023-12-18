import { NodeIcon, CompleteIdIcon } from '@status-im/icons'
import { Separator, XStack, YStack } from 'tamagui'
import { useState } from 'react'
import { Button, Text } from '@status-im/components'

import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import SyncStatus from './SyncStatus'
import Titles from '../../components/General/Titles'
import PairedSuccessfully from './PairedSuccessfully'
import CreateAvatar from '../../components/General/CreateAvatar/CreateAvatar'
import GenerateId from './GenerateId'
import Header from '../../components/General/Header'
import Icon from '../../components/General/Icon'

const PairDevice = () => {
  const [isAwaitingPairing, setIsAwaitingPairing] = useState(false)
  const [isConnectingViaIp, setIsConnectingViaIp] = useState(false)
  const isPaired = false
  const isPairing = false

  const changeSetIsAwaitingPairing = (result: boolean) => {
    setIsAwaitingPairing(result)
  }

  const connectViaIpHandler = () => {
    setIsConnectingViaIp(true)
  }

  return (
    <PageWrapperShadow rightImageSrc="./background-images/day-night-bg.png" rightImageLogo={true}>
      <YStack space={'$3'}>
        <Header selectedTag="pair" />
        <Titles
          title="Connect to existing Nimbus Instance"
          subtitle="Pair your existing device to the Nimbus Node Manager"
        />
        {isPaired ? <PairedSuccessfully /> : <GenerateId isAwaitingPairing={isAwaitingPairing} />}
        {isPaired === false && (
          <SyncStatus
            isPairing={isPairing}
            isAwaitingPairing={isAwaitingPairing}
            changeSetIsAwaitingPairing={changeSetIsAwaitingPairing}
          />
        )}
        {isPaired === false && (
          <YStack space={'$3'}>
            <Separator borderColor={'#e3e3e3'} />
            <YStack space={'$1'}>
              <Text size={19} weight={'semibold'} color="#09101C">
                Advanced Settings
              </Text>
              <XStack>
                {isConnectingViaIp ? (
                  <Button icon={<CompleteIdIcon size={20} color="#2A4AF5" />} variant="outline">
                    Pair with ID
                  </Button>
                ) : (
                  <Button
                    icon={<Icon src="/icons/connection-blue.svg" width={20} />}
                    variant="outline"
                    onPress={connectViaIpHandler}
                  >
                    Connect via IP
                  </Button>
                )}
              </XStack>
            </YStack>
          </YStack>
        )}
        {isPaired && <CreateAvatar />}
        <Separator borderColor={'#e3e3e3'} />
        <div>
          <Button icon={<NodeIcon size={20} />} disabled={!isPaired}>
            Continue
          </Button>
        </div>
      </YStack>
    </PageWrapperShadow>
  )
}

export default PairDevice
