import './App.css'
import { TamaguiProvider } from 'tamagui'
import { Provider as StatusProvider } from '@status-im/components'
import { ResponsivePie } from '@nivo/pie'

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

const MyResponsivePie = (props: MyPieProps) => {
  const { data } = props
  return (
    <>
      <ResponsivePie
        data={data}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
      />
    </>
  )
}

function App() {
  const data: Data[] = [
    {
      id: 'php',
      label: 'php',
      value: 127,
      color: 'hsl(236, 70%, 50%)',
    },
    {
      id: 'javascript',
      label: 'javascript',
      value: 540,
      color: 'hsl(249, 70%, 50%)',
    },
    {
      id: 'java',
      label: 'java',
      value: 240,
      color: 'hsl(72, 70%, 50%)',
    },
    {
      id: 'python',
      label: 'python',
      value: 435,
      color: 'hsl(122, 70%, 50%)',
    },
    {
      id: 'scala',
      label: 'scala',
      value: 197,
      color: 'hsl(186, 70%, 50%)',
    },
  ]

  return (
    <TamaguiProvider config={config}>
      <StatusProvider>
        <div style={{ height: '500px', width: '300px' }}>
          <MyResponsivePie data={data} />
        </div>
      </StatusProvider>
    </TamaguiProvider>
  )
}

export default App
