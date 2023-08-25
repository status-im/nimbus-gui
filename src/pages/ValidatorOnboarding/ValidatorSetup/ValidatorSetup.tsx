import { YStack } from 'tamagui'
import PairedDeviceCard from './PairedDeviceCard'
import { XStack } from 'tamagui'
import { Text } from '@status-im/components'

const ValidatorSetup = () => {
  return (
    <YStack style={{ width: '100%' }}>
      <XStack justifyContent={'space-between'}>
        <Text size={27} weight={'semibold'}>
          Validator Setup
        </Text>
        <PairedDeviceCard />
      </XStack>
    </YStack>
  )
}

export default ValidatorSetup
