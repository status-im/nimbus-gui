import { TamaguiProvider } from 'tamagui'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider as StatusProvider } from '@status-im/components'
import './App.css'
import config from '../tamagui.config'
import LandingPage from './components/LandingPage'
import DeviceHealthCheck from './pages/DeviceHealthCheck/DeviceHealthCheck'
import ConnectDevicePage from './components/ConnectDevicePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/device-health-check',
    element: <DeviceHealthCheck />,
  },
  {
    path: '/connect-device',
    element: <ConnectDevicePage />,
  },
])

function App() {
  return (
    <TamaguiProvider config={config}>
      <StatusProvider>
        <RouterProvider router={router} />
      </StatusProvider>
    </TamaguiProvider>
  )
}

export default App
