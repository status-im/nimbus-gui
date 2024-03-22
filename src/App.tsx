import { TamaguiProvider, Theme } from 'tamagui'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider as StatusProvider } from '@status-im/components'
import { Web3OnboardProvider, init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import walletConnectModule from '@web3-onboard/walletconnect'
import { useSelector } from 'react-redux'

import LandingPage from './pages/LandingPage/LandingPage'
import DeviceHealthCheckOnboarding from './pages/DeviceHealthCheckOnboarding/DeviceHealthCheckOnboarding'
import DeviceSyncStatus from './pages/DeviceSyncStatus/DeviceSyncStatus'
import PairDevice from './pages/PairDevice/PairDevice'
import PinnedNotification from './components/General/PinnedNottification'
import CreateLocalNode from './pages/CreateLocalNode/CreateLocalNode'
import ValidatorOnboarding from './pages/ValidatorOnboarding/ValidatorOnboarding'
import Dashboard from './pages/Dashboard/Dashboard'
import ValidatorManagement from './pages/ValidatorManagement/ValidatorManagement'
import LogsPage from './pages/LogsPage/LogsPage'
import ManageValidator from './pages/ValidatorManagement/ManageValidator/ManageValidator'
import config from '../tamagui.config'
import { RootState } from './redux/store'
import { ethereumRopsten, wcV2InitOptions, apiKey } from './constants'
import './App.css'

//ValidatorOnboarding sub-routes
import Overview from './pages/ValidatorOnboarding/Overview/Overview'
import Advisories from './pages/ValidatorOnboarding/Advisories/Advisories'
import ValidatorSetup from './pages/ValidatorOnboarding/ValidatorSetup/ValidatorSetup/ValidatorSetup'
import ValidatorSetupInstall from './pages/ValidatorOnboarding/ValidatorSetup/ValidatorInstalling/ValidatorInstall'
import ConsensusSelection from './pages/ValidatorOnboarding/ValidatorSetup/ConsensusClient/ConsensusSelection'
import ActivationValidatorSetup from './pages/ValidatorOnboarding/ValidatorSetup/ValidatorActivation/ActivationValidatorSetup'
import ClientSetup from './pages/ValidatorOnboarding/ClientSetup/ClientSetup'
import KeyGeneration from './pages/ValidatorOnboarding/KeyGeneration/KeyGeneration'
import Activation from './pages/ValidatorOnboarding/Activation/Activation'
import ConfirmRecoveryPhrase from './pages/ValidatorOnboarding/KeyGeneration/ConfirmRecoveryPhrase/ConfirmRecoveryPhrase'
import Deposit from './pages/ValidatorOnboarding/Deposit/Deposit'
import DeviceHealthCheck from './pages/DeviceHealthCheck/DeviceHealthCheck'

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
    path: '/device-health-check-onboarding',
    element: <DeviceHealthCheckOnboarding />,
  },
  {
    path: '/device-health-check',
    element: <DeviceHealthCheck />,
  },
  {
    path: '/device-sync-status',
    element: <DeviceSyncStatus />,
  },
  {
    path: '/pair-device',
    element: <PairDevice />,
  },
  { path: '/create-local-node', element: <CreateLocalNode /> },
  {
    path: '/validator-onboarding',
    children: [
      { path: '', element: <Overview /> },
      { path: 'advisories', element: <Advisories /> },
      { path: 'validator-setup', element: <ValidatorSetup /> },
      { path: 'validator-setup-install', element: <ValidatorSetupInstall /> },
      { path: 'consensus-selection', element: <ConsensusSelection /> },
      {
        path: 'activation-validator-setup',
        element: <ActivationValidatorSetup />,
      },
      { path: 'client-setup', element: <ClientSetup /> },
      { path: 'key-generation', element: <KeyGeneration /> },
      { path: 'recovery-phrase', element: <ConfirmRecoveryPhrase /> },
      { path: 'deposit', element: <Deposit /> },
      {
        path: 'activation',
        element: <Activation />,
      },
    ],
    element: <ValidatorOnboarding />,
  },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/logs', element: <LogsPage /> },
  {
    path: '/validator-management',
    element: <ValidatorManagement />,
  },
  {
    path: '/manage-validator/:validatorName',
    element: <ManageValidator />,
  },
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
