import { XStack, YStack } from 'tamagui'
import { Button, Text } from '@status-im/components'
import Icon from './Icon'
import Title from './Title'

type TitlesProps = {
  title: string
  subtitle: string
  isAdvancedSettings?: boolean
}

const Titles = ({ title, subtitle, isAdvancedSettings }: TitlesProps) => {
  return (
    <YStack style={{ width: '100%', margin: '0 0 1em' }}>
      <XStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Title color={'#09101C'}>{title}</Title>
        {isAdvancedSettings && (
          <Button size={32} variant="outline" icon={<Icon src={'/icons/reveal.png'} />}>
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
