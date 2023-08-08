import { YStack } from 'tamagui'

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
