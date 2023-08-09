import { YStack } from 'tamagui'
import { useEffect, useState } from 'react'

// Add more constant texts
const BAD_STORAGE_TEXT = 'Your storage is running low as required for additional node services.'
const CPU_CLOCK_RATE_TEXT = '2.4GHz is recommended for CPU.'
const GOOD_RAM_MEMORY_TEXT = 'There is sufficient RAM required for selected services.'
const NETWORK_TEXT = 'Network Latency is low.'

type HealthInfoSectionProps = {
  usedStorage: number
  maxStorage: number
  usedRamMemory: number
  maxRamMemory: number
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

  return <YStack space={'$2'}></YStack>
}

export default HealthInfoSection
