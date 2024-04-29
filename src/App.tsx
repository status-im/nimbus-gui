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
  PATHS,
  VALIDATOR_ONBOARDING_SUB_PATHS,
  VALIDATOR_MANAGEMENT,
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
    path: PATHS.LANDING,
    element: <LandingPage />,
  },
  {
    path: PATHS.DEVICE_HEALTH_CHECK_ONBOARDING,
    element: <DeviceHealthCheckOnboarding />,
  },
  {
    path: PATHS.DEVICE_HEALTH_CHECK,
    element: <DeviceHealthCheck />,
  },
  {
    path: PATHS.DEVICE_SYNC_STATUS,
    element: <DeviceSyncStatus />,
  },
  {
    path: PATHS.PAIR_DEVICE,
    element: <PairDevice />,
  },
  { path: PATHS.CREATE_LOCAL_NODE, element: <CreateLocalNode /> },
  {
    path: PATHS.VALIDATOR_ONBOARDING,
    children: [
      { path: VALIDATOR_ONBOARDING_SUB_PATHS.OVERVIEW, element: <Overview /> },
      {
        path: VALIDATOR_ONBOARDING_SUB_PATHS.ADVISORIES,
        element: <Advisories />,
      },
      {
        path: VALIDATOR_ONBOARDING_SUB_PATHS.VALIDATOR_SETUP,
        element: <ValidatorSetup />,
      },
      {
        path: VALIDATOR_ONBOARDING_SUB_PATHS.VALIDATOR_SETUP_INSTALL,
        element: <ValidatorSetupInstall />,
      },
      {
        path: VALIDATOR_ONBOARDING_SUB_PATHS.CONSENSUS_SELECTION,
        element: <ConsensusSelection />,
      },
      {
        path: VALIDATOR_ONBOARDING_SUB_PATHS.ACTIVATION_VALIDATOR_SETUP,
        element: <ActivationValidatorSetup />,
      },
      {
        path: VALIDATOR_ONBOARDING_SUB_PATHS.CLIENT_SETUP,
        element: <ClientSetup />,
      },
      {
        path: VALIDATOR_ONBOARDING_SUB_PATHS.KEY_GENERATION,
        element: <KeyGeneration />,
      },
      {
        path: VALIDATOR_ONBOARDING_SUB_PATHS.RECOVERY_PHRASE,
        element: <ConfirmRecoveryPhrase />,
      },
      { path: VALIDATOR_ONBOARDING_SUB_PATHS.DEPOSIT, element: <Deposit /> },
      {
        path: VALIDATOR_ONBOARDING_SUB_PATHS.ACTIVATION,
        element: <Activation />,
      },
    ],
    element: <ValidatorOnboarding />,
  },
  { path: PATHS.DASHBOARD, element: <Dashboard /> },
  { path: PATHS.LOGS, element: <LogsPage /> },
  {
    path: PATHS.VALIDATOR_MANAGEMENT,
    element: <ValidatorManagement />,
  },
  {
    path: `${PATHS.VALIDATOR_MANAGEMENT}/:validatorName`,
    element: <ManageValidator />,
    children: [
      { path: VALIDATOR_MANAGEMENT.DEFAULT, element: <DefaultPanel /> },
      { path: VALIDATOR_MANAGEMENT.EXIT, element: <ExitPanel /> },
      { path: VALIDATOR_MANAGEMENT.MIGRATE, element: <MigratePanel /> },
      { path: VALIDATOR_MANAGEMENT.DEPOSIT, element: <DepositPanel /> },
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
