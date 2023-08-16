import { XStack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import Icon from '../../components/General/Icon'
type SyncStatusProps = {
  isPairing: boolean
  timer: string
}
const SyncStatus = ({ isPairing, timer }: SyncStatusProps) => {
  return (
    <YStack style={{ width: '584px' }}>
      <XStack space={'$4'} style={{ justifyContent: 'space-between' }}>
        <Text size={11} color="#647084" weight="medium">
          Device Sync Status
        </Text>
        {isPairing && (
          <Text size={11} color="#647084">
            {timer}
          </Text>
        )}
        <Icon src={isPairing ? '/icons/refresh-black.svg' : '/icons/refresh.svg'} height={20} />
      </XStack>
      {isPairing ? (
        <Text size={15} color="#09101C" weight={'semibold'}>
          Awaiting pairing connection...
        </Text>
      ) : (
        <Text size={13} color="#A1ABBD">
          No pairing input provided.
        </Text>
      )}
    </YStack>
  )
}

export default SyncStatus
