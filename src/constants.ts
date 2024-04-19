import { LogType } from './types'

// App
export const apiKey = '1730eff0-9d50-4382-a3fe-89f0d34a2070'
const INFURA_KEY = 'f25e905e25a545dcaad2c939530b91db'
const rpcUrl = `https://mainnet.infura.io/v3/${INFURA_KEY}`
export const wcV2InitOptions = {
  projectId: '4f6c353926c22973029147b9d85c4485',
  requiredChains: [1, 56],
  dappUrl: 'http://localhost:5173/',
}
export const ethereumRopsten = {
  id: '0x3',
  token: 'rETH',
  label: 'Ethereum Ropsten',
  rpcUrl,
}

export const PATHS = {
  LANDING: '/',
  DEVICE_HEALTH_CHECK_ONBOARDING: '/device-health-check-onboarding',
  DEVICE_HEALTH_CHECK: '/device-health-check',
  DEVICE_SYNC_STATUS: '/device-sync-status',
  PAIR_DEVICE: '/pair-device',
  CREATE_LOCAL_NODE: '/create-local-node',
  VALIDATOR_ONBOARDING: '/validator-onboarding',
  DASHBOARD: '/dashboard',
  LOGS: '/logs',
  VALIDATOR_MANAGEMENT: '/validator-management',
  MANAGE_VALIDATOR: '/manage-validator',
}

export const VALIDATOR_ONBOARDING_SUB_PATHS = {
  OVERVIEW: '',
  ADVISORIES: 'advisories',
  VALIDATOR_SETUP: 'validator-setup',
  VALIDATOR_SETUP_INSTALL: 'validator-setup-install',
  CONSENSUS_SELECTION: 'consensus-selection',
  ACTIVATION_VALIDATOR_SETUP: 'activation-validator-setup',
  CLIENT_SETUP: 'client-setup',
  KEY_GENERATION: 'key-generation',
  RECOVERY_PHRASE: 'recovery-phrase',
  DEPOSIT: 'deposit',
  ACTIVATION: 'activation',
}

export const MANAGE_VALIDATOR_SUB_PATHS = {
  DEFAULT: '',
  EXIT: 'exit',
  MIGRATE: 'migrate',
  DEPOSIT: 'deposit',
}

// Device Health Check
export const GOOD_STORAGE_TEXT =
  'You have plenty of storage available for additional node services.'
export const GOOD_CPU_CLOCK_RATE_TEXT = '2.4GHz is recommended for CPU.'
export const GOOD_RAM_MEMORY_TEXT =
  'There is sufficient RAM required for selected services.'
export const GOOD_NETWORK_TEXT = 'Network Latency is low.'
export const BAD_STORAGE_TEXT =
  'Your storage is running low as required for additional node services.'
export const BAD_CPU_CLOCK_RATE_TEXT =
  'Your CPU clock rate is below the recommended 2.4GHz.'
export const BAD_RAM_MEMORY_TEXT =
  'There is insufficient RAM required for selected services.'
export const BAD_NETWORK_TEXT = 'Network Latency is high.'

// Validator Onboarding
export const KEYSTORE_FILES_OPTION = 'KeystoreFiles'
export const RECOVERY_PHRASE_OPTION = 'Recovery Phrase'
export const BOTH_KEY_AND_RECOVERY = 'Both KeystoreFiles & Recovery Phrase'
export const ETH_PER_VALIDATOR = 32

export const FORM_STEPS = [
  { label: 'Overview', subtitle: 'Get Started', paths: [''] },
  {
    label: 'Advisories',
    subtitle: 'Understand your Duties',
    paths: [VALIDATOR_ONBOARDING_SUB_PATHS.ADVISORIES],
  },
  {
    label: 'Client Setup',
    subtitle: 'Execution & Consensus',
    paths: [
      VALIDATOR_ONBOARDING_SUB_PATHS.VALIDATOR_SETUP,
      VALIDATOR_ONBOARDING_SUB_PATHS.VALIDATOR_SETUP_INSTALL,
      VALIDATOR_ONBOARDING_SUB_PATHS.CLIENT_SETUP,
      VALIDATOR_ONBOARDING_SUB_PATHS.ACTIVATION_VALIDATOR_SETUP,
    ],
  },
  {
    label: 'Validator Setup',
    subtitle: 'Validators & Withdrawal',
    paths: [
      VALIDATOR_ONBOARDING_SUB_PATHS.VALIDATOR_SETUP,
      VALIDATOR_ONBOARDING_SUB_PATHS.VALIDATOR_SETUP_INSTALL,
      VALIDATOR_ONBOARDING_SUB_PATHS.CONSENSUS_SELECTION,
      VALIDATOR_ONBOARDING_SUB_PATHS.ACTIVATION_VALIDATOR_SETUP,
    ],
  },
  {
    label: 'Key Generation',
    subtitle: 'Secure your Keypairs',
    paths: [VALIDATOR_ONBOARDING_SUB_PATHS.KEY_GENERATION],
  },
  {
    label: 'Deposit',
    subtitle: 'Stake your ETH',
    paths: [VALIDATOR_ONBOARDING_SUB_PATHS.DEPOSIT],
  },
  {
    label: 'Activation',
    subtitle: 'Complete Setup',
    paths: [VALIDATOR_ONBOARDING_SUB_PATHS.ACTIVATION],
  },
]
export const DepositStatusSteps = [
  { label: 'Deposit' },
  { label: 'Pending' },
  { label: 'Active' },
  { label: 'Exit' },
]
export const STEPPER_PATHS = [
  `${PATHS.VALIDATOR_ONBOARDING}/`,
  `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.ADVISORIES}`,
  `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.VALIDATOR_SETUP}`,
  `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.VALIDATOR_SETUP_INSTALL}`,
  `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.CONSENSUS_SELECTION}`,
  `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.ACTIVATION_VALIDATOR_SETUP}`,
  `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.CLIENT_SETUP}`,
  `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.KEY_GENERATION}`,
  `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.RECOVERY_PHRASE}`,
  `${PATHS.VALIDATOR_ONBOARDING}/`,
  `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.ACTIVATION}`,
  PATHS.DASHBOARD,
]
export const ADVISORY_TOPICS: {
  [key: string]: string[]
} = {
  'Proof of Stake': [
    'Proof of Stake systems require validators to hold and lock up a certain amount of cryptocurrency to participate.',
    'In Proof of Stake, the chances of creating a block is proportional to the amount of cryptocurrency held.',
    'Unlike Proof of Work, Proof of Stake aims to achieve consensus without intensive computational work.',
  ],
  Deposit: [
    'Deposits are often irreversible, so ensure to double-check transaction details before confirming.',
    'Delay in deposit acknowledgment might be due to network congestion or node synchronization.',
    'Always keep transaction IDs or hashes for records and future references in case of disputes.',
  ],
  'Key Management': [
    'Storing your private keys on a device connected to the internet is susceptible to hacks and malware.',
    'Hardware wallets provide an added layer of security by keeping private keys isolated from online systems.',
    'Regularly back up and encrypt your key management solutions to prevent potential losses.',
  ],
  'Bad Behaviour': [
    'If you try to cheat the system, or act contrary to the specification, you will be liable to incur a penalty known as slashing.',
    'Running your validator keys simultaneously on two or more machines will result in slashing.*',
    'Simply being offline with an otherwise healthy network does not result in slashing, but will result in small inactivity penalties.',
  ],
  Requirements: [
    'Ensure your system meets the minimum software and hardware requirements before initiating any operations.',
    'Staying updated with the latest versions is vital to maintain system integrity and performance.',
    'Failure to meet requirements might result in operational inefficiencies or security vulnerabilities.',
  ],
  Risks: [
    'Cryptocurrency investments are subject to high volatility and can result in both significant gains and losses.',
    'Always do thorough research before making investment decisions or engaging in transactions.',
    'Be wary of phishing scams, malicious software, and too-good-to-be-true offers.',
  ],
}

export const MAC = 'MacOS'
export const WINDOWS = 'Windows'
export const LINUX = 'Linux'

export const INITIAL_CURRENCY = 'usd'
export const LOADING = 'Loading...'

export const DEPOSIT_SUBTITLE =
  'Connect you Wallet to stake required ETH for new validators'
export const CLIENT_SETUP_SUBTITLE =
  'How many Validators would you like to run?'

// Dashboard
export const years = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEPT',
  'OCT',
  'NOV',
  'DEC',
]
export const VALIDATOR_TABS_RIGHT_SIDEBAR = ['Active', 'Pending', 'Inactive']

// Validator Management
export const VALIDATOR_TABS_MANAGEMENT = [
  'Active',
  'Pending',
  'Inactive',
  'Exited',
  'Withdrawn',
  'All',
]
export const VALIDATORS_DATA = [
  {
    name: '1',
    address: 'zQ3asdf9d4Gs0',
    balance: 32.0786,
    income: 0.0786,
    proposals: '1/102',
    attestations: '1/102',
    effectiveness: 98,
    status: 'Active',
  },
  {
    name: '1',
    address: 'zQ3asdf9d4Gs0',
    balance: 32.0786,
    income: 0.0786,
    proposals: '1/102',
    attestations: '1/102',
    effectiveness: 98,
    status: 'Active',
  },
  {
    name: '1',
    address: 'zQ3asdf9d4Gs0',
    balance: 32.0786,
    income: 0.0786,
    proposals: '1/102',
    attestations: '1/102',
    effectiveness: 98,
    status: 'Active',
  },
  {
    name: '1',
    address: 'zQ3asdf9d4Gs0',
    balance: 32.0786,
    income: 0.0786,
    proposals: '1/102',
    attestations: '1/102',
    effectiveness: 98,
    status: 'Active',
  },
]

// Manage Validator
export const VALIDATOR_SETTINGS_CARDS_TITLES = ['Exit', 'Migrate', 'Advanced']
export const VALIDATOR_SETTING_ADVANCED_OPTIONS = ['Deposit']
export const MODAL_WIDTH = 1160

export const MANAGE_VALIDATOR_TABS = [
  'Overview',
  'Charts',
  'Blocks',
  'Attestations',
  'Sync',
  'Slashings',
  'Deposits',
  'Withdrawals',
]
export const MANAGE_VALIDATOR_TABS_TABLE_DATA = [
  {
    headers: [
      'Balance',
      'Income',
      'Proposals',
      'Attestations',
      'Effectiveness',
      'Rank',
    ],
    rows: [
      ['32.0786', null],
      ['0.0786', '#00D957'],
      ['1/102', null],
      ['98%', null],
      ['1', '#2F80ED'],
      ['585910', '#2F80ED'],
    ],
  },
  {
    headers: [
      'Total Rewards',
      '1D',
      '7D',
      '31D',
      'APR',
      '7D',
      '31D',
      '365D',
      'Luck',
    ],
    rows: [
      ['+1.31402 ETH', null],
      ['+1.31402 ETH', '#00D957'],
      ['+0.01579', '#00D957'],
      ['+0.06969', '#00D957'],
      ['%', null],
      ['2.57%', null],
      ['2.56%', null],
      ['4.10%', null],
      ['69.2% B / 592.1% S', null],
    ],
  },
  { headers: [] },
  { headers: [] },
  { headers: [] },
  { headers: [] },
  { headers: [] },
  { headers: [] },
  { headers: [] },
]

// Pair Device
export const VC = 'VC'
export const VALIDATOR_CLIENT = 'Validator Client'
export const BEACON = 'Beacon'
export const NODE = 'Node'
export const VC_PORT = '9000'
export const BEACON_PORT = '5052'
export const DEFAULT_ADDRESS = 'http://124.0.0.1'

export const simulateLogs: LogType[] = [
  {
    lvl: 'NTC',
    ts: '2024-02-15 13:07:26.934+02:00',
    msg: 'Initializing Waku pairing',
    tid: 214711,
    file: 'waku_pair.nim:35',
    wakuPort: 60000,
    discv5Port: 9999,
  },
  {
    lvl: 'NTC',
    ts: '2024-02-15 13:07:26.934+02:00',
    msg: 'Initial information parsed from the QR',
    tid: 214711,
    file: 'waku_pair.nim:38',
    contentTopic:
      '/nimbus-gui/0.0.0/wakunoise/1/sessions_shard-e85d3e24a2040e0c26b235fb867ebbb9/proto',
    qrMessageNameTag: [
      163, 137, 61, 208, 144, 191, 182, 21, 64, 91, 41, 124, 157, 142, 56, 201,
    ],
  },
  {
    lvl: 'NTC',
    ts: '2024-02-15 13:07:26.935+02:00',
    msg: 'No external IP provided for the ENR, this node will not be discoverable until the ENR is updated with the discovered external IP address',
    topics: 'eth p2p discv5',
    tid: 214711,
    file: 'protocol.nim:993',
  },
  {
    lvl: 'DBG',
    ts: '2024-02-15 13:07:26.936+02:00',
    msg: 'Waiting for the node to be ready',
    tid: 214711,
    file: 'waku_node.nim:77',
    connectedPeers: 0,
    required: 2,
  },
  {
    lvl: 'DBG',
    ts: '2024-02-15 13:07:31.937+02:00',
    msg: 'Waiting for the node to be ready',
    tid: 214711,
    file: 'waku_node.nim:77',
    connectedPeers: 0,
    required: 2,
  },
  {
    lvl: 'ERR',
    ts: '2024-02-15 13:07:36.938+02:00',
    msg: 'Waiting for the node to be ready',
    tid: 214711,
    file: 'waku_node.nim:77',
    connectedPeers: 0,
    required: 2,
  },
  {
    lvl: 'NTC',
    ts: '2024-02-15 13:07:41.939+02:00',
    msg: 'Waiting for the node to be ready',
    tid: 214711,
    file: 'waku_node.nim:77',
    connectedPeers: 0,
    required: 2,
  },
  {
    lvl: 'INF',
    ts: '2024-02-15 13:07:46.940+02:00',
    msg: 'Waiting for the node to be ready',
    tid: 214711,
    file: 'waku_node.nim:77',
    connectedPeers: 1,
    required: 2,
  },
  {
    lvl: 'INF',
    ts: '2024-02-15 13:07:51.940+02:00',
    msg: 'Waiting for the node to be ready',
    tid: 214711,
    file: 'waku_node.nim:77',
    connectedPeers: 1,
    required: 2,
  },
  {
    lvl: 'ERR',
    ts: '2024-02-15 13:07:56.941+02:00',
    msg: 'Waiting for the node to be ready',
    tid: 214711,
    file: 'waku_node.nim:77',
    connectedPeers: 0,
    required: 2,
  },
  {
    lvl: 'ERR',
    ts: '2024-02-15 13:08:01.942+02:00',
    msg: 'Waiting for the node to be ready',
    tid: 214711,
    file: 'waku_node.nim:77',
    connectedPeers: 0,
    required: 2,
  },
  {
    lvl: 'ERR',
    ts: '2024-02-15 13:08:06.943+02:00',
    msg: 'Node is ready',
    tid: 214711,
    file: 'waku_node.nim:74',
    connectedPeers: 4,
    required: 2,
  },
  {
    lvl: 'WRN',
    ts: '2024-02-15 13:08:06.944+02:00',
    msg: 'Publishing handshake initiator message',
    tid: 214711,
    file: 'waku_handshake_utils.nim:109',
    step: 1,
  },
  {
    lvl: 'FAT',
    ts: '2024-02-15 13:08:06.945+02:00',
    msg: 'Published handshake initiator message',
    tid: 214711,
    file: 'waku_handshake_utils.nim:111',
    step: 1,
    psTopic: '/waku/2/default-waku/proto',
    contentTopic:
      '/nimbus-gui/0.0.0/wakunoise/1/sessions_shard-e85d3e24a2040e0c26b235fb867ebbb9/proto',
    payload: [
      163, 137, 61, 208, 144, 191, 182, 21, 64, 91, 41, 124, 157, 142, 56, 201,
      14, 33, 0, 167, 33, 176, 25, 62, 146, 11, 164, 65, 105, 137, 244, 7, 11,
      203, 201, 74, 217, 220, 74, 75, 251, 51, 179, 172, 107, 9, 25, 81, 189,
      55, 24, 8, 1, 0, 0, 0, 0, 0, 0, 56, 247, 185, 85, 75, 246, 229, 84, 221,
      208, 172, 42, 26, 166, 105, 42, 124, 60, 53, 39, 137, 60, 10, 76, 107,
      185, 41, 196, 45, 96, 148, 20, 35, 44, 179, 116, 104, 227, 147, 13, 145,
      170, 73, 106, 120, 6, 250, 102, 67, 231, 241, 74, 58, 187, 147, 4, 54, 17,
      68, 6, 244, 191, 108, 126, 74, 81, 203, 52, 46, 101, 48, 196, 175, 23,
      201, 145, 144, 238, 208, 126, 91, 43, 53, 136, 197, 24, 140, 190, 24, 242,
      134, 137, 25, 255, 34, 190, 191, 47, 161, 122, 237, 29, 108, 147, 21, 240,
      128, 32, 117, 62, 85, 227, 120, 124, 116, 227, 246, 206, 145, 137, 190,
      92, 203, 154, 40, 237, 251, 237, 38, 74, 143, 136, 18, 31, 139, 200, 75,
      87, 12, 45, 181, 247, 11, 97, 174, 145, 222, 250, 207, 52, 11, 29, 132,
      185, 55, 115, 39, 48, 76, 105, 248, 19, 227, 31, 186, 115, 175, 144, 191,
      255, 32, 112, 164, 23, 57, 102, 140, 254, 201, 160, 116, 11, 69, 59, 18,
      68, 141, 181, 7, 183, 98, 48, 116, 176, 146, 239, 52, 12, 78, 12, 164,
      162, 103, 77, 92, 229, 166, 170, 146, 249, 208, 57, 40, 55, 74, 56, 79,
      28, 121, 147, 50, 57, 239, 23, 102, 65, 144, 42, 6, 89, 87, 153, 148, 42,
      236, 165, 51, 243, 12, 59, 184, 177, 220, 9, 211, 71, 209, 77, 95, 154,
      134, 36, 131, 163, 19, 24, 143, 222, 207, 70, 198, 56, 31, 14,
    ],
  },
  {
    lvl: 'NTC',
    ts: '2024-02-15 13:08:09.400+02:00',
    msg: 'Received handshake message for step:',
    tid: 214711,
    file: 'waku_handshake_utils.nim:185',
    step: 2,
    psTopic: '/waku/2/default-waku/proto',
    contentTopic:
      '/nimbus-gui/0.0.0/wakunoise/1/sessions_shard-e85d3e24a2040e0c26b235fb867ebbb9/proto',
    payload: {
      messageNametag: [
        165, 161, 176, 67, 148, 42, 223, 214, 251, 63, 236, 89, 147, 37, 44, 41,
      ],
      protocolId: 14,
      handshakeMessage: [
        {
          flag: 1,
          pk: [
            14, 215, 23, 158, 250, 67, 36, 64, 18, 207, 159, 134, 68, 75, 113,
            159, 23, 111, 85, 225, 205, 167, 133, 74, 177, 130, 137, 154, 167,
            241, 2, 106, 146, 192, 154, 59, 176, 41, 11, 81, 213, 248, 147, 47,
            199, 71, 148, 253,
          ],
        },
      ],
      transportMessage: [
        192, 41, 123, 3, 15, 109, 115, 39, 38, 212, 133, 120, 205, 250, 118,
        192, 143, 4, 235, 48, 125, 122, 234, 223, 181, 208, 146, 163, 89, 44,
        80, 119, 18, 30, 164, 84, 244, 209, 131, 123, 120, 60, 217, 117, 73, 97,
        249, 101, 168, 85, 187, 47, 172, 7, 53, 230, 155, 172, 55, 88, 5, 136,
        170, 93, 105, 96, 53, 13, 114, 132, 22, 206, 15, 118, 119, 19, 215, 101,
        248, 151, 176, 179, 24, 134, 36, 24, 218, 3, 32, 89, 14, 159, 161, 217,
        35, 146, 188, 74, 221, 104, 121, 193, 0, 99, 13, 173, 139, 110, 115,
        206, 34, 229, 50, 69, 195, 18, 71, 96, 188, 42, 24, 53, 169, 32, 60,
        223, 150, 217, 30, 122, 60, 209, 158, 204, 30, 199, 241, 223, 244, 217,
        47, 97, 254, 65, 147, 203, 173, 126, 117, 102, 109, 43, 83, 242, 15,
        132, 119, 249, 34, 230, 190, 157, 94, 53, 121, 0, 167, 49, 217, 66, 127,
        206, 14, 105, 127, 135, 121, 122, 143, 25, 175, 192, 131, 242, 197, 204,
        231, 79, 177, 80, 118, 112, 79, 63, 148, 147, 63, 14, 173, 190, 57, 212,
        100, 25, 160, 72, 2, 149, 205, 252, 170, 201, 92, 61, 174, 115, 168,
        146, 247, 12, 128, 122, 143, 250, 43, 15, 169, 152, 54, 116, 51, 254,
        226, 202, 233, 193, 72, 116, 123, 162, 155, 92, 207, 196, 53, 232, 121,
        219, 188, 223, 95, 122, 205, 206, 247, 131, 228, 239, 172, 132, 228,
        227, 98, 202,
      ],
    },
  },
  {
    lvl: 'NTC',
    ts: '2024-02-15 13:08:09.401+02:00',
    msg: 'Handling handshake message for step:',
    tid: 214711,
    file: 'waku_handshake_utils.nim:187',
    step: 2,
  },
  {
    lvl: 'NTC',
    ts: '2024-02-15 13:08:09.401+02:00',
    msg: 'Preparing handshake message for step:',
    tid: 214711,
    file: 'waku_handshake_utils.nim:153',
    step: 3,
  },
  {
    lvl: 'NTC',
    ts: '2024-02-15 13:08:09.401+02:00',
    msg: 'Publishing handshake message for step:',
    tid: 214711,
    file: 'waku_handshake_utils.nim:170',
    step: 3,
  },
  {
    lvl: 'INF',
    ts: '2024-02-15 13:08:09.401+02:00',
    msg: 'Published handshake message for step:',
    tid: 214711,
    file: 'waku_handshake_utils.nim:172',
    step: 3,
    psTopic: '/waku/2/default-waku/proto',
    contentTopic:
      '/nimbus-gui/0.0.0/wakunoise/1/sessions_shard-e85d3e24a2040e0c26b235fb867ebbb9/proto',
    message: {
      payload: [
        57, 214, 219, 103, 0, 179, 10, 1, 107, 133, 31, 170, 89, 58, 205, 159,
        14, 49, 1, 5, 97, 85, 64, 98, 175, 96, 15, 127, 209, 11, 106, 197, 231,
        109, 106, 248, 177, 239, 104, 240, 233, 154, 141, 73, 39, 104, 129, 176,
        172, 162, 171, 174, 146, 29, 12, 182, 172, 196, 153, 174, 188, 53, 66,
        142, 105, 11, 159, 8, 1, 0, 0, 0, 0, 0, 0, 96, 228, 12, 25, 120, 113,
        149, 62, 154, 246, 252, 64, 70, 125, 136, 134, 166, 123, 153, 64, 151,
        179, 13, 245, 187, 224, 223, 222, 74, 200, 86, 97, 212, 87, 11, 224, 1,
        241, 132, 195, 12, 235, 143, 54, 169, 152, 134, 36, 63, 7, 193, 249, 21,
        223, 234, 219, 173, 134, 228, 112, 42, 236, 160, 203, 32, 1, 61, 151,
        219, 154, 114, 228, 62, 227, 140, 210, 8, 187, 248, 65, 22, 127, 97,
        173, 50, 240, 142, 219, 61, 72, 82, 30, 136, 95, 200, 40, 43, 140, 44,
        194, 253, 236, 150, 81, 34, 123, 119, 83, 95, 218, 56, 126, 233, 124,
        219, 243, 196, 229, 30, 134, 45, 190, 217, 146, 48, 132, 66, 230, 48,
        83, 73, 59, 90, 129, 31, 79, 46, 124, 67, 201, 220, 245, 250, 36, 112,
        13, 124, 35, 165, 114, 167, 67, 89, 65, 45, 122, 159, 11, 132, 243, 29,
        61, 26, 79, 252, 175, 27, 133, 191, 229, 144, 38, 171, 255, 1, 39, 24,
        88, 174, 66, 216, 42, 143, 29, 34, 202, 184, 26, 251, 128, 64, 60, 90,
        178, 199, 142, 127, 237, 65, 104, 254, 31, 84, 174, 86, 3, 150, 145,
        140, 194, 236, 213, 31, 104, 24, 109, 18, 240, 189, 184, 88, 147, 78,
        177, 108, 62, 96, 176, 199, 225, 209, 244, 77, 151, 4, 76, 126, 85, 169,
        170, 90, 190, 59, 149, 184, 157, 128, 189, 106, 150, 45, 170, 238, 141,
        148, 163, 70, 157, 59, 32, 29, 190, 20, 61,
      ],
      contentTopic:
        '/nimbus-gui/0.0.0/wakunoise/1/sessions_shard-e85d3e24a2040e0c26b235fb867ebbb9/proto',
      meta: [],
      version: 2,
      timestamp: 0,
      ephemeral: false,
      proof: [],
    },
  },
  {
    lvl: 'NTC',
    ts: '2024-02-15 13:08:10.945+02:00',
    msg: 'Finalizing handshake',
    tid: 214711,
    file: 'waku_handshake_utils.nim:241',
  },
  {
    lvl: 'NTC',
    ts: '2024-02-15 13:08:10.946+02:00',
    msg: 'Handshake finalized successfully',
    tid: 214711,
    file: 'waku_handshake_utils.nim:243',
  },
]
export const LogsTypes = {
  NTC: 'NOTICE',
  DBG: 'DEBUG',
  INF: 'INFO',
  WRN: 'WARN',
  ERR: 'ERROR',
  FAT: 'FATAL',
}
