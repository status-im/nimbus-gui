import { XStack, YStack } from 'tamagui'
import { Button, Text } from '@status-im/components'
import Title from './Title'
import { RevealIcon } from '@status-im/icons'

type TitlesProps = {
  title: string
  subtitle: string
  isAdvancedSettings?: boolean
}

const Titles = ({ title, subtitle, isAdvancedSettings }: TitlesProps) => {
  return (
    <YStack style={{ width: '100%' }}>
      <XStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Title color={'#09101C'}>{title}</Title>
        {isAdvancedSettings && (
          <Button size={32} variant="outline" icon={<RevealIcon size={20} />}>
            Advanced Settings
          </Button>
        )}
      </XStack>
      <Text size={15} weight="regular">
        {subtitle}
      </Text>
    </YStack>
  )
}

export default Titles
