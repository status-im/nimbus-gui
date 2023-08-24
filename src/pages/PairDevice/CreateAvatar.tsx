import { XStack, YStack } from 'tamagui'
import LabelInputField from '../../components/General/LabelInputField'
import { Avatar, Text } from '@status-im/components'
import ColorPicker from '../../components/General/ColorPicker/ColorPicker'
import { ReactionIcon } from '@status-im/icons'

const CreateAvatar = () => {
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
            <ReactionIcon size={20} />
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

export default CreateAvatar
