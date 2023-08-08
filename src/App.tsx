import './App.css'
import { TamaguiProvider } from 'tamagui'
import { Provider as StatusProvider } from '@status-im/components'
import StandardGauge from './components/StandardGauge'
 
import config from '../tamagui.config'


function App() {
  const data = [
    {
      id: 'php',
      label: 'php',
      value: 70,
      color: '#ea5e78',
    },
    {
      id: 'javascript',
      label: 'javascript',
      value: 40,
      color: '#ecedf0',
    },
  ]

  return (
    <TamaguiProvider config={config}>
      <StatusProvider>
        <div style={{ height: '500px', width: '300px' }}>
          <StandardGauge data={data} />
        </div>
      </StatusProvider>
    </TamaguiProvider>
  )
}

export default App
