import { YStack } from 'tamagui'
import { formatNumberForGauge } from '../../../utilities'

type SyncCardContentProps = {
  title: string
  value: number
  total: number
}

const SyncCardContent = ({ title, value, total }: SyncCardContentProps) => {
  return (
    <YStack>
      {title} {formatNumberForGauge(value)} / {formatNumberForGauge(total)}
    </YStack>
  )
}

export default SyncCardContent
