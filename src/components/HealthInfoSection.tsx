import { YStack } from 'tamagui'
import StatusIconText from './StatusIconText'
import {
  BAD_CPU_CLOCK_RATE_TEXT,
  BAD_NETWORK_TEXT,
  BAD_RAM_MEMORY_TEXT,
  BAD_STORAGE_TEXT,
  GOOD_CPU_CLOCK_RATE_TEXT,
  GOOD_NETWORK_TEXT,
  GOOD_RAM_MEMORY_TEXT,
  GOOD_STORAGE_TEXT,
} from '../constants'

type HealthInfoSectionProps = {
  usedStorage: number // GB
  maxStorage: number // GB
  usedRamMemory: number // GB
  maxRamMemory: number // GB
  cpuClockRate: number // GHz
  networkLatency: number // milliseconds
}

const HealthInfoSection = (props: HealthInfoSectionProps) => {
  const { usedStorage, maxStorage, usedRamMemory, maxRamMemory, cpuClockRate, networkLatency } =
    props

  const usedStoragePercentage = (usedStorage / maxStorage) * 100
  const usedRamMemoryPercentage = (usedRamMemory / maxRamMemory) * 100
  const cpuClockRatePercentage = cpuClockRate < 2.4 ? 100 : 0
  const networkLatencyPercentage = networkLatency > 100 ? 100 : 0

  return (
    <YStack space={'$2'}>
      <StatusIconText
        percentage={usedStoragePercentage}
        threshold={80}
        goodText={GOOD_STORAGE_TEXT}
        badText={BAD_STORAGE_TEXT}
      />
      <StatusIconText
        percentage={cpuClockRatePercentage}
        threshold={50}
        goodText={GOOD_CPU_CLOCK_RATE_TEXT}
        badText={BAD_CPU_CLOCK_RATE_TEXT}
      />
      <StatusIconText
        percentage={usedRamMemoryPercentage}
        threshold={80}
        goodText={GOOD_RAM_MEMORY_TEXT}
        badText={BAD_RAM_MEMORY_TEXT}
      />
      <StatusIconText
        percentage={networkLatencyPercentage}
        threshold={50}
        goodText={GOOD_NETWORK_TEXT}
        badText={BAD_NETWORK_TEXT}
      />
    </YStack>
  )
}

export default HealthInfoSection
