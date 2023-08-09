import './App.css'
import { TamaguiProvider } from 'tamagui'
import { Provider as StatusProvider } from '@status-im/components'
import StandardGauge from './components/StandardGauge'

import config from '../tamagui.config'
import HealthInfoSection from './components/HealthInfoSection'

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
        <HealthInfoSection
          usedStorage={120}
          maxStorage={160}
          usedRamMemory={8}
          maxRamMemory={16}
          cpuClockRate={2.5}
          networkLatency={75}
        />
      </StatusProvider>
    </TamaguiProvider>
  )
}

export default App
