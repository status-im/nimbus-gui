import { XStack, YStack } from 'tamagui'
import { ClearIcon } from '@status-im/icons'
import { Avatar, Text } from '@status-im/components'

const PairedDeviceCard = () => {
  return (
    <XStack
      space={'$7'}
      style={{
        padding: '2px 6px',
        border: '1px solid #DCE0E5',
        borderRadius: '15px',
      }}
      alignItems={'center'}
    >
      <XStack space={'$3'} alignItems={'center'}>
        <Avatar backgroundColor="pink" size={32} type="user" name="RP" />
        <YStack>
          <Text size={13} color="#647084">
            Paired Device
          </Text>
          <Text size={15} weight={'semibold'}>
            Stake & Chips
          </Text>
        </YStack>
      </XStack>
      <ClearIcon size={20} color="#A1ABBD" />
    </XStack>
  )
}

export default PairedDeviceCard
