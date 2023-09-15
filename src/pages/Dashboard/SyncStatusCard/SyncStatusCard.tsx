import { Separator, YStack } from 'tamagui'

import SyncCardContent from './SyncCardContent'
import DashboardCardWrapper from '../DashboardCardWrapper'
import { Text } from '@status-im/components'

const SyncStatusCard = () => {
  return (
    <DashboardCardWrapper padding="0">
      <YStack space={'$2'}>
        <Text size={15} weight={'semibold'}>
          Sync Status
        </Text>
        <YStack>
          <SyncCardContent title={'Execution Client'} value={123.424} total={170.0} />
          <Separator borderColor={'#e3e3e3'} />
          <SyncCardContent title={'Consensus Client'} value={123.424} total={170.0} />
        </YStack>
      </YStack>
    </DashboardCardWrapper>
  )
}

export default SyncStatusCard
