import { YStack } from 'tamagui'
import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import SyncStatus from './SyncStatus'

const PairDevice = () => {
  return (
    <PageWrapperShadow rightImageSrc="/background-images/day-night-bg.png">
      <YStack
        space={'$4'}
        style={{
          maxWidth: '100%',
        }}
      >
        <SyncStatus isPairing={true} timer={'00:12'} isAwaitingPairing={true}/>
      </YStack>
    </PageWrapperShadow>
  )
}

export default PairDevice
