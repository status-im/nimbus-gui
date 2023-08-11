import { XStack, YStack } from 'tamagui'
import Title from './Title'
import SubTitle from './SubTitle'
import { Button } from '@status-im/components'
import Icon from './Icon'

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
          <Button size={32} variant="outline" icon={<Icon src={'/icons/reveal.png'} />}>
            Advanced Settings
          </Button>
        )}
      </XStack>
      <SubTitle color={'#09101C'}>{subtitle}</SubTitle>
    </YStack>
  )
}

export default Titles
