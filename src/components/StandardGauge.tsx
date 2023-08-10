import { ResponsivePie } from '@nivo/pie'

interface Data {
  id: string
  label: string
  value: number
  color: string
}
interface StandardGaugeProps {
  data: Data[]
}

const StandardGauge = ({ data }: StandardGaugeProps) => (
  // <div style={{ width: '75px', height: '75px' }}>
    <ResponsivePie
      data={data}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      innerRadius={0.65}
      colors={datum => datum.data.color}
      fit={false}
      activeOuterRadiusOffset={8}
      enableArcLinkLabels={false}
      arcLinkLabelsColor={{ from: 'color' }}
      enableArcLabels={false}
      legends={[]}
    />
  // </div>
)

export default StandardGauge
