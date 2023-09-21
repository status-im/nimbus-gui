import { Separator, Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'

import DashboardCardWrapper from '../DashboardCardWrapper'
import ExecutionClientCard from './ExecutionClientCard'
import ConsensusCard from './ConsensusClientCard'

const SyncStatusCard = () => {
  return (
    <DashboardCardWrapper padding="0">
      <YStack space={'$2'}>
        <Stack style={{ paddingTop: '12px', paddingLeft: '16px' }}>
          <Text size={15} weight={'semibold'}>
            Sync Status
          </Text>
        </Stack>
        <YStack>
          <ExecutionClientCard value={123.424} total={170} isTop={false} />
          <Separator borderColor={'#e3e3e3'} />
          <ConsensusCard  value={123.424} total={170} isTop={true} />
        </YStack>
      </YStack>
    </DashboardCardWrapper>
  )
}

export default SyncStatusCard
