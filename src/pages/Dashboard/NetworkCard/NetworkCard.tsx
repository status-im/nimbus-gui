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
}

type NetworkCardProps = {
  uploadRate: number[]
  downloadRate: number[]
}

const NetworkCard = ({ uploadRate, downloadRate }: NetworkCardProps) => {
  const chartData: ChartData[] = [
    {
      id: 'uploadRate',
      color: '#8DC6BC',
      data: uploadRate.map((yValue, index: number) => ({
        x: index + 1,
        y: yValue,
      })),
    },
    {
      id: 'downloadRate',
      color: '#D92344',
      data: downloadRate.map((yValue, index: number) => ({
        x: index + 1,
        y: yValue,
      })),
    },
  ]

  const currentLoad =
    chartData[0].data.length > 0
      ? chartData[0].data[chartData[0].data.length - 1].y
      : 0

  const message = currentLoad > 60 ? 'Good' : 'Poor'

  return (
    <DashboardCardWrapper
      style={{
        padding: 0,
        height: '156px',
        minWidth: '200px',
      }}
      isErrorBorder={message === 'Poor'}
    >
      <YStack
        style={{
          borderRadius: '16px',
          backgroundColor: message === 'Poor' ? '#fefafa' : '#fff',
        }}
        height={'100%'}
      >
        <XStack
          justifyContent="space-between"
          style={{
            padding: '8px 16px',
            position: 'relative',
            flexGrow: '1',
          }}
        >
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
          <YStack space={'$3'} width={'100%'} justifyContent="space-between">
            <XStack justifyContent="space-between" width={'100%'}>
              <Stack>
                <Text size={15} weight={'semibold'}>
                  Network
                </Text>
              </Stack>
              <YStack>
                <Text size={11} weight={'semibold'}>
                  Uptime
                </Text>
                <Text size={11} weight={'medium'}>
                  23:20:02
                </Text>
              </YStack>
            </XStack>
            <Text size={27} weight={'semibold'}>
              {currentLoad} GB
            </Text>
          </YStack>
        </XStack>
        <Separator borderColor={'#e3e3e3'} />
        <XStack space={'$4'} style={{ padding: '12px 16px' }}>
          <IconText
            icon={
              message === 'Good' ? (
                <CheckCircleIcon size={16} />
              ) : (
                <IncorrectIcon size={16} />
              )
            }
          >
            {message}
          </IconText>
          {message === 'Poor' && (
            <Text size={13} color="#E95460">
              {((currentLoad / 60) * 100).toFixed(0)}% Utilization
            </Text>
          )}
        </XStack>
      </YStack>
    </DashboardCardWrapper>
  )
}

export default NetworkCard
