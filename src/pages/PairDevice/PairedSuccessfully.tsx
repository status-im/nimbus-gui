import { Text } from '@status-im/components'
import { YStack } from 'tamagui'

const PairedSuccessfully = () => {
  return (
    <YStack space={'$2'}>
      <Text size={19} weight={'semibold'}>
        Pair with Command line
      </Text>
      <Text size={11} weight={'semibold'} color="#647084">
        Device Sync Status
      </Text>
      <Text size={15} weight={'semibold'} color="#2A4AF5">
        Paired Successfully! 🥳
      </Text>
    </YStack>
  )
}

export default PairedSuccessfully
