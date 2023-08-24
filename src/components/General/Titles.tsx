import { XStack, YStack } from 'tamagui'
import { Button, Text } from '@status-im/components'
import { RevealIcon } from '@status-im/icons'

type TitlesProps = {
  title: string
  subtitle: string
  isAdvancedSettings?: boolean
}

const Titles = ({ title, subtitle, isAdvancedSettings }: TitlesProps) => {
  return (
    <YStack style={{ width: '100%', margin: '0 0 1em' }}>
      <XStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Text size={27} weight={'semibold'}>
          {title}
        </Text>
        {isAdvancedSettings && (
          <Button size={32} variant="outline" icon={<RevealIcon size={20} />}>
            Advanced Settings
          </Button>
        )}
      </XStack>
      <Text size={15}>{subtitle}</Text>
    </YStack>
  )
}

export default Titles
