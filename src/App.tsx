import './App.css'
import { TamaguiProvider } from 'tamagui'
import { Provider as StatusProvider } from '@status-im/components'
import StandartGauge from './components/StandardGauge'
 
import config from '../tamagui.config'


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
          <StandartGauge data={data} />
        </div>
      </StatusProvider>
    </TamaguiProvider>
  )
}

export default App
