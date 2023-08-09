import './App.css'
import { TamaguiProvider } from 'tamagui'
import { Provider as StatusProvider } from '@status-im/components'
import StandardGauge from './components/StandardGauge'

import config from '../tamagui.config'
import StatisticBox from './components/StaticBox'

function App() {
  const data = [
    {
      id: 'php',
      label: 'Free Space',
      value: 40,
      color: '#ea5e78',
    },
    {
      id: 'javascript',
      label: 'Memmory',
      value: 60,
      color: '#ecedf0',
    },
  ]

  return (
    <TamaguiProvider config={config}>
      <StatisticBox
        memory="45"
        stateIcon="https://placehold.co/16x16"
        stateText="Improving performance"
        title="Title of the box"
      />
      <StatusProvider>
        <div style={{ height: '500px', width: '300px' }}>
          <StandardGauge data={data} />
        </div>
      </StatusProvider>
    </TamaguiProvider>
  )
}

export default App
