import { Separator, XStack, YStack } from 'tamagui'
import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import SyncStatus from './SyncStatus'
import NimbusLogo from '../../components/Logos/NimbusLogo'
import { Tag } from '@status-im/components'
import PairIcon from '../../components/Icons/PairIcon'
import CreateIcon from '../../components/Icons/CreateIcon'

const PairDevice = () => {
  return (
    <PageWrapperShadow rightImageSrc="/background-images/day-night-bg.png">
      <YStack
        space={'$4'}
        style={{
          maxWidth: '100%',
        }}
      >
        <XStack style={{ justifyContent: 'space-between' }}>
          <NimbusLogo />
          <XStack space={'$2'} style={{ alignItems: 'center' }}>
            <Tag icon={PairIcon} label="Pair" size={32} selected />
            <Tag icon={CreateIcon} label="Create" size={32} />
          </XStack>
        </XStack>
        <Separator borderColor={'#e3e3e3'} />
        <SyncStatus isPairing={true} timer={'00:12'} isAwaitingPairing={true} />
      </YStack>
    </PageWrapperShadow>
  )
}

export default PairDevice
