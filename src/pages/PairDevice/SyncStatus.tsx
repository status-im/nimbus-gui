import { useEffect, useState } from 'react'
import { XStack, YStack } from 'tamagui'
import { IconButton, InformationBox, Text } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'
import { RefreshIcon } from '@status-im/icons'

import { convertSecondsToTimerFormat } from '../../utilities'

type SyncStatusProps = {
  isPairing: boolean
  isAwaitingPairing?: boolean
  changeSetIsAwaitingPairing: (isAwaitingPairing: boolean) => void
}

const SyncStatus = ({
  isPairing,
  isAwaitingPairing,
  changeSetIsAwaitingPairing,
}: SyncStatusProps) => {
  const [elapsedTime, setElapsedTime] = useState(0)

  const resetTimer = () => {
    setElapsedTime(0)
    changeSetIsAwaitingPairing(false)
  }

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (isPairing) {
      timer = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 1000)
        if (elapsedTime >= 180) {
          changeSetIsAwaitingPairing(true)
        }
      }, 1000)
    } else {
      changeSetIsAwaitingPairing(false)
    }

    return () => clearInterval(timer)
  }, [isPairing, elapsedTime])

  const timer = convertSecondsToTimerFormat(elapsedTime)

  return (
    <YStack>
      <XStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Text size={11} color="#647084" weight="medium">
          Device Sync Status
        </Text>
        {isPairing && (
          <Text
            size={13}
            color={isAwaitingPairing ? '#EB5757' : '#647084'}
            weight={isAwaitingPairing ? 'semibold' : 'regular'}
          >
            {timer}
          </Text>
        )}
        <IconButton
          icon={<RefreshIcon size={16} />}
          onPress={resetTimer}
          variant="ghost"
          disabled={!isPairing}
        />
      </XStack>
      {isPairing ? (
        <Text
          size={15}
          color={isAwaitingPairing ? '#EB5757' : '#09101C'}
          weight={'semibold'}
        >
          Awaiting pairing connection...
        </Text>
      ) : (
        <Text size={13} color="#A1ABBD">
          No pairing input provided.
        </Text>
      )}
      {isAwaitingPairing && (
        <InformationBox
          message="No connection has been created to a Nimbus service for over 3 minutes. Please ensure that the generated pairing ID was input into the CLI. If you are unable to pair device, consider connect via IP.   "
          variant="error"
          icon={<CloseCircleIcon size={20} />}
        />
      )}
    </YStack>
  )
}

export default SyncStatus
