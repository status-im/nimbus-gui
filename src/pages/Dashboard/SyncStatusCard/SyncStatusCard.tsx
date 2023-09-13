import { YStack } from 'tamagui'
import SyncCardContent from './SyncCardContent'

const SyncStatusCard = () => {
  return (
    <YStack space={'$2'}>
      Sync Status
      <SyncCardContent />
      <SyncCardContent />
    </YStack>
  )
}

export default SyncStatusCard
