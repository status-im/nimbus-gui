import IconText from './IconText'
import { Separator, Stack, XStack, YStack } from 'tamagui'
import StandardGauge from './StandardGauge'
import { Shadow, Text } from '@status-im/components'
interface DeviceStorageHealthProps {
  synced: number
  total: number
}
const SyncStatusCardExecution: React.FC<DeviceStorageHealthProps> = ({ synced, total }) => {
  const message = synced === total ? 'Synced all data' : 'Syncing'

  const data = () => {
    return [
      {
        id: 'storage',
        label: 'Used',
        value: synced,
        color: '#2a4af5',
      },
      {
        id: 'storage',
        label: 'Free',
        value: total - synced,
        color: '#E7EAEE',
      },
    ]
  }
  function formatNumber(n: number): string {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <Shadow
      variant="$2"
      style={{
        width: '632px',
        borderRadius: '16px',
      }}
    >
      <YStack>
        <XStack
          justifyContent="space-between"
          style={{
            padding: '8px 16px',
            position: 'relative',
            height: '160px',
          }}
        >
          <YStack space={'$3'} style={{ width: '100%' }}>
            <Text size={15} color="#84888e" weight={'semibold'}>
              Execution Client
            </Text>
            <XStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Text color={'#09101C'} size={27} weight={'semibold'}>
                Geth
              </Text>
              <Stack
                style={{
                  height: '115px',
                  width: '115px',
                }}
              >
                <StandardGauge data={data()} />
              </Stack>
            </XStack>
          </YStack>
        </XStack>

        <Separator borderColor={'#e3e3e3'} />

        <XStack space={'$2'} style={{ padding: '10px 16px 10px 16px' }}>
          <IconText icon="/icons/token.svg">{message}</IconText>

          <Text size={13}>
            {' '}
            {formatNumber(synced)} / {formatNumber(total)}
          </Text>
        </XStack>
      </YStack>
    </Shadow>
  )
}

export default SyncStatusCardExecution
