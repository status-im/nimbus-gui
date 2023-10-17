import { XStack, YStack } from 'tamagui'
import { InfoBadgeIcon } from '@status-im/icons'
import { Avatar, Text } from '@status-im/components'

const PairedDeviceCard = () => {
  return (
    <XStack
      space={'$7'}
      style={{
        padding: '6px 12px',
        border: '1px solid #DCE0E5',
        borderRadius: '10px',
      }}
      alignItems={'center'}
    >
      <XStack space={'$3'} alignItems={'center'}>
        <Avatar
          backgroundColor="pink"
          type="icon"
          size={32}
          icon={<img src={'/icons/pepper.svg'} alt="pepper" />}
        />
        <YStack>
          <Text size={13} color="#647084">
            Paired Device
          </Text>
          <Text size={15} weight={'semibold'}>
            Stake & Chips
          </Text>
        </YStack>
      </XStack>
      <InfoBadgeIcon size={20} color="#A1ABBD" cursor={'pointer'} />
    </XStack>
  )
}

export default PairedDeviceCard
