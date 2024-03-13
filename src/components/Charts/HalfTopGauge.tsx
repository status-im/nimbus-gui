import { ResponsivePie } from '@nivo/pie'
import { Stack } from 'tamagui'
export interface GaugeDataPoint {
  id: string
  label: string
  value: number
}
import { linearGradientDef } from '@nivo/core'

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
        colors={d =>
          d.id === 'storage-free' ? '#F5F6F8' : 'url(#gradientUsed)'
        }
        defs={[
          linearGradientDef('gradientA', [
            { offset: 0, color: 'rgba(25, 146, 215, 1)' },
            { offset: 50, color: 'rgba(255, 168, 0, 1)' },
            { offset: 100, color: 'rgba(255, 125, 70, 1)' },
          ]),
        ]}
        fill={[{ match: { id: 'storage-used' }, id: 'gradientA' }]}
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
