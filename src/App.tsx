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
import ConnectExistingInstance from './pages/ConnectExistingInstance/ConnectExistingInstance'
import './App.css'

const apiKey = '1730eff0-9d50-4382-a3fe-89f0d34a2070'
const INFURA_KEY = 'f25e905e25a545dcaad2c939530b91db'
const rpcUrl = `https://mainnet.infura.io/v3/${INFURA_KEY}`

const wcV2InitOptions = {
  projectId: 'abc123...',
  requiredChains: [1, 56],
  dappUrl: 'http://YourAwesomeDapp.com',
}

const injected = injectedModule()
const walletConnect = walletConnectModule(wcV2InitOptions)

const ethereumRopsten = {
  id: '0x3',
  token: 'rETH',
  label: 'Ethereum Ropsten',
  rpcUrl,
}
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
