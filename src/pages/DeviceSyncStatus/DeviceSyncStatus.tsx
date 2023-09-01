import { Stack, YStack } from 'tamagui'

import { Button } from '@status-im/components'

import Titles from '../../components/General/Titles'
import NimbusLogo from '../../components/Logos/NimbusLogo'
import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import SyncStatusCardConsensus from './SyncStatusCardConsensus'
import SyncStatusCardExecution from './SyncStatusCardExecution'
import { setPinnedMessage } from '../../redux/PinnedMessage/slice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

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
          justifyContent: 'end',
          alignItems: 'start',
          maxWidth: '100%',
          marginTop: '4.4rem',
        }}
      >
        <NimbusLogo />
        <Titles
          title="Sync Status"
          subtitle="Monitor your Validator Client and Beacon Node syncing progression."
        />
        <YStack style={{ width: '100%' }}>
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
