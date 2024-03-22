import { Separator, Stack, XStack, YStack } from 'tamagui'
import { Shadow, Text } from '@status-im/components'
import { SwapIcon } from '@status-im/icons'
import { CSSProperties } from 'react'

import { formatNumbersWithComa } from '../../../utilities'
import IconText from '../../../components/General/IconText'
import Icon from '../../../components/General/Icon'
import StandardGauge from '../../../components/Charts/StandardGauge'

type ConsensusCardProps = {
  value: number
  total: number
}

const ConsensusCard = ({ value, total }: ConsensusCardProps) => {
  const style: CSSProperties = {
    minWidth: '150px',
  }
  const data = [
    {
      id: 'storage-used',
      label: 'Used',
      value: value,
      color: '#ff6161',
    },
    {
      id: 'storage-free',
      label: 'Free',
      value: total,
      color: '#E7EAEE',
    },
  ]

  return (
    <Shadow variant="$1" style={style}>
      <YStack>
        <Stack style={{ minHeight: '90px', padding: '12px 16px' }}>
          <Text size={15} weight={'semibold'} color="#647084">
            Consensus Client
          </Text>
          <XStack
            style={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Icon src="./icons/vector.svg" height={30} width={60} />
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

export default ConsensusCard
