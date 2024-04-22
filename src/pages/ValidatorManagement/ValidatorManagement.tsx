import { Text } from '@status-im/components'
import { YStack } from 'tamagui'

import ManagementTabs from './ManagementTabs'
import ManagementHeader from './ManagementHeader'
import SidebarsWrapper from '../../components/PageWrappers/SidebarsWrapper'
import styles from './validatorManagement.module.css'
import DeviceUptime from '../Dashboard/DeviceUptime/DeviceUptime'
import ConsensusUptimeCard from '../Dashboard/ConsensusUptime/ConsensusUptimeCard'
import ExecutionUptime from '../Dashboard/ExecutionUptime/ExecutionUptime'
import BasicInfoCard from '../Dashboard/BasicInfoCards/BasicInfoCard'

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
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            width: '100%',
            gap: '16px',
          }}
          className={styles['cards']}
        >
          <DeviceUptime />
          <ConsensusUptimeCard />
          <ExecutionUptime />
          <BasicInfoCard title="Network Validators" value="498,156" />
          <BasicInfoCard title="Queue" value="145" />
        </div>
        <Text size={27} weight={'semibold'}>
          Validators
        </Text>
        <ManagementTabs />
      </YStack>
    </SidebarsWrapper>
  )
}

export default ValidatorManagement
