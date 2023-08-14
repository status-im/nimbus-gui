import { Stack, XStack, YStack } from 'tamagui'
import LayoutComponent from '../../components/LayoutComponent'
import NimbusLogo from '../../components/NimbusLogo'
import Titles from '../../components/Titles'
import DeviceStorageHealth from '../../components/DeviceStorageHealth'
import DeviceCPULoad from '../../components/DeviceCPULoad'
import HealthInfoSection from '../../components/HealthInfoSection'
import { Button, InformationBox } from '@status-im/components'
import Icon from '../../components/Icon'
import DeviceMemory from '../../components/DeviceMemoryHealth'
import DeviceNetworkHealth from '../../components/DeviceNetworkHealth'

const DeviceHealthCheck = () => {
  return (
    <LayoutComponent
      content={<DeviceHealthCheckContent />}
      rightImageSrc="/background-images/eye-background.png"
    />
  )
}

export default DeviceHealthCheck

const DeviceHealthCheckContent = () => {
  return (
    <div className="container-inner landing-page">
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
          <DeviceStorageHealth storage={44} maxStorage={30} />
          <DeviceCPULoad load={[12, 123, 4,90]} />
        </XStack>
        <XStack space={'$4'}>
          <DeviceMemory currentMemory={[25, 31, 5, 14, 20,81]} maxMemory={38} />
          <DeviceNetworkHealth uploadRate={[1, 4, 23, 55]} downloadRate={[20, 3, 40, 56]} />
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
          icon={<Icon src="/icons/close.png" width={11} height={11} />}
          message="The information provided in the Nodes Health Check is meant to utilized as a guide to guage the readiness of your device, however please do your own due diligence prior to commiting any funds. Read our Health Check Disclosure for more information."
        />
        <Stack style={{ marginTop: '1rem' }}>
          <Button>Continue</Button>
        </Stack>
      </YStack>
    </div>
  )
}
