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
import ManageValidator from './pages/ManageValidator/ManageValidator'
import config from '../tamagui.config'
import { RootState } from './redux/store'
import {
  ethereumRopsten,
  wcV2InitOptions,
  apiKey,
  LANDING,
  DEVICE_HEALTH_CHECK_ONBOARDING,
  DEVICE_HEALTH_CHECK,
  DEVICE_SYNC_STATUS,
  PAIR_DEVICE,
  CREATE_LOCAL_NODE,
  VALIDATOR_ONBOARDING,
  ADVISORIES,
  VALIDATOR_SETUP,
  VALIDATOR_SETUP_INSTALL,
  CONSENSUS_SELECTION,
  ACTIVATION_VALIDATOR_SETUP,
  KEY_GENERATION,
  RECOVERY_PHRASE,
  DEPOSIT,
  ACTIVATION,
  DASHBOARD,
  LOGS,
  VALIDATOR_MANAGEMENT,
  MANAGE_VALIDATOR,
  EXIT,
  MIGRATE,
  DEPOSIT_PANEL,
  CLIENT_SETUP,
} from './constants'
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
import ExitPanel from './pages/ManageValidator/RightManagePanels/ExitPanel'
import MigratePanel from './pages/ManageValidator/RightManagePanels/MigratePanel'
import DepositPanel from './pages/ManageValidator/RightManagePanels/DepositPanel'
import DefaultPanel from './pages/ManageValidator/RightManagePanels/DefaultPanel'

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
    path: LANDING,
    element: <LandingPage />,
  },
  {
    path: DEVICE_HEALTH_CHECK_ONBOARDING,
    element: <DeviceHealthCheckOnboarding />,
  },
  {
    path: DEVICE_HEALTH_CHECK,
    element: <DeviceHealthCheck />,
  },
  {
    path: DEVICE_SYNC_STATUS,
    element: <DeviceSyncStatus />,
  },
  {
    path: PAIR_DEVICE,
    element: <PairDevice />,
  },
  { path: CREATE_LOCAL_NODE, element: <CreateLocalNode /> },
  {
    path: VALIDATOR_ONBOARDING,
    children: [
      { path: '', element: <Overview /> },
      { path: ADVISORIES, element: <Advisories /> },
      { path: VALIDATOR_SETUP, element: <ValidatorSetup /> },
      { path: VALIDATOR_SETUP_INSTALL, element: <ValidatorSetupInstall /> },
      { path: CONSENSUS_SELECTION, element: <ConsensusSelection /> },
      {
        path: ACTIVATION_VALIDATOR_SETUP,
        element: <ActivationValidatorSetup />,
      },
      { path: CLIENT_SETUP, element: <ClientSetup /> },
      { path: KEY_GENERATION, element: <KeyGeneration /> },
      { path: RECOVERY_PHRASE, element: <ConfirmRecoveryPhrase /> },
      { path: DEPOSIT, element: <Deposit /> },
      {
        path: ACTIVATION,
        element: <Activation />,
      },
    ],
    element: <ValidatorOnboarding />,
  },
  { path: DASHBOARD, element: <Dashboard /> },
  { path: LOGS, element: <LogsPage /> },
  {
    path: VALIDATOR_MANAGEMENT,
    element: <ValidatorManagement />,
  },
  {
    path: `${MANAGE_VALIDATOR}/:validatorName`,
    element: <ManageValidator />,
    children: [
      { path: '', element: <DefaultPanel /> },
      { path: EXIT, element: <ExitPanel /> },
      { path: MIGRATE, element: <MigratePanel /> },
      { path: DEPOSIT_PANEL, element: <DepositPanel /> },
    ],
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
