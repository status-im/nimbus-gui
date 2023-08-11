import { XStack, YStack } from 'tamagui'
import IconButton from './IconButton'
import { Text } from '@status-im/components'

type TitlesProps = {
  title: string
  subtitle: string
  button?: boolean
}

const Titles = ({ title, subtitle, button }: TitlesProps) => {
  return (
    <YStack>
      <XStack justifyContent="space-between">
        <Text size={27} weight="semibold">
          {title}
        </Text>
        {button ? (
          <IconButton
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #DCE0E5',
              color: '#09101C',
            }}
            size={'$3'}
            icon={'/icons/reveal.png'}
            fontSize={'$5'}
          >
            Advanced Settings
          </IconButton>
        ) : null}
      </XStack>
      <Text size={15} weight="regular">
        {subtitle}
      </Text>
    </YStack>
  )
}

export default Titles
