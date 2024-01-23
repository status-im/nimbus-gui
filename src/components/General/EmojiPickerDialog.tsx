import EmojiPicker, {
  EmojiStyle,
  Theme,
  EmojiClickData,
  SuggestionMode,
  Categories,
} from 'emoji-picker-react'
import { Stack } from 'tamagui'
import { useWindowSize } from '../../hooks/useWindowSize'

type EmojiStyleType = 'FACEBOOK' | 'APPLE' | 'GOOGLE' | 'TWITTER' | 'NATIVE'

type EmojiPickerProps = {
  emojiStyle: EmojiStyleType
  changeEmoji: (emojiData: EmojiClickData) => void
}

const EmojiPickerDialog = ({ emojiStyle, changeEmoji }: EmojiPickerProps) => {
  const windowSize = useWindowSize()

  const getEmojiPickerWidth = () => {
    if (windowSize.width < 505) {
      return '67vw'
    } else if (windowSize.width < 640) {
      return '73vw'
    } else if (windowSize.width < 780) {
      return '78vw'
    } else if (windowSize.width < 1000) {
      return '82vw'
    } else {
      return '40vw'
    }
  }

  if (windowSize.width === 0) {
    return null
  }

  return (
    <Stack position="absolute" zIndex={1} left={100} top={-150}>
      <EmojiPicker
        onEmojiClick={changeEmoji}
        autoFocusSearch={false}
        theme={Theme.AUTO}
        height={'50vh'}
        width={getEmojiPickerWidth()}
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
