import { Separator, Stack, XStack, YStack } from 'tamagui'

import { Shadow, Text } from '@status-im/components'
import Icon from './General/Icon'
import StandardGauge from './Charts/StandardGauge'
import IconText from './General/IconText'

interface DeviceStorageHealthProps {
  synced: number
  total: number
}
const SyncStatusCardConsensus: React.FC<DeviceStorageHealthProps> = ({ synced, total }) => {
  const message = synced === total ? 'Synced all data' : 'Syncing'

  const data = () => {
    return [
      {
        id: 'storage',
        label: 'Used',
        value: synced,
        color: '#ff6161',
      },
      {
        id: 'storage',
        label: 'Free',
        value: total - synced || 1,
        color: '#E7EAEE',
      },
    ]
  }
  const formatNumber = (n: number): string => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  return (
    <Shadow
      variant="$2"
      style={{
        width: '632px',
        borderRadius: '16px',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
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
              Consensus Client
            </Text>
            <XStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Icon src="/icons/vector.svg" height={46} width={93} />
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
            {formatNumber(synced)} / {formatNumber(total)}
          </Text>
        </XStack>
      </YStack>
    </Shadow>
  )
}

export default SyncStatusCardConsensus
