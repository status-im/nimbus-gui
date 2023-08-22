import { Stack, XStack, YStack } from 'tamagui'
import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import NimbusLogo from '../../components/Logos/NimbusLogo'
import Titles from '../../components/General/Titles'
import DeviceStorageHealth from '../../components/Charts/DeviceStorageHealth'
import DeviceCPULoad from '../../components/Charts/DeviceCPULoad'
import HealthInfoSection from '../../components/General/HealthInfoSection'
import { Button, InformationBox } from '@status-im/components'
import DeviceMemory from '../../components/Charts/DeviceMemoryHealth'
import DeviceNetworkHealth from '../../components/Charts/DeviceNetworkHealth'
import { CloseCircleIcon } from '@status-im/icons'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const DeviceHealthCheck = () => {
  const deviceHealthState = useSelector((state: RootState) => state.deviceHealth)

  return (
    <PageWrapperShadow rightImageSrc="/background-images/eye-background.png">
      <YStack
        space={'$4'}
        style={{
          justifyContent: 'end',
          alignItems: 'start',
          marginBottom: '2rem',
          maxWidth: '100%',
        }}
      >
        <NimbusLogo />
        <Titles
          title="Device Health Check"
          subtitle="Configure your device to start Staking on Nimbus"
          isAdvancedSettings={true}
        />
        <XStack space={'$4'}>
          <DeviceStorageHealth
            storage={deviceHealthState.storage}
            maxStorage={deviceHealthState.maxMemory}
          />
          <DeviceCPULoad load={deviceHealthState.cpuLoad} />
        </XStack>
        <XStack space={'$4'}>
          <DeviceMemory
            currentMemory={deviceHealthState.memory}
            maxMemory={deviceHealthState.maxMemory}
          />
          <DeviceNetworkHealth
            uploadRate={deviceHealthState.uploadRate}
            downloadRate={deviceHealthState.downloadRate}
          />
        </XStack>
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
        <Stack style={{ marginTop: '1rem' }}>
          <Button>Continue</Button>
        </Stack>
      </YStack>
    </PageWrapperShadow>
  )
}

export default DeviceHealthCheck
