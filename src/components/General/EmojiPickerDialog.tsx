import EmojiPicker, {
  EmojiStyle,
  Theme,
  EmojiClickData,
  SuggestionMode,
  Categories,
} from 'emoji-picker-react'
import { useState } from 'react'
import { Stack } from 'tamagui'

type EmojiStyleType = 'FACEBOOK' | 'APPLE' | 'GOOGLE' | 'TWITTER' | 'NATIVE'

function EmojiPickerDialog({ emojiStyle }: { emojiStyle: EmojiStyleType }) {
  const [selectedEmoji, setSelectedEmoji] = useState<string>('')
//we can set 
  function onClick(emojiData: EmojiClickData) {
    setSelectedEmoji(emojiData.unified)
  }

  return (
    <Stack position="absolute" zIndex={1} left={120}>
      {/* <XStack>
        Your selected Emoji is:
        {selectedEmoji ? (
          <Emoji unified={selectedEmoji} emojiStyle={EmojiStyle.APPLE} size={22} />
        ) : null}
      </XStack> */}

      <EmojiPicker
        onEmojiClick={onClick}
        autoFocusSearch={false}
        theme={Theme.AUTO}
        height={350}
        width="100%"
        emojiVersion="1"
        lazyLoadEmojis={false}
        previewConfig={{ showPreview: false }}
        suggestedEmojisMode={SuggestionMode.RECENT}
        skinTonesDisabled
        searchPlaceHolder="Search emojis"
        emojiStyle={EmojiStyle[emojiStyle]}
        categories={[
          {
            name: 'People',
            category: Categories.SMILEYS_PEOPLE,
          },
          { name: 'Animals and Nature', category: Categories.ANIMALS_NATURE },
          {
            name: 'Fun and Games',
            category: Categories.ACTIVITIES,
          },
          {
            name: 'Flags',
            category: Categories.FLAGS,
          },
          {
            name: 'Yum Yum',
            category: Categories.FOOD_DRINK,
          },
          { name: 'Objects', category: Categories.OBJECTS },
        ]}
      />
    </Stack>
  )
}
export default EmojiPickerDialog
