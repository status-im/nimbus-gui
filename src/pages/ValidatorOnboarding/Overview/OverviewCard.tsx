import { YStack } from 'tamagui'
import { Text } from '@status-im/components'

type OverviewCardProps = {
  text: string
  value: string
}

const OverviewCard = ({ text, value }: OverviewCardProps) => {
  return (
    <YStack
      style={{
        borderRadius: '16px',
        border: '1px solid rgba(0, 0, 0, 0.15)',
        width: '45%',
        padding: '12px 16px',
        backgroundColor: '#FFF',
      }}
    >
      <Text size={19} weight={'semibold'}>
        {text}
      </Text>
      <Text size={27} color="blue" weight={'semibold'}>
        {value}
      </Text>
    </YStack>
  )
}

export default OverviewCard
