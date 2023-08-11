import { ResponsiveLine } from '@nivo/line'
interface DataPoint {
  x: number
  y: number
}

interface ChartData {
  id: string
  data: DataPoint[]
  maxMemory?: number
}

interface StandartLineChartProps {
  data: ChartData[]
}
const StandartLineChart = ({ data }: StandartLineChartProps) => {
  const maxMemory = data[0].maxMemory || 'auto'

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 0, right: 0, bottom: 0, left: -75 }}
      xScale={{ type: 'linear', min: 0, max: data[0].data.length }}
      yScale={{
        type: 'linear',
        min: 0,
        max: maxMemory,
        stacked: true,
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      enableGridX={false}
      enableGridY={false}
      enablePoints={false}
      pointSize={1}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[]}
      colors={['#8DC6BC']}
    />
  )
}
export default StandartLineChart
