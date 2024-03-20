import { useSelector } from 'react-redux'
import { XStack, YStack } from 'tamagui'
import { CloseCircleIcon } from '@status-im/icons'
import { InformationBox } from '@status-im/components'

import DeviceStorageHealth from '../../components/Charts/DeviceStorageHealth'
import DeviceCPULoad from '../../components/Charts/DeviceCPULoad'
import HealthInfoSection from '../../components/General/HealthInfoSection'
import DeviceMemory from '../../components/Charts/DeviceMemoryHealth'
import DeviceNetworkHealth from '../../components/Charts/DeviceNetworkHealth'
import { RootState } from '../../redux/store'
import TitleLogo from '../../components/General/TitleLogo'
import RightSidebar from '../../components/General/RightSideBar/RightSidebar'
import LeftSidebar from '../../components/General/LeftSidebar/LeftSidebar'
import styles from './deviceHealthCheck.module.css'

const DeviceHealthCheck = () => {
  const deviceHealthState = useSelector(
    (state: RootState) => state.deviceHealth,
  )

  return (
    <XStack style={{ height: '100vh' }}>
      <LeftSidebar />
      <YStack
        space={'$4'}
        alignItems="flex-start"
        style={{
          flexGrow: '1',
          overflowY: 'auto',
          padding: '0 24px 24px 24px',
          width: 'calc(100% - 380px)',
        }}
        className={'transparent-scrollbar'}
      >
        <TitleLogo subtitle="Device Health Check" />
        <div className={styles['cards-container']}>
          <DeviceStorageHealth
            storage={deviceHealthState.storage}
            maxStorage={deviceHealthState.maxMemory}
          />
          <DeviceCPULoad load={deviceHealthState.cpuLoad} />
          <DeviceMemory
            currentMemory={deviceHealthState.memory}
            maxMemory={deviceHealthState.maxMemory}
          />
          <DeviceNetworkHealth latency={deviceHealthState.latency} />
        </div>
        <HealthInfoSection
          usedStorage={120}
          maxStorage={160}
          usedRamMemory={8}
          maxRamMemory={16}
          cpuClockRate={2.5}
          networkLatency={75}
        />
        <InformationBox
          icon={<CloseCircleIcon size={20} />}
          message="The information provided in the Nodes Health Check is meant to utilized as a guide to guage the readiness of your device, however please do your own due diligence prior to commiting any funds. Read our Health Check Disclosure for more information."
        />
      </YStack>
      <RightSidebar />
    </XStack>
  )
}

export default DeviceHealthCheck
