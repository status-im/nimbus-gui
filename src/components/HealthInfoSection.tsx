import { YStack } from 'tamagui'
import { useEffect, useState } from 'react'
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
  const { usedStorage, maxStorage, usedRamMemory, maxRamMemory } = props

  const [usedStoragePercentage, setUsedStoragePercentage] = useState(0)
  const [usedRamMemoryPercentage, setUsedRamMemoryPercentage] = useState(0)

  useEffect(() => {
    setUsedStoragePercentage((usedStorage / maxStorage) * 100)
  }, [usedStorage, maxStorage])

  useEffect(() => {
    setUsedRamMemoryPercentage((usedRamMemory / maxRamMemory) * 100)
  }, [usedRamMemory, maxRamMemory])

  return (
    <YStack space={'$2'}>
      <StatusIconText
        percentage={usedStoragePercentage}
        threshold={80}
        goodText={GOOD_STORAGE_TEXT}
        badText={BAD_STORAGE_TEXT}
      />
      <StatusIconText
        percentage={usedStoragePercentage}
        threshold={80}
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
        percentage={usedStoragePercentage}
        threshold={80}
        goodText={GOOD_NETWORK_TEXT}
        badText={BAD_NETWORK_TEXT}
      />
    </YStack>
  )
}

export default HealthInfoSection
