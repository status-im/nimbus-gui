import { Separator, YStack } from 'tamagui'
import { Text } from '@status-im/components'

import DashboardCardWrapper from '../DashboardCardWrapper'
import ExecutionClientCard from './ExecutionClientCard'
import ConsensusCard from './ConsensusClientCard'

const SyncStatusCards = () => {
  return (
    <DashboardCardWrapper
      style={{ padding: 0, height: '100%', minWidth: '200px' }}
    >
      <YStack space={'$3'}>
        <div style={{ padding: '8px 16px' }}>
          <Text size={19} weight={'semibold'}>
            Sync Status
          </Text>
        </div>

        <YStack>
          <ExecutionClientCard value={153.424} total={170} />
          <Separator borderColor={'#e3e3e3'} />

          <ConsensusCard value={103.424} total={170} />
        </YStack>
      </YStack>
    </DashboardCardWrapper>
  )
}

export default SyncStatusCards
