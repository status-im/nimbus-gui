import { Stack, XStack, YStack } from 'tamagui'
import LayoutComponent from '../../components/LayoutComponent'
import NimbusLogo from '../../components/NimbusLogo'
import Titles from '../../components/Titles'
import DeviceStorageHealth from '../../components/DeviceStorageHealth'
import DeviceCPULoad from '../../components/DeviceCPULoad'
import HealthInfoSection from '../../components/HealthInfoSection'
import { Button, InformationBox } from '@status-im/components'
import Icon from '../../components/Icon'

const DeviceHealthCheck = () => {
  return (
    <LayoutComponent
      content={<DeviceHeanlthCheckContent />}
      rightImageSrc="/background-images/eye-background.png"
    />
  )
}

export default DeviceHealthCheck

const DeviceHeanlthCheckContent = () => {
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
        />
        <XStack space={'$4'}>
          <DeviceStorageHealth storage={1} maxStorage={2} />
          <DeviceStorageHealth storage={2} maxStorage={1} />
        </XStack>
        <XStack space={'$4'}>
          <DeviceCPULoad load={[12, 123, 4]} />
          <DeviceCPULoad load={[1, 4, 23]} />
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
