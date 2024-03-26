import { Separator, Stack, XStack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import { IncorrectIcon } from '@status-im/icons'

import StandardLineChart from '../../../components/Charts/StandardLineChart'
import IconText from '../../../components/General/IconText'
import Icon from '../../../components/General/Icon'
import DashboardCardWrapper from '../DashboardCardWrapper'

type DataPoint = {
  x: number
  y: number
}

type ChartData = {
  id: string
  color: string
  data: DataPoint[]
}

type CPUCardProps = {
  load: number[]
}

const CPUCard = ({ load }: CPUCardProps) => {
  const chartData: ChartData[] = [
    {
      id: 'cpu',
      color: '#8DC6BC',
      data: load.map((yValue, index: number) => ({
        x: index + 1,
        y: yValue,
      })),
    },
  ]

  const currentLoad =
    chartData[0].data.length > 0
      ? chartData[0].data[chartData[0].data.length - 1].y
      : 0

  const message = currentLoad < 80 ? 'Good' : 'Poor'

  return (
    <DashboardCardWrapper padding="0" height="156px" minWidth="200px">
      <YStack
        style={{
          borderRadius: '16px',
          border: message === 'Poor' ? '1px solid  #D92344' : 'none',
          backgroundColor: message === 'Poor' ? '#fefafa' : '#fff',
          flexGrow: '1',
        }}
      >
        <XStack
          justifyContent="space-between"
          style={{
            padding: '8px 16px',
            position: 'relative',
            flexGrow: '1',
          }}
        >
          <YStack space={'$3'} justifyContent="space-between">
            <Text size={15} weight={'semibold'}>
              CPU
            </Text>
            <Text size={27} weight={'semibold'}>
              {currentLoad} GB
            </Text>
          </YStack>
          <Stack
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              padding: '4px',
            }}
          >
            <StandardLineChart data={chartData} />
          </Stack>
        </XStack>
        <Separator borderColor={'#e3e3e3'} style={{ marginTop: 'auto' }} />
        <XStack space={'$4'} style={{ padding: '10px 16px' }}>
          <IconText
            icon={
              message === 'Good' ? (
                <Icon src="icons/active.svg" width={16} height={16} />
              ) : (
                <IncorrectIcon size={16} />
              )
            }
            weight={'semibold'}
          >
            {message}
          </IconText>
          {message === 'Poor' && (
            <Text size={13} color="#E95460">
              {((currentLoad / 80) * 100).toFixed(0)}% Utilization
            </Text>
          )}
        </XStack>
      </YStack>
    </DashboardCardWrapper>
  )
}

export default CPUCard
