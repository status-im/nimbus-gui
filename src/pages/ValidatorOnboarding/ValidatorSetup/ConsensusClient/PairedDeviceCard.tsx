import { XStack, YStack } from 'tamagui'
import { InfoBadgeIcon } from '@status-im/icons'
import { Avatar, Text } from '@status-im/components'

import BorderBox from '../../../../components/General/BorderBox'

const PairedDeviceCard = () => {
  return (
    <BorderBox
      style={{
        borderRadius: '10.1px',
        borderWidth: '0.5px',
        flex: '1',
        minWidth: '200px',
      }}
    >
      <XStack alignItems="center" justifyContent={'space-between'}>
        <XStack space={'$2'} alignItems="center">
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
    </BorderBox>
  )
}

export default PairedDeviceCard
