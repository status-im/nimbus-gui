import { XStack, YStack } from 'tamagui'
import LabelInputField from '../../components/General/LabelInputField'
import { Avatar, Text } from '@status-im/components'
import ColorPicker from '../../components/General/ColorPicker'

import ReactionIcon from '../../components/Icons/ReactionIcon'
// create func component
export const CreateAvatar = () => {
  return (
    <YStack my={16}>
      <XStack space>
        <LabelInputField labelText="Device Name" placeholderText="Stake and chips" />
      </XStack>
      <XStack my={10} justifyContent={'space-between'}>
        <YStack mr={30}>
          <Text size={13} weight="regular" color={'#647084'}>
            Device Avatar
          </Text>
          <XStack my={10}>
            <Avatar type="account" size={80} name="Device Avatar" />
            <Avatar type="icon" size={32} icon={<ReactionIcon />} backgroundColor={'white'} />
          </XStack>
        </YStack>
        <YStack>
          <Text size={13} weight="regular" color={'#647084'}>
            Highlight Color
          </Text>
          <ColorPicker />
        </YStack>
      </XStack>
    </YStack>
  )
}
