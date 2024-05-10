import { Text } from '@status-im/components'
import { YStack } from 'tamagui'

import DashboardCardWrapper from '../../../pages/Dashboard/DashboardCardWrapper'

type BasicInfoCardProps = {
  title: string
  value: string
  style?: React.CSSProperties
}

const BasicInfoCard = ({ title, value, style }: BasicInfoCardProps) => {
  return (
    <DashboardCardWrapper style={style}>
      <YStack>
        <Text size={15} weight={'semibold'}>
          {title}
        </Text>
        <Text size={27} weight={'semibold'}>
          {value}
        </Text>
      </YStack>
    </DashboardCardWrapper>
  )
}

export default BasicInfoCard
