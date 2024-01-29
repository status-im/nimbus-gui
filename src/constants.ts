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
export const KEYSTORE_FILES = 'KeystoreFiles'
export const RECOVERY_PHRASE = 'Recovery Phrase'
export const BOTH_KEY_AND_RECOVERY = 'Both KeystoreFiles & Recovery Phrase'
export const ETH_PER_VALIDATOR = 32
export const FORM_STEPS = [
  { label: 'Overview', subtitle: 'Get Started' },
  { label: 'Advisories', subtitle: 'Understand your Duties' },
  { label: 'Client Setup', subtitle: 'Execution & Consensus' },
  { label: 'Validator Setup', subtitle: 'Validators & Withdrawal' },
  { label: 'Key Generation', subtitle: 'Secure your Keypairs' },
  { label: 'Deposit', subtitle: 'Stake your ETH' },
  { label: 'Activation', subtitle: 'Complete Setup' },
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

// for now, this will be constant values
export const CURRENCIES = {
  USD: 1583.42,
  EUR: 1323.61,
}
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
  'Withdraw',
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

// Pair Device
export const VC = 'VC'
export const VALIDATOR_CLIENT = 'Validator Client'
export const BEACON = 'Beacon'
export const NODE = 'Node'
export const VC_PORT = '9000'
export const BEACON_PORT = '5052'
export const DEFAULT_ADDRESS = 'http://124.0.0.1'
