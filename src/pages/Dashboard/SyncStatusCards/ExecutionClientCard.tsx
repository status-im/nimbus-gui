import { Separator, Stack, XStack, YStack } from 'tamagui'
import { Shadow, Text } from '@status-im/components'
import { SwapIcon } from '@status-im/icons'

import { formatNumbersWithComa } from '../../../utilities'
import IconText from '../../../components/General/IconText'
import StandardGauge from '../../../components/Charts/StandardGauge'

type ExecutionClientCardProps = {
  value: number
  total: number
}

const ExecutionClientCard = ({ value, total }: ExecutionClientCardProps) => {
  const data = [
    {
      id: 'storage-used',
      label: 'Used',
      value,
      color: '#7140FD',
    },
    {
      id: 'storage-free',
      label: 'Free',
      value: total,
      color: '#E7EAEE',
    },
  ]

  return (
    <Shadow
      variant="$1"
      style={{
        minWidth: '150px',
        borderTop: '1px solid #E7EAEE',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
      }}
    >
      <YStack>
        <Stack style={{ minHeight: '90px', padding: '12px 16px' }}>
          <Text size={15} weight={'semibold'} color="#647084">
            Execution Client
          </Text>
          <XStack
            style={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Text size={19} weight={'semibold'}>
              Geth
            </Text>
            <Stack
              style={{
                height: '70px',
                width: '70px',
              }}
            >
              <StandardGauge data={data} />
            </Stack>
          </XStack>
        </Stack>
        <Separator borderColor={'#e3e3e3'} />
        <XStack space={'$3'} style={{ padding: '12px 16px' }}>
          <IconText icon={<SwapIcon size={16} />}>Syncing</IconText>
          <Text size={13} weight={'semibold'}>
            {formatNumbersWithComa(value)} / {formatNumbersWithComa(total)}
          </Text>
        </XStack>
      </YStack>
    </Shadow>
  )
}

export default ExecutionClientCard
