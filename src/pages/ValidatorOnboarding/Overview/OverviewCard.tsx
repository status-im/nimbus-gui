import { YStack } from 'tamagui'
import { Text } from '@status-im/components'

type OverviewCardProps = {
  text: string
  value: string
}
import './overviewLayout.css'
const OverviewCard = ({ text, value }: OverviewCardProps) => {
  return (
    <YStack className="overview-card">
      <Text size={15} weight={'semibold'}>
        {text}
      </Text>
      <Text size={27} color="blue" weight={'semibold'}>
        {value}
      </Text>
    </YStack>
  )
}

export default OverviewCard
