import { YStack } from 'tamagui'

const BAD_STORAGE_TEXT = 'Your storage is running low as required for additional node services.'
const CPU_CLOCK_RATE_TEXT = '2.4GHz is recommended for CPU.'
const GOOD_RAM_MEMORY_TEXT = 'There is sufficient ram required for selected services.'
const NETWORK_TEXT = 'Network Latency is low.'
type HealthInfoSectionProps = {
  usedStorage: number
  maxStorage: number
  usedCpuClockRate: number
  usedRamMemory: number
  maxRamMemory: number
  network: number
}

const HealthInfoSection = (props: HealthInfoSectionProps) => {
  const { usedStorage, maxStorage, usedCpuClockRate, usedRamMemory, maxRamMemory, network } = props

  console.log(usedStorage, maxStorage, usedCpuClockRate, usedRamMemory, maxRamMemory, network)

  return <YStack space={'$2'}></YStack>
}

export default HealthInfoSection
