import { Separator, Stack, XStack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import { CheckCircleIcon, IncorrectIcon } from '@status-im/icons'

import StandardLineChart from '../../../components/Charts/StandardLineChart'
import IconText from '../../../components/General/IconText'
import DashboardCardWrapper from '../DashboardCardWrapper'

type DataPoint = {
  x: number
  y: number
}

type ChartData = {
  id: string
  color: string
  data: DataPoint[]
  maxValue?: number
}

type MemoryCardProps = {
  currentMemory: number[]
  maxMemory: number
}

const MemoryCard = ({ currentMemory, maxMemory }: MemoryCardProps) => {
  const chartData: ChartData[] = [
    {
      id: 'cpu',
      color: '#8DC6BC',
      data: currentMemory.map((yValue, index: number) => ({
        x: index + 1,
        y: yValue,
      })),
      maxValue: maxMemory,
    },
  ]

  const currentLoad =
    chartData[0].data.length > 0 ? chartData[0].data[chartData[0].data.length - 1].y : 0

  const message = currentLoad < maxMemory ? 'Good' : 'Poor'

  return (
    <DashboardCardWrapper padding="0" minWidth="290px" height="156px">
      <YStack
        style={{
          borderRadius: '16px',
          border: message === 'Poor' ? '1px solid  #D92344' : 'none',
          backgroundColor: message === 'Poor' ? '#fefafa' : '#fff',
        }}
      >
        <XStack
          justifyContent="space-between"
          style={{
            padding: '8px 16px',

            flexGrow: '1',
          }}
        >
          <Stack style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, padding: '4px' }}>
            <StandardLineChart data={chartData} />
          </Stack>
          <YStack space={'$3'} justifyContent="space-between">
            <Text size={15} weight={'semibold'}>
              Memory
            </Text>
            <Text size={27} weight={'semibold'}>
              {currentLoad} GB
            </Text>
          </YStack>
        </XStack>

        <Separator borderColor={'#e3e3e3'} style={{ marginTop: 'auto' }} />

        <XStack space={'$4'} style={{ padding: '10px 16px' }}>
          <IconText
            icon={message === 'Good' ? <CheckCircleIcon size={16} /> : <IncorrectIcon size={16} />}
          >
            {message}
          </IconText>
          {message === 'Poor' && (
            <Text size={13} color="#E95460">
              {((currentLoad / maxMemory || 0) * 100).toFixed(0)}% Utilization
            </Text>
          )}
        </XStack>
      </YStack>
    </DashboardCardWrapper>
  )
}

export default MemoryCard
