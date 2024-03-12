import StandardLineChart from './StandardLineChart'
import IconText from '../General/IconText'
import { Separator, XStack, YStack } from 'tamagui'
import { Shadow as ShadowBox, Text } from '@status-im/components'
import { CheckCircleIcon, IncorrectIcon } from '@status-im/icons'
import { useState } from 'react'

type DataPoint = {
  x: number
  y: number
}

type ChartData = {
  id: string
  color: string
  data: DataPoint[]
}
type DeviceNetworkHealthProps = {
  latency: number[]
}

const DeviceNetworkHealth = ({ latency }: DeviceNetworkHealthProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const THRESHOLD = 60
  const GOOD_COLOR = '#8DC6BC'
  const POOR_COLOR_LATENCY = '#D92344'

  const processLatency = (latency: number[], id: string) => {
    const dataObj = latency.map((yValue, index: number) => ({
      x: index + 1,
      y: yValue,
    }))
    const currentLatency =
      dataObj.length > 0 ? dataObj[dataObj.length - 1].y : 0
    const message = currentLatency < THRESHOLD ? 'Good' : 'Poor'
    const color = message === 'Good' ? GOOD_COLOR : POOR_COLOR_LATENCY

    return {
      id,
      color,
      data: dataObj,
      currentLatency,
      message,
    }
  }

  const processedLatency = processLatency(latency, 'latency')

  const chartData: ChartData[] = [processedLatency]

  return (
    <ShadowBox
      variant="$2"
      style={{
        width: '50%',
        minHeight: '135px',
        borderRadius: '16px',
        border:
          processedLatency.message === 'Poor'
            ? '1px solid #D92344'
            : '1px solid #E0E0E0',
        backgroundColor: isHovered
          ? '#f8f6ff'
          : processedLatency.message === 'Poor'
            ? '#fefafa'
            : '#fff',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <YStack>
        <XStack
          justifyContent="space-between"
          style={{
            padding: '0.75rem 1rem',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <StandardLineChart data={chartData} isInteractive={false} />
          </div>
          <YStack space={'$3'}>
            <Text size={15} weight={'semibold'}>
              Network
            </Text>
            <Text size={27} weight={'semibold'}>
              {processedLatency.currentLatency} ms
            </Text>
          </YStack>
        </XStack>
        <Separator borderColor={'#e3e3e3'} />
        <XStack space={'$4'} style={{ padding: '0.65rem 1rem' }}>
          <IconText
            icon={
              processedLatency.message === 'Good' ? (
                <CheckCircleIcon size={16} />
              ) : (
                <IncorrectIcon size={16} />
              )
            }
            weight={'semibold'}
          >
            {processedLatency.message}
          </IconText>
          {processedLatency.message === 'Poor' && (
            <Text size={13} color={'#E95460'} weight={'semibold'}>
              {`High Latency: ${processedLatency.currentLatency}ms`}
            </Text>
          )}
        </XStack>
      </YStack>
    </ShadowBox>
  )
}

export default DeviceNetworkHealth
