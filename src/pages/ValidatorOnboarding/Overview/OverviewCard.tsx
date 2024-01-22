import { YStack } from 'tamagui'
import { Text } from '@status-im/components'
import styles from './overviewLayout.module.css'
type OverviewCardProps = {
  text: string
  value: string
}

const OverviewCard = ({ text, value }: OverviewCardProps) => {
  return (
    <div className={styles.overviewCard}>
      <Text size={15} weight={'semibold'}>
        {text}
      </Text>
      <Text size={27} color="blue" weight={'semibold'}>
        {value}
      </Text>
    </div>
  )
}

export default OverviewCard
