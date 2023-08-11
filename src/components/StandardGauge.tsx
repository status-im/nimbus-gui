import { ResponsivePie } from '@nivo/pie'

export interface GaugeDataPoint {
  id: string
  label: string
  value: number
  color: string
}

interface StandardGaugeProps {
  data: GaugeDataPoint[]
}

const StandardGauge = ({ data }: StandardGaugeProps) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.65}
    colors={datum => datum.data.color}
    fit={false}
    activeOuterRadiusOffset={8}
    enableArcLinkLabels={false}
    arcLinkLabelsColor={{ from: 'color' }}
    enableArcLabels={false}
    legends={[]}
  />
)

export default StandardGauge
