import { Separator, Stack, XStack, YStack } from 'tamagui'
import { Shadow, Text } from '@status-im/components'
import { TokenIcon } from '@status-im/icons'

import StandardGauge from '../../components/Charts/StandardGauge'
import IconText from '../../components/General/IconText'
import { formatNumbersWithComa } from '../../utilities'

interface DeviceStorageHealthProps {
  synced: number
  total: number
}
const SyncStatusCardExecution: React.FC<DeviceStorageHealthProps> = ({
  synced,
  total,
}) => {
  const message = synced === total ? 'Synced all data' : 'Syncing'

  const data = () => {
    return [
      {
        id: 'storage-used',
        label: 'Used',
        value: synced,
        color: '#2a4af5',
      },
      {
        id: 'storage-free',
        label: 'Free',
        value: total - synced || 1,
        color: '#E7EAEE',
      },
    ]
  }

  return (
    <Shadow
      variant="$2"
      style={{
        width: '100%',
        borderRadius: '16px',
        borderBottomRightRadius: '0px',
        borderBottomLeftRadius: '0px',
      }}
    >
      <YStack>
        <XStack
          justifyContent="space-between"
          style={{
            padding: '8px 16px',
            position: 'relative',
            minHeight: '180px',
          }}
        >
          <YStack space={'$3'} style={{ width: '100%' }}>
            <Text size={15} color="#84888e" weight={'semibold'}>
              Execution Client
            </Text>
            <XStack
              style={{ justifyContent: 'space-between', alignItems: 'center' }}
            >
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
          <IconText icon={<TokenIcon size={16} />}>{message}</IconText>
          <Text size={13}>
            {formatNumbersWithComa(synced)} / {formatNumbersWithComa(total)}
          </Text>
        </XStack>
      </YStack>
    </Shadow>
  )
}

export default SyncStatusCardExecution
