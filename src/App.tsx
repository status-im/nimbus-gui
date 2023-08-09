import { TamaguiProvider } from 'tamagui'
import './App.css'
import { Provider as StatusProvider } from '@status-im/components'
 
 
import LandingPage from './components/LayoutComponent/LandingPage'

import config from '../tamagui.config'
import StatisticBox from './components/StaticBox'

function App() {
  return (
    <TamaguiProvider config={config}>
      <StatisticBox
        memory="45"
        stateIcon="https://placehold.co/16x16"
        stateText="Improving performance"
        title="Title of the box"
      />
      <StatusProvider>
        <LandingPage />
      </StatusProvider>
    </TamaguiProvider>
  )
}

export default App
