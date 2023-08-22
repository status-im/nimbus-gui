import { useEffect, useState } from 'react'
import { XStack, YStack } from 'tamagui'
import { Button, IconButton, InformationBox, Text } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'

import Icon from '../../components/General/Icon'
import ConnectionIcon from '/icons/connection.svg'
import { convertSecondsToTimerFormat } from '../../utilities'
import { RefreshIcon } from '@status-im/icons'
import { useNavigate } from 'react-router'

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
  const navigate = useNavigate()

  const resetTimer = () => {
    setElapsedTime(0)
    changeSetIsAwaitingPairing(false)
  }

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (isPairing) {
      timer = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 65)
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

  const connectViaIpHandler = () => {
    navigate('/connect-device');
  };

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
          icon={<RefreshIcon size={16} />}
          onPress={resetTimer}
          variant="ghost"
          disabled={!isPairing}
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
          icon={<CloseCircleIcon size={20} />}
        />
      )}
      {isAwaitingPairing && (
        <XStack>
          <Button icon={<Icon src={ConnectionIcon} />} size={40} onPress={connectViaIpHandler} >
            Connect via IP
          </Button>
        </XStack>
      )}
    </YStack>
  )
}

export default SyncStatus
