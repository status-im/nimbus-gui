import { ResponsivePie } from '@nivo/pie'
import { Stack } from 'tamagui'
export interface GaugeDataPoint {
  id: string
  label: string
  value: number
}

interface HalfTopGaugeProps {
  data: GaugeDataPoint[]
  isInteractive?: boolean
}

const HalfTopGauge = ({ data, isInteractive = true }: HalfTopGaugeProps) => {
  return (
    <Stack
      style={{
        position: 'absolute',
        right: '1px',
        width: '100px',
        height: '100px',
      }}
    >
      <ResponsivePie
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        innerRadius={0.65}
        startAngle={-90}
        endAngle={90}
        isInteractive={isInteractive}
        animate={true}
        motionConfig="gentle"
        enableArcLinkLabels={false}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        legends={[]}
      />
    </Stack>
  )
}

export default HalfTopGauge
