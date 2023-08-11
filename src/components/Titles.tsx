import { XStack, YStack } from 'tamagui'
import Title from './Title'
import SubTitle from './SubTitle'

type TitlesProps = {
  title: string
  subtitle: string
}

const Titles = ({ title, subtitle }: TitlesProps) => {
  return (
    <YStack>
      <XStack justifyContent="space-between">
        <Title color={'#09101C'}>{title}</Title>
        {/* <IconButton
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
        </IconButton> */}
      </XStack>
      <SubTitle color={'#09101C'}>{subtitle}</SubTitle>
    </YStack>
  )
}

export default Titles
