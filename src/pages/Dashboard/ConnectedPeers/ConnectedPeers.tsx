import { Separator, Stack, XStack, YStack } from 'tamagui'
import DashboardCardWrapper from '../DashboardCardWrapper'
import { Text } from '@status-im/components'
import HalfTopGauge from '../../../components/Charts/HalfTopGauge'

const ConnectedPeers = () => {
  const data = [
    {
      id: 'storage-used',
      label: 'Used',
      value: 10,
    },
    {
      id: 'storage-free',
      label: 'Free',
      value: 3,
    },
  ]
  return (
    <DashboardCardWrapper padding="0" height="156ppx" minWidth="200px">
      <YStack height={'100%'}>
        <Stack
          style={{ minHeight: '90px', padding: '12px 16px', flex: 1 }}
          justifyContent="space-between"
        >
          <Text size={19} weight={'semibold'}>
            Connected Peers
          </Text>
          <XStack
            style={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Text size={27} weight={'semibold'}>
              16
            </Text>

            <HalfTopGauge data={data} />
          </XStack>
        </Stack>
        <Separator borderColor={'#e3e3e3'} />
        <XStack style={{ padding: '12px 16px' }}>
          <Text size={13} weight={'semibold'} color="#09101C">
            Poor
          </Text>
        </XStack>
      </YStack>
    </DashboardCardWrapper>
  )
}

export default ConnectedPeers
