import { Shadow, Text } from '@status-im/components'
import { Stack, XStack, YStack } from 'tamagui'

import UptimeChart from '../UptimeChart/UptimeChart'
import Icon from '../../../components/General/Icon'

const data: DataItem[] = [
  {
    // @NOTE: if you want to add name in the XAxis. You need to set the names here
    // name: 'Jan',
    pv: 1,
    pa: 1,
  },
  {
    pv: 0,
    pa: 0,
  },
  {
    pv: 1,
    pa: 0,
  },
  {
    pv: 0,
    pa: 0,
  },
  {
    pv: 0,
    pa: 0,
  },
  {
    pv: 1,
    pa: 1,
  },
  {
    pv: 1,
    pa: 1,
  },
]

type DataItem = {
  name?: string
  pa: number
  pv: number
}

const ConsensusUptimeCard = () => {
  return (
    <Shadow
      variant="$2"
      style={{
        borderRadius: '16px',
      }}
    >
      <YStack space={'$3'} width={'260px'} height={'156px'} padding={'$3'}>
        <YStack>
          <Text size={15} weight={'semibold'}>
            Consensus Uptime
          </Text>
          <XStack style={{ alignItems: 'end' }} space={'$2'}>
            <Text size={27} weight={'semibold'}>
              98%
            </Text>
            <Icon src="/icons/positive.svg" width={13}></Icon>
            <Text size={13} color="#E95460">
              1.56%
            </Text>
          </XStack>
        </YStack>
        <XStack height={'50%'} justifyContent="center" alignItems="center">
          <Stack
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '228px',
              height: '100%',
            }}
          >
            <UptimeChart data={data} />
          </Stack>
        </XStack>
      </YStack>
    </Shadow>
  )
}
export default ConsensusUptimeCard
