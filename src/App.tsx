import { TamaguiProvider, Theme } from 'tamagui'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider as StatusProvider } from '@status-im/components'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

import './App.css'
import config from '../tamagui.config'
import LandingPage from './pages/LandingPage/LandingPage'
import DeviceHealthCheck from './pages/DeviceHealthCheck/DeviceHealthCheck'
import ConnectDevicePage from './pages/ConnectDevicePage/ConnectDevicePage'
import DeviceSyncStatus from './pages/DeviceSyncStatus/DeviceSyncStatus'
import PairDevice from './pages/PairDevice/PairDevice'
import { useSelector } from 'react-redux'
import PinnedNotification from './components/General/PinnedNottification'
import { RootState } from './redux/store'
import CreateLocalNodePage from './pages/CreateLocalNodePage/CreateLocalNodePage'
import ValidatorOnboarding from './pages/ValidatorOnboarding/ValidatorOnboarding'

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
])

const chains = [arbitrum, mainnet, polygon]
const projectId = 'YOUR_PROJECT_ID'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function App() {
  const theme = useSelector((state: RootState) => state.theme)

  return (
    <TamaguiProvider config={config}>
      <StatusProvider>
        <Theme name={theme}>
          <WagmiConfig config={wagmiConfig}>
            <PinnedNotification />
            <RouterProvider router={router} />
          </WagmiConfig>
          <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </Theme>
      </StatusProvider>
    </TamaguiProvider>
  )
}

export default App
