import { XStack, YStack } from 'tamagui'
import { Button, IconButton, InformationBox, Text } from '@status-im/components'
import Icon from '../../components/General/Icon'
import RefreshBlackIcon from '/icons/refresh-black.svg'
import RefreshIcon from '/icons/refresh.svg'
import BlockIcon from '/icons/block.svg'
import ConnectionIcon from '/icons/connection.svg'
import { convertSecondsToTimerFormat } from '../../utilities'
import { useEffect, useState } from 'react'
type SyncStatusProps = {
  isPairing: boolean
}
const SyncStatus = ({ isPairing }: SyncStatusProps) => {
  const [elapsedTime, setElapsedTime] = useState(0)
  const [isAwaitingPairing, setIsAwaitingPairing] = useState(false)

  const resetTimer = () => {
    setElapsedTime(0)
    setIsAwaitingPairing(false)
  }
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (isPairing) {
      timer = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 65)
        if (elapsedTime >= 180) {
          setIsAwaitingPairing(true)
        }
      }, 1000)
    } else {
      setIsAwaitingPairing(false)
    }

    return () => clearInterval(timer)
  }, [isPairing, elapsedTime])

  const timer = convertSecondsToTimerFormat(elapsedTime) // Assuming you've imported the convertSecondsToTimerFormat function

  return (
    <YStack space={'$2'}>
      <XStack style={{ justifyContent: 'space-between' }}>
        <Text size={11} color="#647084" weight="medium">
          Device Sync Status
        </Text>
        {isPairing && (
          <Text
            size={isAwaitingPairing ? 15 : 11}
            color={isAwaitingPairing ? '#EB5757' : '#647084'}
            weight={isAwaitingPairing && 'semibold'}
          >
            {timer}
          </Text>
        )}
        <IconButton
          icon={<Icon src={isPairing ? RefreshBlackIcon : RefreshIcon} />}
          onPress={resetTimer}
          variant="ghost"
        />
      </XStack>
      {isPairing ? (
        <Text size={15} color={isAwaitingPairing ? '#EB5757' : '#09101C'} weight={'semibold'}>
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
          icon={<Icon src={BlockIcon} />}
        />
      )}
      {isAwaitingPairing && (
        <XStack>
          <Button icon={<Icon src={ConnectionIcon} />} size={40}>
            Connect via IP
          </Button>
        </XStack>
      )}
    </YStack>
  )
}

export default SyncStatus
