import { Stack, YStack } from 'tamagui'
import LayoutComponent from '../../components/LayoutComponent'
import NimbusLogo from '../../components/NimbusLogo'
import Titles from '../../components/Titles'
import { Button } from '@status-im/components'
import SyncStatusCardExecution from '../../components/SyncStatusCardExecution'
import SyncStatusCardConsensus from '../../components/SyncStatusCardConsensus'

const DeviceSyncStatus = () => {
  return (
    <LayoutComponent
      content={<DeviceSyncStatusContent />}
      rightImageSrc="/background-images/sync-status-background.png"
    />
  )
}

export default DeviceSyncStatus

const DeviceSyncStatusContent = () => {
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

        <SyncStatusCardExecution synced={30} total={50} />
        <SyncStatusCardConsensus synced={30} total={50} />
        <Stack style={{ marginTop: '1rem' }}>
          <Button>Continue</Button>
        </Stack>
      </YStack>
    </div>
  )
}
