import { XStack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import Icon from '../../components/General/Icon'
const SyncStatus = () => {
  return (
    <YStack style={{ width: '584px' }}>
      <XStack space={'$4'} style={{ justifyContent: 'space-between' }}>
        <Text size={11} color="#647084" weight="medium">
          Device Sync Status
        </Text>
        <Icon src="/icons/refresh.svg" />
      </XStack>
      <Text size={13} color="#A1ABBD" >
        No pairing input provided.
      </Text>
    </YStack>
  )
}

export default SyncStatus
