import { XStack, YStack } from 'tamagui'
import { Button, Text } from '@status-im/components'
import Icon from './Icon'

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
          <Button variant="outline" size={32} icon={<Icon src={'/icons/reveal.png'} />}>
            Advanced Settings
          </Button>
        ) : null}
      </XStack>
      <Text size={15} weight="regular">
        {subtitle}
      </Text>
    </YStack>
  )
}

export default Titles
