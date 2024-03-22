import { Text } from '@status-im/components'
import { Stack, XStack, YStack } from 'tamagui'

import Icon from '../../../components/General/Icon'
import UptimeChart from '../UptimeChart/UptimeChart'
import DashboardCardWrapper from '../DashboardCardWrapper'

const ExecutionUptime = () => {
  return (
    <DashboardCardWrapper minWidth="100px">
      <YStack space={'$3'}>
        <YStack>
          <Text size={15} weight={'semibold'}>
            Execution Uptime
          </Text>
          <XStack style={{ alignItems: 'end' }} space={'$2'}>
            <Text size={27} weight={'semibold'}>
              99%
            </Text>
            <Icon src="/icons/positive.svg" width={13} height={13}></Icon>
            <Text size={13} color="#E95460">
              2%
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
              startMonth={0}
              endMonth={3}
              monthlyActivity={[10, 1, 3, 4, 5, 1, 7, 1, 6, 3, 1, 9]}
              withLabels={true}
            />
          </Stack>
        </XStack>
      </YStack>
    </DashboardCardWrapper>
  )
}
export default ExecutionUptime
