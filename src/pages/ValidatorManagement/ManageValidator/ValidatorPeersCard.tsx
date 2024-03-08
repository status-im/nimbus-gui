import { ResponsivePie } from '@nivo/pie'
import { Text } from '@status-im/components'
import { Stack, XStack, YStack } from 'tamagui'
export interface GaugeDataPoint {
  id: string
  label: string
  value: number
  color: string
}

interface ValidatorPeersPieProps {
  data: GaugeDataPoint[]
  isInteractive?: boolean
}

type ValidatorPeersCardProps = {
  title: string
  value: string
}
const PeersPieData = [
  {
    id: 'peers-connected',
    label: 'Used',
    value: 140,
    color: '#2A4AF5',
  },
  {
    id: 'peers-remaining',
    label: 'Free',
    value: 100,
    color: '#E7EAEE',
  },
]

const ValidatorPeersCard = ({ title, value }: ValidatorPeersCardProps) => {
  return (
    <Stack
      style={{
        border: '0.5px solid #DCE0E5',
        flexGrow: '1',
        borderRadius: '16px',
        padding: '10px',
      }}
    >
      <XStack space="$2">
        <Stack width="30px" height="30px" marginTop="7px">
          <ValidatorPeersPieChart data={PeersPieData} />
        </Stack>
        <YStack>
          <Text size={13} weight={'semibold'} color="#647084">
            {title}
          </Text>
          <Text size={27} weight={'semibold'}>
            {value}
          </Text>
        </YStack>
      </XStack>
    </Stack>
  )
}
const ValidatorPeersPieChart = ({ data }: ValidatorPeersPieProps) => (
  <ResponsivePie
    data={data}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    innerRadius={0.6}
    colors={datum => datum.data.color}
    enableArcLinkLabels={false}
    arcLinkLabelsColor={{ from: 'color' }}
    enableArcLabels={false}
    legends={[]}
    motionConfig="gentle"
    animate={false}
    isInteractive={false}
  />
)
export default ValidatorPeersCard
