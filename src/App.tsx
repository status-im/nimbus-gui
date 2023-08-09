import { TamaguiProvider } from 'tamagui'
import './App.css'
import { Provider as StatusProvider } from '@status-im/components'
import config from '../tamagui.config'
import LandingPage from './components/LayoutComponent/LandingPage'

function App() {
  return (
    <TamaguiProvider config={config}>
      <StatusProvider>
        <LandingPage />
      </StatusProvider>
    </TamaguiProvider>
  )
}

export default App
