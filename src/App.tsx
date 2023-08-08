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
      <StatusProvider>
        <div style={{ height: '500px', width: '300px' }}>
          <StandardGauge data={data} />
        </div>

        <StatisticBox
          memory="30"
          stateIcon="https://placehold.co/60x40"
          stateText="Oooo"
          title="Auuuu"
        />
      </StatusProvider>
    </TamaguiProvider>
  )
}

export default App
