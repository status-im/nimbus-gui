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
          <ConsensusCard title={'Execution Client'} value={123.424} total={170} isTop={true} />
          <Separator borderColor={'#e3e3e3'} />
          <ExecutionClientCard title={'Consensus Client'} value={123.424} total={170} isTop={false} />
        </YStack>
      </YStack>
    </DashboardCardWrapper>
  )
}

export default SyncStatusCard
