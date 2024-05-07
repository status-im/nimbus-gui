import { Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

import ManagementTabs from './ManagementTabs'
import ManagementHeader from './ManagementHeader'
import SidebarsWrapper from '../../components/PageWrappers/SidebarsWrapper'
import DeviceUptime from '../Dashboard/DeviceUptime/DeviceUptime'
import ConsensusUptimeCard from '../Dashboard/ConsensusUptime/ConsensusUptimeCard'
import ExecutionUptime from '../Dashboard/ExecutionUptime/ExecutionUptime'
import BasicInfoCard from '../Dashboard/BasicInfoCards/BasicInfoCard'
import styles from './validatorManagement.module.css'

const ValidatorManagement = () => {
  return (
    <SidebarsWrapper isNotBottomPadding={true}>
      <YStack
        space="$4"
        style={{
          width: '100%',
        }}
        className={'transparent-scrollbar'}
      >
        <ManagementHeader />
        <XStack space="$4" style={{ width: '100%' }}>
          <DeviceUptime style={{ height: 'auto' }} />
          <XStack space="$4" style={{ width: '100%' }}>
            <YStack space="$4" style={{ width: '32%' }}>
              <ConsensusUptimeCard />
              <ExecutionUptime />
            </YStack>
            <YStack space="$4" style={{ width: '16%' }} >
              <BasicInfoCard title="Network Validators" value="498,156" />
              <BasicInfoCard title="Queue" value="145" />
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
