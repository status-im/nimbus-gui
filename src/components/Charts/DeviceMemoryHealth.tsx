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
  maxValue?: number
}

type DeviceMemoryHealthProps = {
  currentMemory: number[]
  maxMemory: number
}
const DeviceMemoryHealth = ({
  currentMemory,
  maxMemory,
}: DeviceMemoryHealthProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const dataObj = currentMemory.map((yValue, index: number) => ({
    x: index + 1,
    y: yValue,
  }))
  const currentLoad = dataObj.length > 0 ? dataObj[dataObj.length - 1].y : 0

  const message = currentLoad < maxMemory ? 'Good' : 'Poor'

  const chartData: ChartData[] = [
    {
      id: 'cpu',
      color: message == 'Good' ? '#8DC6BC' : '#e95460',
      data: dataObj,
      maxValue: maxMemory,
    },
  ]

  return (
    <ShadowBox
      variant="$2"
      style={{
        width: '50%',
        minHeight: '135px',
        borderRadius: '16px',
        border: message === 'Poor' ? '1px solid #D92344' : '1px solid #E0E0E0',
        backgroundColor: isHovered
          ? '#f8f6ff'
          : message === 'Poor'
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
              Memory
            </Text>
            <Text size={27} weight={'semibold'}>
              {currentLoad} GB
            </Text>
          </YStack>
        </XStack>
        <Separator borderColor={'#e3e3e3'} />
        <XStack space={'$4'} style={{ padding: '0.65rem 1rem' }}>
          <IconText
            icon={
              message === 'Good' ? (
                <CheckCircleIcon size={16} />
              ) : (
                <IncorrectIcon size={16} />
              )
            }
            weight={'semibold'}
          >
            {message}
          </IconText>
          {message === 'Poor' && (
            <Text size={13} color={'#E95460'} weight={'semibold'}>
              {((currentLoad / maxMemory || 0) * 100).toFixed(0)}% Utilization
            </Text>
          )}
        </XStack>
      </YStack>
    </ShadowBox>
  )
}

export default DeviceMemoryHealth
