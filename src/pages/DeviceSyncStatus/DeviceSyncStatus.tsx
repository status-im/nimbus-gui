import { Stack, YStack } from 'tamagui'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@status-im/components'

import Titles from '../../components/General/Titles'
import NimbusLogo from '../../components/Logos/NimbusLogo'
import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import SyncStatusCardConsensus from './SyncStatusCardConsensus'
import SyncStatusCardExecution from './SyncStatusCardExecution'
import { setPinnedMessage } from '../../redux/PinnedMessage/slice'

const DeviceSyncStatus = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      setPinnedMessage({
        id: '123',
        text: 'You are currently syncing to the Nimbus Validator Client and Beacon node. This may take a while... Please stay put until you can access the Node Manager.',
        pinned: true,
      }),
    )
  }, [dispatch])

  return (
    <PageWrapperShadow
      rightImageSrc="./background-images/sync-status-background.png"
      imgHeight="120%"
    >
      <YStack
        space={'$4'}
        style={{
          alignItems: 'start',
          maxWidth: '100%',
        }}
      >
        <NimbusLogo />
        <Titles
          title="Sync Status"
          subtitle="Monitor your Validator Client and Beacon Node syncing progression."
        />
        <YStack style={{ width: '100%' }}>
          <SyncStatusCardExecution synced={132.432} total={200} />
          <SyncStatusCardConsensus synced={149.5} total={160} />
        </YStack>
        <Stack style={{ marginTop: '1rem' }}>
          <Button disabled>Continue</Button>
        </Stack>
      </YStack>
    </PageWrapperShadow>
  )
}

export default DeviceSyncStatus
