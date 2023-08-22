import { TamaguiProvider } from 'tamagui'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider as StatusProvider } from '@status-im/components'
import './App.css'
import config from '../tamagui.config'
import LandingPage from './pages/LandingPage/LandingPage'
import DeviceHealthCheck from './pages/DeviceHealthCheck/DeviceHealthCheck'
import ConnectDevicePage from './pages/ConnectDevicePage/ConnectDevicePage'
import DeviceSyncStatus from './pages/DeviceSyncStatus/DeviceSyncStatus'
import PairDevice from './pages/PairDevice/PairDevice'
import { Provider as ReduxProvider } from 'react-redux'
import PinnedNotification from './components/General/PinnedNottification'
import store from './redux/store'
import CreateLocalNodePage from './pages/CreateLocalNodePage/CreateLocalNodePage'

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
  {
    path: '/pair-device',
    element: <PairDevice />,
  },
  { path: '/create-local-node', element: <CreateLocalNodePage /> },
])

function App() {
  return (
    <ReduxProvider store={store}>
      <TamaguiProvider config={config}>
        <StatusProvider>
          <PinnedNotification />
          <RouterProvider router={router} />
        </StatusProvider>
      </TamaguiProvider>
    </ReduxProvider>
  )
}

export default App
