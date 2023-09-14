import { YStack } from 'tamagui'

import SyncCardContent from './SyncCardContent'
import DashboardCardWrapper from '../DashboardCardWrapper'

const SyncStatusCard = () => {
  return (
    <DashboardCardWrapper padding="0">
      <YStack space={'$2'}>
        Sync Status
        <SyncCardContent title={'Execution Client'} value={123.424} total={170.0} />
        <SyncCardContent title={'Consensus Client'} value={123.424} total={170.0} />
      </YStack>
    </DashboardCardWrapper>
  )
}

export default SyncStatusCard
