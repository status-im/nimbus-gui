import StandartLineChart from './StandardLineChart'
import IconText from './IconText'
import { Paragraph, Separator, XStack, YStack } from 'tamagui'
import { Shadow } from '@status-im/components'

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
    <Shadow variant="$2" style={{ width: '284px', height: '136px', borderRadius: '16px' }}>
      <YStack>
        <XStack
          justifyContent="space-between"
          style={{
            padding: '8px 16px',
            position: 'relative', // Make XStack a positioning context
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            <StandartLineChart data={chartData} />
          </div>
          <YStack space={'$3'}>
            <Paragraph color={'#09101C'} size={'$6'} fontWeight={'600'}>
              CPU
            </Paragraph>
            <Paragraph color={'#09101C'} size={'$8'} fontWeight={'700'}>
              {currentLoad} GB
            </Paragraph>
          </YStack>
        </XStack>
        <Separator borderColor={'#e3e3e3'} />
        <XStack space={'$4'} style={{ padding: '10px 16px 10px 16px' }}>
          <IconText
            icon={message === 'Good' ? '/icons/check-circle.png' : '/icons/alert.png'}
            weight={'semibold'}
          >
            {message}
          </IconText>
          {/* <Text color={'#E95460'}>This is additional text</Text>  */}
        </XStack>
      </YStack>
    </Shadow>
  )
}

export default DeviceCPULoad
