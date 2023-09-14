import { YStack } from 'tamagui'

import SyncCardContent from './SyncCardContent'
import DashboardCardWrapper from '../DashboardCardWrapper'

const SyncStatusCard = () => {
  return (
    <DashboardCardWrapper padding="0">
      <YStack space={'$2'}>
        Sync Status
        <SyncCardContent />
        <SyncCardContent />
      </YStack>
    </DashboardCardWrapper>
  )
}

export default SyncStatusCard
