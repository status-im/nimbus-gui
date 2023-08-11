import { XStack, YStack } from 'tamagui'
import Title from './Title'
import SubTitle from './SubTitle'
import { Button } from '@status-im/components'
import Icon from './Icon'

type TitlesProps = {
  title: string
  subtitle: string
}

const Titles = ({ title, subtitle }: TitlesProps) => {
  return (
    <YStack style={{ width: '100%' }}>
      <XStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Title color={'#09101C'}>{title}</Title>
        <Button variant="outline" size={32} icon={<Icon src={'/icons/reveal.png'} />}>
          Advanced Settings
        </Button>
      </XStack>
      <SubTitle color={'#09101C'}>{subtitle}</SubTitle>
    </YStack>
  )
}

export default Titles
