import './App.css'
import { TamaguiProvider } from 'tamagui'
import { Provider as StatusProvider } from '@status-im/components'
import { Pie } from '@nivo/pie'

import config from '../tamagui.config'

interface Data {
  id: string
  label: string
  value: number
  color: string
}
interface MyPieProps {
  data: Data[]
}

const MyPie = (props: MyPieProps) => {
  const { data } = props
  console.log(data.color)
  return (
    <>
      <Pie
        data={data}
        width={74.57}
        height={74.57}
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
    </>
  )
}

function App() {
  const data: Data[] = [
    {
      id: 'php',
      label: 'php',
      value: 70,
      color: '#ea5e78',
    },
    {
      id: 'javascript',
      label: 'javascript',
      value: 30,
      color: '#ecedf0',
    },
  ]

  return (
    <TamaguiProvider config={config}>
      <StatusProvider>
        <MyPie data={data} />
      </StatusProvider>
    </TamaguiProvider>
  )
}

export default App
