import { Stack, XStack, YStack } from 'tamagui'
import StandardGauge from '../../../components/Charts/StandardGauge'
import { Text } from '@status-im/components'
import { formatNumberForGauge } from '../../../utilities'

type ActivationSyncCardProps = {
  gaugeColor: string
  gaugeSynced: number
  gaugeTotal: number
}

const ActivationSyncCard = ({ gaugeColor, gaugeSynced, gaugeTotal }: ActivationSyncCardProps) => {
  return (
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
              id: 'sync card',
              label: 'Sync Status',
              value: gaugeSynced,
              color: gaugeColor,
            },
            {
              id: 'free',
              label: 'free',
              value: gaugeTotal - gaugeSynced || 1,
              color: '#E7EAEE',
            },
          ]}
        />
      </Stack>
      <YStack>
        <Text size={15} weight={'semibold'}>
          {formatNumberForGauge(gaugeSynced)} / {formatNumberForGauge(gaugeTotal)}
        </Text>
      </YStack>
    </XStack>
  )
}

export default ActivationSyncCard
