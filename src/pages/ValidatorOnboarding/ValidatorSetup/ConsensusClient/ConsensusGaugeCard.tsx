import { Stack, XStack, YStack } from 'tamagui'
import { InfoBadgeIcon } from '@status-im/icons'
import { Text } from '@status-im/components'

import StandardGauge from '../../../../components/Charts/StandardGauge'
import BorderBox from '../../../../components/General/BorderBox'
import { formatNumbersWithComa } from '../../../../utilities'

type ConsensusGaugeCardProps = {
  synced: number
  total: number
  title: string
  color: string
}

const ConsensusGaugeCard = ({ synced, total, title, color }: ConsensusGaugeCardProps) => {
  return (
    <BorderBox style={{ borderRadius: '10.1px', borderWidth: '0.5px' }}>
      <XStack space={'$2'} alignItems="center">
        <Stack
          style={{
            height: '35px',
            width: '35px',
          }}
        >
          <StandardGauge
            data={[
              {
                id: title,
                label: title,
                value: synced,
                color: color,
              },
              {
                id: 'free',
                label: 'free',
                value: total - synced || 1,
                color: '#E7EAEE',
              },
            ]}
          />
        </Stack>
        <YStack>
          <Text size={11} color="#84888e" weight={'semibold'}>
            {title}
          </Text>
          <Text size={15} weight={'semibold'}>
            {formatNumbersWithComa(synced)} / {formatNumbersWithComa(total)}
          </Text>
        </YStack>
        <InfoBadgeIcon size={20} color="#A1ABBD" />
      </XStack>
    </BorderBox>
  )
}

export default ConsensusGaugeCard
