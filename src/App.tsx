import { TamaguiProvider, Theme } from 'tamagui'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider as StatusProvider } from '@status-im/components'
import { Web3OnboardProvider, init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import walletConnectModule from '@web3-onboard/walletconnect'
import { useSelector } from 'react-redux'

import config from '../tamagui.config'
import LandingPage from './pages/LandingPage/LandingPage'
import DeviceHealthCheck from './pages/DeviceHealthCheck/DeviceHealthCheck'
import ConnectDevicePage from './pages/ConnectDevicePage/ConnectDevicePage'
import { RootState } from './redux/store'
import DeviceSyncStatus from './pages/DeviceSyncStatus/DeviceSyncStatus'
import PairDevice from './pages/PairDevice/PairDevice'
import PinnedNotification from './components/General/PinnedNottification'
import CreateLocalNodePage from './pages/CreateLocalNodePage/CreateLocalNodePage'
import ValidatorOnboarding from './pages/ValidatorOnboarding/ValidatorOnboarding'
import Dashboard from './pages/Dashboard/Dashboard'
import ConnectExistingInstance from './pages/ConnectExistingInstance/ConnectExistingInstance'
import ValidatorManagement from './pages/ValidatorManagement/ValidatorManagement'
import LogsPage from './pages/LogsPage/LogsPage'
import { ethereumRopsten, wcV2InitOptions, apiKey } from './constants'
import './App.css'

const injected = injectedModule()
const walletConnect = walletConnectModule(wcV2InitOptions)

const chains = [ethereumRopsten]
const wallets = [injected, walletConnect]
const web3Onboard = init({
  apiKey,
  wallets,
  chains,
  appMetadata: {
    name: 'Web3-Onboard Demo',
    icon: '<svg>App Icon</svg>',
    description: 'A demo of Web3-Onboard.',
  },
})

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
  {
    path: '/pair-existing-instance',
    element: <ConnectExistingInstance />,
  },
  { path: '/create-local-node', element: <CreateLocalNodePage /> },
  { path: '/validator-onboarding', element: <ValidatorOnboarding /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/logs', element: <LogsPage /> },
  { path: '/validator-management', element: <ValidatorManagement /> },
])

function App() {
  const theme = useSelector((state: RootState) => state.theme)

  return (
    <TamaguiProvider config={config}>
      <Web3OnboardProvider web3Onboard={web3Onboard}>
        <StatusProvider>
          <Theme name={theme}>
            <PinnedNotification />
            <RouterProvider router={router} />
          </Theme>
        </StatusProvider>
      </Web3OnboardProvider>
    </TamaguiProvider>
  )
}

export default App
