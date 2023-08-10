import { ResponsiveLine } from '@nivo/line'
interface DataPoint {
  x: string
  y: number
}

interface Serie {
  id: string
  data: DataPoint[]
}

interface StandartLineChartProps {
  data: Serie[]
}
const StandartLineChart = ({ data }: StandartLineChartProps) => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 0, right: 0, bottom: 0, left: -75 }}
      xScale={{ type: 'linear', min: 1, max: 12 }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
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
