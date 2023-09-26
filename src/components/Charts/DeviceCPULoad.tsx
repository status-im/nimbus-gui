import StandartLineChart from './StandardLineChart'
import IconText from '../General/IconText'
import { Separator, XStack, YStack } from 'tamagui'
import { Shadow, Text } from '@status-im/components'
import { CheckCircleIcon, IncorrectIcon } from '@status-im/icons'

type DataPoint = {
  x: number
  y: number
}

type ChartData = {
  id: string
  color: string
  data: DataPoint[]
}

type DeviceCPULoadProps = {
  load: number[]
}
const DeviceCPULoad: React.FC<DeviceCPULoadProps> = ({ load }) => {
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
    chartData[0].data.length > 0 ? chartData[0].data[chartData[0].data.length - 1].y : 0

  const message = currentLoad < 80 ? 'Good' : 'Poor'

  return (
    <Shadow
      variant="$2"
      style={{
        width: '50%',
        minHeight: '135px',
        borderRadius: '16px',
        border: message === 'Poor' ? '1px solid  #D92344' : 'none',
        backgroundColor: message === 'Poor' ? '#fefafa' : '#fff',
      }}
    >
      <YStack>
        <XStack
          justifyContent="space-between"
          style={{
            padding: '0.75rem 1rem',
            position: 'relative',
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            <StandartLineChart data={chartData} />
          </div>
          <YStack space={'$3'}>
            <Text size={15} weight={'semibold'}>
              CPU
            </Text>
            <Text size={27} weight={'semibold'}>
              {currentLoad} GB
            </Text>
          </YStack>
        </XStack>
        <Separator borderColor={'#e3e3e3'} />
        <XStack space={'$4'} style={{ padding: '0.65rem 1rem' }}>
          <IconText
            icon={message === 'Good' ? <CheckCircleIcon size={16} /> : <IncorrectIcon size={16} />}
            weight={'semibold'}
          >
            {message}
          </IconText>
          {message === 'Poor' && (
            <Text size={13} color={'#E95460'} weight={'semibold'}>
              {((currentLoad / 80) * 100).toFixed(0)}% Utilization
            </Text>
          )}
        </XStack>
      </YStack>
    </Shadow>
  )
}

export default DeviceCPULoad
