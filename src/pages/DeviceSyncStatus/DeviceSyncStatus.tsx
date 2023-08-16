import { Stack, YStack } from 'tamagui'

import { Button, PinnedMessage } from '@status-im/components'
import SyncStatusCardExecution from '../../components/SyncStatusCardExecution'
import SyncStatusCardConsensus from '../../components/SyncStatusCardConsensus'
import Titles from '../../components/General/Titles'
import NimbusLogo from '../../components/Logos/NimbusLogo'
import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'

const DeviceSyncStatus = () => {
  return (
    <PageWrapperShadow rightImageSrc="/background-images/sync-status-background.png">
      <Stack>
        <PinnedMessage
          messages={[
            {
              id: '123',
              text: 'You are currently syncing to the Nimbus Validator Client and Beacon node. This may take a while... Please stay put until you can access the Node Manager.',
              reactions: { love: new Set(['userId1', 'userId2']) },
            },
            {
              id: '123',
              text: 'You are currently syncing to the Nimbus Validator Client and Beacon node. This may take a while... Please stay put until you can access the Node Manager.',
              reactions: { love: new Set(['userId3', 'userId4w']) },
            },
          ]}
        />
      </Stack>
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
          <YStack>
            <SyncStatusCardExecution synced={132432} total={200000} />
            <SyncStatusCardConsensus synced={149500} total={160000} />
          </YStack>
          <Stack style={{ marginTop: '1rem' }}>
            <Button>Continue</Button>
          </Stack>
        </YStack>
      </div>
    </PageWrapperShadow>
  )
}

export default DeviceSyncStatus
