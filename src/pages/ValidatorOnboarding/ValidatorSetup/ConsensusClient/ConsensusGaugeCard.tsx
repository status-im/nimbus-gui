import { Stack, XStack, YStack } from 'tamagui'
import { InfoBadgeIcon } from '@status-im/icons'
import { Text } from '@status-im/components'

import StandardGauge from '../../../../components/Charts/StandardGauge'
import { formatNumbersWithComa } from '../../../../utilities'
import { useWindowSize } from '../../../../hooks/useWindowSize'

type ConsensusGaugeCardProps = {
  synced: number
  total: number
  title: string
  color: string
}

const ConsensusGaugeCard = ({
  synced,
  total,
  title,
  color,
}: ConsensusGaugeCardProps) => {
  const windowSize = useWindowSize()
  return (
    <Stack
      style={{
        border: '1px solid #DCE0E5',
        borderRadius: '10px',
        padding: '6px 12px',
        borderWidth: '0.5px',
        width: windowSize.width < 580 ? '100%' : 'auto',
        height: '100%',
      }}
    >
      <XStack space={'$2'} alignItems="center" justifyContent="space-between">
        <XStack space={'$3'}>
          <Stack
            style={{
              height: '35px',
              width: '35px',
            }}
            space={'$2'}
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
        </XStack>
        <InfoBadgeIcon size={20} color="#A1ABBD" />
      </XStack>
    </Stack>
  )
}

export default ConsensusGaugeCard
