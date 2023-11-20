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
export const GOOD_RAM_MEMORY_TEXT = 'There is sufficient RAM required for selected services.'
export const GOOD_NETWORK_TEXT = 'Network Latency is low.'
export const BAD_STORAGE_TEXT =
  'Your storage is running low as required for additional node services.'
export const BAD_CPU_CLOCK_RATE_TEXT = 'Your CPU clock rate is below the recommended 2.4GHz.'
export const BAD_RAM_MEMORY_TEXT = 'There is insufficient RAM required for selected services.'
export const BAD_NETWORK_TEXT = 'Network Latency is high.'

// Validator Onboarding
export const KEYSTORE_FILES = 'KeystoreFiles'
export const RECOVERY_PHRASE = 'Recovery Phrase'
export const BOTH_KEY_AND_RECOVERY = 'Both KeystoreFiles & Recovery Phrase'
export const ETH_PER_VALIDATOR = 32

export const MAC = 'MacOS'
export const WINDOWS = 'Windows'
export const LINUX = 'Linux'

// for now, this will be constant values
export const CURRENCIES = {
  USD: 1583.42,
  EUR: 1323.61,
}
export const DEPOSIT_SUBTITLE = 'Connect you Wallet to stake required ETH for new validators'
export const CLIENT_SETUP_SUBTITLE = 'How many Validators would you like to run?'

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

// Validator Management
export const VALIDATOR_TABS_MANAGEMENT = ['Active', 'Pending', 'Inactive', 'Exited', 'Withdraw', 'All']

export const VALIDATORS_DATA = [
  {
    number: 1,
    address: 'zQ3asdf9d4Gs0',
    balance: 32.0786,
    income: 0.0786,
    proposals: '1/102',
    attestations: '1/102',
    effectiveness: 98,
    status: 'Active',
  },
  {
    number: 1,
    address: 'zQ3asdf9d4Gs0',
    balance: 32.0786,
    income: 0.0786,
    proposals: '1/102',
    attestations: '1/102',
    effectiveness: 98,
    status: 'Active',
  },
  {
    number: 1,
    address: 'zQ3asdf9d4Gs0',
    balance: 32.0786,
    income: 0.0786,
    proposals: '1/102',
    attestations: '1/102',
    effectiveness: 98,
    status: 'Active',
  },
  {
    number: 1,
    address: 'zQ3asdf9d4Gs0',
    balance: 32.0786,
    income: 0.0786,
    proposals: '1/102',
    attestations: '1/102',
    effectiveness: 98,
    status: 'Active',
  },
]
