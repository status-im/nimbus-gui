import { Separator, XStack, YStack } from 'tamagui'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Button, Checkbox, Tag, Text } from '@status-im/components'

import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import SyncStatus from './SyncStatus'
import NimbusLogo from '../../components/Logos/NimbusLogo'
import PairIcon from '../../components/Icons/PairIcon'
import CreateIcon from '../../components/Icons/CreateIcon'
import NodeIcon from '../../components/Icons/NodeIcon'
import Titles from '../../components/General/Titles'
import { convertSecondsToTimerFormat } from '../../utilities'
import CompleteId from '../../components/Icons/CompleteId'

const PairDevice = () => {
  const [autoChecked, setAutoChecked] = useState(false)
  const isPaired = false

  console.log(uuidv4())

  const [isPairing] = useState(true) // assuming starting as true for demo
  const [isAwaitingPairing, setIsAwaitingPairing] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)

  const resetTimer = () => {
    setElapsedTime(0)
    setIsAwaitingPairing(false)
  }

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (isPairing) {
      timer = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 1)
        if (elapsedTime >= 180) {
          setIsAwaitingPairing(true)
        }
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [isPairing, elapsedTime])

  return (
    <PageWrapperShadow rightImageSrc="/background-images/day-night-bg.png">
      <YStack
        space={'$4'}
        style={{
          maxWidth: '100%',
        }}
      >
        <XStack style={{ justifyContent: 'space-between' }}>
          <NimbusLogo />
          <XStack space={'$2'} style={{ alignItems: 'center' }}>
            <Tag icon={PairIcon} label="Pair" size={32} selected />
            <Tag icon={CreateIcon} label="Create" size={32} />
          </XStack>
        </XStack>
        <Titles title="Pair Device" subtitle="Pair your device to the Nimbus Node Manager" />
        <XStack style={{ justifyContent: 'space-between' }}>
          <Text size={19} weight={'semibold'}>
            Pair with Command line
          </Text>
          <Button variant="outline" size={24} icon={<CompleteId />}>
            Generate ID
          </Button>
        </XStack>
        <Separator borderColor={'#e3e3e3'} />
        <SyncStatus
          isPairing={isPairing}
          timer={convertSecondsToTimerFormat(elapsedTime)}
          isAwaitingPairing={isAwaitingPairing}
          onResetTimer={resetTimer}
        />
        <Separator borderColor={'#e3e3e3'} />
        <Text size={19} weight={'semibold'} color="#09101C">
          Settings
        </Text>
        <XStack space={'$4'}>
          <Checkbox
            id="port-checkbox"
            variant="outline"
            selected={autoChecked}
            onCheckedChange={v => {
              setAutoChecked(v)
            }}
            size={20}
          />
          <Text size={15}>Auto Connect Paired Device</Text>
        </XStack>
        <Separator borderColor={'#e3e3e3'} />
        <XStack>
          <Button icon={<NodeIcon />} disabled={!isPaired}>
            Continue
          </Button>
        </XStack>
      </YStack>
    </PageWrapperShadow>
  )
}

export default PairDevice
