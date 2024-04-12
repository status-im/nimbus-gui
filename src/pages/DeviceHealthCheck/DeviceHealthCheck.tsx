import { useSelector } from 'react-redux'
import { YStack } from 'tamagui'
import { CloseCircleIcon } from '@status-im/icons'
import { InformationBox } from '@status-im/components'

import DeviceStorageHealth from '../../components/Charts/DeviceStorageHealth'
import DeviceCPULoad from '../../components/Charts/DeviceCPULoad'
import HealthInfoSection from '../../components/General/HealthInfoSection'
import DeviceMemory from '../../components/Charts/DeviceMemoryHealth'
import DeviceNetworkHealth from '../../components/Charts/DeviceNetworkHealth'
import { RootState } from '../../redux/store'
import NimbusLogo from '../../components/Logos/NimbusLogo'
import styles from './deviceHealthCheck.module.css'
import SidebarsWrapper from '../../components/PageWrappers/SidebarsWrapper'

const DeviceHealthCheck = () => {
  const deviceHealthState = useSelector(
    (state: RootState) => state.deviceHealth,
  )

  return (
    <SidebarsWrapper>
      <YStack
        space={'$4'}
        alignItems="flex-start"
        style={{
          flexGrow: '1',
          width: 'calc(100% - 380px)',
        }}
      >
        <NimbusLogo subtitle="Device Health Check" />
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
    </SidebarsWrapper>
  )
}

export default DeviceHealthCheck
