import { Stack, XStack, YStack } from 'tamagui'
import StandardGauge from '../../../components/Charts/StandardGauge'
import { Text } from '@status-im/components'

type ActivationSyncCardProps = {
  synced: number
  total: number

  color: string
}

const ActivationSyncCard = ({ synced, total, color }: ActivationSyncCardProps) => {
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
        <Text size={15} weight={'semibold'}>
          {synced} / {total}
        </Text>
      </YStack>
    </XStack>
  )
}

export default ActivationSyncCard
