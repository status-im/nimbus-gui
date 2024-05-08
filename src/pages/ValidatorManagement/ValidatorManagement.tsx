import { Text } from '@status-im/components'
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '100%',
        }}
        className="transparent-scrollbar"
      >
        <ManagementHeader />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '12px',
          }}
        >
          <DeviceUptime
            style={{ flex: 1, minHeight: '100%' }}
            chartHeight="78%"
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '12px',
              flex: 1,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                flex: 1,
              }}
            >
              <ConsensusUptimeCard />
              <ExecutionUptime />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
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
            </div>
          </div>
        </div>
        <Text size={27} weight={'semibold'}>
          Validators
        </Text>
        <ManagementTabs />
      </div>
    </SidebarsWrapper>
  )
}

export default ValidatorManagement
