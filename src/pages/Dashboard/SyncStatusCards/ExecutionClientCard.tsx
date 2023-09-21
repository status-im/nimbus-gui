import { Separator, Stack, XStack, YStack } from 'tamagui'
import { Shadow, Text } from '@status-im/components'
import { SwapIcon } from '@status-im/icons'
import { CSSProperties } from 'react'

import { formatNumbersWithComa } from '../../../utilities'
import IconText from '../../../components/General/IconText'

import StandardGauge from '../../../components/Charts/StandardGauge'

type ExecutionClientCardProps = {
  value: number
  total: number
  isTop?: boolean
}

const ExecutionClientCard = ({ value, total, isTop }: ExecutionClientCardProps) => {
  const data = [
    {
      id: 'storage',
      label: 'Used',
      value,
      color: '#7140FD',
    },
    {
      id: 'storage',
      label: 'Free',
      value: total,
      color: '#E7EAEE',
    },
  ]
  const style: CSSProperties = {}

  if (isTop === true) {
    style.borderTopLeftRadius = '16px'
    style.borderTopRightRadius = '16px'
  } else if (isTop === false) {
    style.borderBottomLeftRadius = '16px'
    style.borderBottomRightRadius = '16px'
  }

  return (
    <Shadow variant="$1" style={style}>
      <YStack>
        <Stack style={{ minHeight: '90px', padding: '12px 16px' }}>
          <Text size={15} weight={'semibold'} color="#647084">
            Execution Client
          </Text>
          <XStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Text size={19} weight={'semibold'}>Geth</Text>
            <Stack
              style={{
                height: '56px',
                width: '56px',
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
