import { Separator, XStack, YStack } from 'tamagui'
import { useState } from 'react'
import { Button, Text } from '@status-im/components'

import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import SyncStatus from './SyncStatus'
import Titles from '../../components/General/Titles'
import PairedSuccessfully from './PairedSuccessfully'
import CreateAvatar from '../../components/General/CreateAvatar/CreateAvatar'
import GenerateId from './GenerateId'
import { NodeIcon } from '@status-im/icons'
import Header from '../../components/General/Header'
import Icon from '../../components/General/Icon'

const PairDevice = () => {
  const [isAwaitingPairing, setIsAwaitingPairing] = useState(false)
  const isPaired = false
  const isPairing = false

  const changeSetIsAwaitingPairing = (result: boolean) => {
    setIsAwaitingPairing(result)
  }

  return (
    <PageWrapperShadow rightImageSrc="./background-images/day-night-bg.png" rightImageLogo={true}>
      <YStack
        space={'$3'}
        style={{
          maxWidth: '100%',
        }}
      >
        <Header selectedTag="pair" />
        <Titles title="Pair Device" subtitle="Pair your device to the Nimbus Node Manager" />
        {isPaired ? <PairedSuccessfully /> : <GenerateId isAwaitingPairing={isAwaitingPairing} />}
        {!isPaired && (
          <SyncStatus
            isPairing={isPairing}
            isAwaitingPairing={isAwaitingPairing}
            changeSetIsAwaitingPairing={changeSetIsAwaitingPairing}
          />
        )}
        <Separator borderColor={'#e3e3e3'} />
        <Text size={19} weight={'semibold'} color="#09101C">
          Advanced Settings
        </Text>
        <XStack space={'$4'}>
          <Button icon={<Icon src="/icons/connection-blue.svg" width={20} />} variant="outline">
            Connect via IP
          </Button>
        </XStack>
        {isPaired && <CreateAvatar />}
        <Separator borderColor={'#e3e3e3'} />
        <XStack>
          <Button icon={<NodeIcon size={20} />} disabled={!isPaired}>
            Continue
          </Button>
        </XStack>
      </YStack>
    </PageWrapperShadow>
  )
}

export default PairDevice
