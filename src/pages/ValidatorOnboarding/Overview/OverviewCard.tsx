import { Text } from '@status-im/components'

import styles from './overview.module.css'

type OverviewCardProps = {
  text: string
  value: string
}

const OverviewCard = ({ text, value }: OverviewCardProps) => {
  return (
    <div className={styles['overview-card']}>
      <div>
        <Text size={15} weight={'semibold'}>
          {text}
        </Text>
      </div>
      <Text size={27} weight={'semibold'} color="blue">
        {value}
      </Text>
    </div>
  )
}

export default OverviewCard
