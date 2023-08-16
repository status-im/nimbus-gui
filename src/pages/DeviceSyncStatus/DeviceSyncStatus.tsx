import { Stack, YStack } from 'tamagui'

import { Button, PinnedMessage } from '@status-im/components'

import Titles from '../../components/General/Titles'
import NimbusLogo from '../../components/Logos/NimbusLogo'
import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import SyncStatusCardConsensus from './SyncStatusCardConsensus'
import SyncStatusCardExecution from './SyncStatusCardExecution'

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
          title="Sync Status"
          subtitle="Monitor your Validator Client and Beacon Node syncing progression."
        />
        <YStack>
          <SyncStatusCardExecution synced={132432} total={200000} />
          <SyncStatusCardConsensus synced={149500} total={160000} />
        </YStack>
        <Stack style={{ marginTop: '1rem' }}>
          <Button>Continue</Button>
        </Stack>
      </YStack>
    </PageWrapperShadow>
  )
}

export default DeviceSyncStatus
