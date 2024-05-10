import { Text } from '@status-im/components'
import ManagementTabs from './ManagementTabs'
import ManagementHeader from './ManagementHeader'
import SidebarsWrapper from '../../components/PageWrappers/SidebarsWrapper'
import DeviceUptime from '../../components/Charts/DeviceUptime/DeviceUptime'
import ConsensusUptimeCard from '../../components/Charts/ConsensusUptime/ConsensusUptimeCard'
import ExecutionUptime from '../../components/Charts/ExecutionUptime/ExecutionUptime'
import BasicInfoCard from '../../components/Charts/BasicInfoCard/BasicInfoCard'
import styles from './validatorManagement.module.css'
import { useWindowSize } from '../../hooks/useWindowSize'

const ValidatorManagement = () => {
  const { width } = useWindowSize()

  const isDeviceCardColumn = width < 900
  const isBasicCardColumn = width > 600 || width <= 475

  const basicCardStyle = {
    height: isBasicCardColumn ? 'calc(50% - 12px)' : '100%',
    width: isBasicCardColumn ? '100%' : 'calc(50% - 12px)',
  }

  return (
    <SidebarsWrapper isNotBottomPadding={true}>
      <div className={`${styles['main-container']} transparent-scrollbar`}>
        <ManagementHeader />
        <div className={styles['cards-container']}>
          <DeviceUptime
            style={{ flex: 1, minHeight: isDeviceCardColumn ? '0' : '100%' }}
            chartHeight={isDeviceCardColumn ? '60%' : '78%'}
          />
          <div className={styles['right-cards-container']}>
            <div className={styles['charts-container']}>
              <ConsensusUptimeCard />
              <ExecutionUptime />
            </div>
            <div className={styles['basic-info-cards-container']}>
              <BasicInfoCard
                style={basicCardStyle}
                title="Network Validators"
                value="498,156"
              />
              <BasicInfoCard style={basicCardStyle} title="Queue" value="145" />
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
