import styles from './overviewLayout.module.css'
import { Text, YStack } from 'tamagui'

type OverviewCardProps = {
  text: string
  value: string
}

const OverviewCard = ({ text, value }: OverviewCardProps) => {
  return (
    <YStack>
      <div className={styles.overviewCard}>
        <Text
          fontWeight={'500'}
          style={{ display: 'block', marginBottom: '8px', fontSize: '15px' }}
        >
          {text}
        </Text>
        <Text
          color="blue"
          fontWeight={'500'}
          style={{ display: 'block', marginBottom: '8px', fontSize: '27px' }}
        >
          {value}
        </Text>
      </div>
    </YStack>
  )
}

export default OverviewCard
