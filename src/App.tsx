import { TamaguiProvider } from 'tamagui'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider as StatusProvider } from '@status-im/components'
import './App.css'
import config from '../tamagui.config'
import LandingPage from './pages/LandingPage/LandingPage'
import DeviceHealthCheck from './pages/DeviceHealthCheck/DeviceHealthCheck'
import ConnectDevicePage from './pages/ConnectDevicePage/ConnectDevicePage'
import DeviceSyncStatus from './pages/DeviceSyncStatus/DeviceSyncStatus'
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store'

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
  {
    path: '/device-sync-status',
    element: <DeviceSyncStatus />,
  },
])

function App() {
  return (
    <TamaguiProvider config={config}>
      <ReduxProvider store={store}>
        <StatusProvider>
          <RouterProvider router={router} />
        </StatusProvider>
      </ReduxProvider>
    </TamaguiProvider>
  )
}

export default App
