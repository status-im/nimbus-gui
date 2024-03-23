import { ResponsivePie } from '@nivo/pie'

export interface GaugeDataPoint {
  id: string
  label: string
  value: number
  color: string
}

interface DepositStatusPieChartProps {
  data: GaugeDataPoint[]
  isInteractive?: boolean
}

const DepositStatusPieChart = ({
  data,
  isInteractive = true,
}: DepositStatusPieChartProps) => (
  <ResponsivePie
    data={data}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    innerRadius={0.8}
    colors={datum => datum.data.color}
    enableArcLinkLabels={false}
    arcLinkLabelsColor={{ from: 'color' }}
    enableArcLabels={false}
    legends={[]}
    motionConfig="gentle"
    animate={false}
    isInteractive={isInteractive}
  />
)

export default DepositStatusPieChart
