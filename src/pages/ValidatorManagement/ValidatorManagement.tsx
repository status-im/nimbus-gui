import { Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
import ManagementTabs from './ManagementTabs'
import ManagementHeader from './ManagementHeader'
import SidebarsWrapper from '../../components/PageWrappers/SidebarsWrapper'
import DeviceUptime from '../Dashboard/DeviceUptime/DeviceUptime'
import ConsensusUptimeCard from '../Dashboard/ConsensusUptime/ConsensusUptimeCard'
import ExecutionUptime from '../Dashboard/ExecutionUptime/ExecutionUptime'
import BasicInfoCard from '../Dashboard/BasicInfoCards/BasicInfoCard'

const ValidatorManagement = () => {
  return (
    <SidebarsWrapper isNotBottomPadding={true}>
      <YStack
        space="$3"
        style={{ width: '100%' }}
        className={'transparent-scrollbar'}
      >
        <ManagementHeader />
        <XStack space="$3" style={{ width: '100%' }}>
          <DeviceUptime
            style={{ flex: '0 0 calc(50% - 8px)', minHeight: '100%' }}
          />
          <XStack space="$3" style={{ width: '100%', display: 'flex' }}>
            <YStack space="$3" style={{ flex: '0 0 calc(33.3% - 8px)' }}>
              <ConsensusUptimeCard />
              <ExecutionUptime />
            </YStack>
            <YStack space="$3" style={{ flex: '0 0 calc(16.6% - 8px)' }}>
              <BasicInfoCard
                style={{ height: 'calc(50% - 8px)' }}
                title="Network Validators"
                value="498,156"
              />
              <BasicInfoCard
                style={{ height: 'calc(50% - 8px)' }}
                title="Queue"
                value="145"
              />
            </YStack>
          </XStack>
        </XStack>
        <Text size={27} weight={'semibold'}>
          Validators
        </Text>
        <ManagementTabs />
      </YStack>
    </SidebarsWrapper>
  )
}

export default ValidatorManagement
