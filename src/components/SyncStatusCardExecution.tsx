import IconText from './IconText'
import { Paragraph, Separator, Stack, XStack, YStack } from 'tamagui'
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
        color: '#E95460',
      },
      {
        id: 'storage',
        label: 'Free',
        value: total - synced,
        color: '#E7EAEE',
      },
    ]
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
            height: '155px',
          }}
        >
          <Stack
            style={{
              position: 'absolute',
              right: '44px',
              height: '115px',
              width: '115px',
            }}
          >
            <StandardGauge data={data()} />
          </Stack>
          <YStack space={'$3'}>
            <Text size={13} color="#84888e" weight={'semibold'}>
              Execution Client
            </Text>
            <Text color={'#09101C'} size={27} weight={'semibold'}  marginTop={'30px'}>
              Geth
            </Text>
          </YStack>
        </XStack>

        <Separator borderColor={'#e3e3e3'} />

        <XStack space={'$2'} style={{ padding: '10px 16px 10px 16px' }}>
          <IconText icon="/icons/token.svg">{message}</IconText>

          <Text size={13}>123,424 / 170,000</Text>
        </XStack>
      </YStack>
    </Shadow>
  )
}

export default SyncStatusCardExecution
