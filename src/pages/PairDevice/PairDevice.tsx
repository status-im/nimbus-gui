import { Separator, XStack, YStack } from 'tamagui'
import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import SyncStatus from './SyncStatus'
import NimbusLogo from '../../components/Logos/NimbusLogo'
import { Button, Checkbox, Tag, Text } from '@status-im/components'
import PairIcon from '../../components/Icons/PairIcon'
import CreateIcon from '../../components/Icons/CreateIcon'
import NodeIcon from '../../components/Icons/NodeIcon'

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
        <Separator borderColor={'#e3e3e3'} />
        <Text size={19} weight={'semibold'} color="#09101C">
          Settings
        </Text>
        <XStack space={'$4'}>
          <Checkbox
            id="port-checkbox"
            variant="outline"
            selected={false}
            onCheckedChange={() => {
              console.log('checked')
            }}
            size={20}
          />
          <Text size={15}>Auto Connect Paired Device</Text>
        </XStack>
        <Separator borderColor={'#e3e3e3'} />
        <XStack>
          <Button icon={<NodeIcon />}>Continue</Button>
        </XStack>
      </YStack>
    </PageWrapperShadow>
  )
}

export default PairDevice
