import { useState } from 'react'
import { XStack, YStack } from 'tamagui'
import { Avatar, Text } from '@status-im/components'
import { ReactionIcon } from '@status-im/icons'
import './CreateAvatar.css'
import LabelInputField from '../LabelInputField'
import ColorPicker from '../ColorPicker/ColorPicker'
import EmojiPickerDialog from '../EmojiPickerDialog'

const CreateAvatar = () => {
  const [chosenColor, setChosenColor] = useState('#2A4AF5')
  const [isEmojiDialogOpen, setIsEmojiDialogOpen] = useState(false)
  return (
    <YStack my={16}>
      <XStack space>
        <LabelInputField labelText="Device Name" placeholderText="Stake and chips" />
      </XStack>
      <XStack my={10} justifyContent={'space-between'}>
        <YStack mr={60}>
          <Text size={13} weight="regular" color={'#647084'}>
            Device Avatar
          </Text>
          <XStack my={10} alignItems={'end'}>
            <div className="device-avatar" style={{ background: chosenColor }}>
              <img src="./icons/nodes-app-icon.png" alt="" />
            </div>
            <Avatar
              type="icon"
              size={32}
              icon={
                <ReactionIcon
                  size={20}
                  onClick={() => setIsEmojiDialogOpen(prev => !prev)}
                  style={{ cursor: 'pointer' }}
                />
              }
            />
            {isEmojiDialogOpen && <EmojiPickerDialog emojiStyle="TWITTER" />}
          </XStack>
        </YStack>
        <YStack>
          <Text size={13} weight="regular" color={'#647084'}>
            Highlight Color
          </Text>
          <ColorPicker setChosenColor={setChosenColor} />
        </YStack>
      </XStack>
    </YStack>
  )
}

export default CreateAvatar
