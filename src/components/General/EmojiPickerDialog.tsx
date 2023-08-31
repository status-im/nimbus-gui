import EmojiPicker, {
  EmojiStyle,
  Theme,
  EmojiClickData,
  SuggestionMode,
  Categories,
} from 'emoji-picker-react'
import { Stack } from 'tamagui'

type EmojiStyleType = 'FACEBOOK' | 'APPLE' | 'GOOGLE' | 'TWITTER' | 'NATIVE'

type EmojiPickerProps = {
  emojiStyle: EmojiStyleType
  changeEmoji: (emojiData: EmojiClickData) => void
}

function EmojiPickerDialog({ emojiStyle, changeEmoji }: EmojiPickerProps) {
  return (
    <Stack position="absolute" zIndex={1} left={100}>
      <EmojiPicker
        onEmojiClick={changeEmoji}
        autoFocusSearch={false}
        theme={Theme.AUTO}
        height={350}
        width={350}
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
