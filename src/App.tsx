import { TamaguiProvider, Theme } from 'tamagui'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider as StatusProvider } from '@status-im/components'
import { useSelector } from 'react-redux'

import config from '../tamagui.config'
import LandingPage from './pages/LandingPage/LandingPage'
import DeviceHealthCheck from './pages/DeviceHealthCheck/DeviceHealthCheck'
import ConnectDevicePage from './pages/ConnectDevicePage/ConnectDevicePage'
import DeviceSyncStatus from './pages/DeviceSyncStatus/DeviceSyncStatus'
import PairDevice from './pages/PairDevice/PairDevice'
import PinnedNotification from './components/General/PinnedNottification'
import { RootState } from './redux/store'
import CreateLocalNodePage from './pages/CreateLocalNodePage/CreateLocalNodePage'
import ValidatorOnboarding from './pages/ValidatorOnboarding/ValidatorOnboarding'
import Dashboard from './pages/Dashboard/Dashboard'
import './App.css'

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
  { path: '/validator-onboarding', element: <ValidatorOnboarding /> },
  { path: '/dashboard', element: <Dashboard /> },
])

function App() {
  const theme = useSelector((state: RootState) => state.theme)

  return (
    <TamaguiProvider config={config}>
      <StatusProvider>
        <Theme name={theme}>
          <PinnedNotification />
          <RouterProvider router={router} />
        </Theme>
      </StatusProvider>
    </TamaguiProvider>
  )
}

export default App
