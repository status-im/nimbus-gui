import { XStack, YStack } from 'tamagui'
import { Button, Text } from '@status-im/components'
import { RevealIcon } from '@status-im/icons'

type TitlesProps = {
  title: string
  subtitle: string
  isAdvancedSettings?: boolean
  titleSize?: 27 | 15 | 11 | 13 | 19
  subtitleSize?: 27 | 15 | 11 | 13 | 19
}

const Titles = ({
  title,
  subtitle,
  isAdvancedSettings,
  titleSize = 27,
  subtitleSize = 15,
}: TitlesProps) => {
  return (
    <YStack style={{ width: '100%', margin: '0 0 1em' }}>
      <XStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Text size={titleSize} weight={'semibold'}>
          {title}
        </Text>
        {isAdvancedSettings && (
          <Button size={32} variant="outline" icon={<RevealIcon size={20} />}>
            Advanced Settings
          </Button>
        )}
      </XStack>
      <Text size={subtitleSize}>{subtitle}</Text>
    </YStack>
  )
}

export default Titles
