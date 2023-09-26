import { useEffect, useRef, useState } from 'react'
import { XStack, YStack } from 'tamagui'
import { Avatar, Text } from '@status-im/components'
import { ReactionIcon } from '@status-im/icons'
import './CreateAvatar.css'
import LabelInputField from '../LabelInputField'
import ColorPicker from '../ColorPicker/ColorPicker'
import EmojiPickerDialog from '../EmojiPickerDialog'
import { Emoji, EmojiClickData, EmojiStyle } from 'emoji-picker-react'

const CreateAvatar = () => {
  const [chosenColor, setChosenColor] = useState('#2A4AF5')
  const [isEmojiDialogOpen, setIsEmojiDialogOpen] = useState(false)
  const [selectedEmoji, setSelectedEmoji] = useState<string>('1f600')
  const emojiRef = useRef<HTMLDivElement | null>(null)

  function changeEmoji(emojiData: EmojiClickData) {
    setSelectedEmoji(emojiData.unified)
  }

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        setIsEmojiDialogOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [emojiRef])

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
              {selectedEmoji ? (
                <Emoji unified={selectedEmoji} emojiStyle={EmojiStyle.TWITTER} size={30} />
              ) : null}
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
            <div ref={emojiRef}>
              {isEmojiDialogOpen && (
                <EmojiPickerDialog changeEmoji={changeEmoji} emojiStyle="TWITTER" />
              )}
            </div>
          </XStack>
        </YStack>
        <YStack flexWrap="wrap" width="80%">
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
