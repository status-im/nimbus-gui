import { Stack, XStack, YStack } from 'tamagui'
import StandardGauge from '../../../components/Charts/StandardGauge'
import { ClearIcon } from '@status-im/icons'
import { Text } from '@status-im/components'

type KeyGenerationSyncCardProps = {
  synced: number
  total: number
  title: string
  color: string
}

const KeyGenerationSyncCard = ({ synced, total, title, color }: KeyGenerationSyncCardProps) => {
  return (
    <XStack
      space={'$2'}
      alignItems="center"
      style={{ border: '1px solid #DCE0E5', borderRadius: '0.5rem', padding: '6px 12px' }}
    >
      <Stack
        style={{
          height: '35px',
          width: '35px',
        }}
      >
        <StandardGauge
          data={[
            {
              id: 'storage',
              label: 'Used',
              value: synced,
              color: color,
            },
            {
              id: 'storage',
              label: 'Free',
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
          {synced} / {total}
        </Text>
      </YStack>
      <ClearIcon size={20} color="#A1ABBD" />
    </XStack>
  )
}

export default KeyGenerationSyncCard
