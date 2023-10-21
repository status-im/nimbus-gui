import { Text } from '@status-im/components'
import { Stack, XStack, YStack } from 'tamagui'

import UptimeChart from '../UptimeChart/UptimeChart'
import Icon from '../../../components/General/Icon'
import DashboardCardWrapper from '../DashboardCardWrapper'

const ConsensusUptimeCard = () => {
  const monthlyActivity = [3, 0, 5, 4, 6, 7, 8, 9, 10, 1, 2, 3]

  return (
    <DashboardCardWrapper minWidth="300px" maxWidth="400px">
      <YStack space={'$3'}>
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
              width: '100%',
              height: '100%',
            }}
          >
            <UptimeChart
              monthlyActivity={monthlyActivity}
              startMonth={0}
              endMonth={1}
              withLabels={false}
            />
          </Stack>
        </XStack>
      </YStack>
    </DashboardCardWrapper>
  )
}
export default ConsensusUptimeCard
