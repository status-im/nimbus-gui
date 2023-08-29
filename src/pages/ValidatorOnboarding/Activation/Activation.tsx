import { XStack, Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import Confetti from 'react-confetti'

const Activation = () => {
  return (
    <Stack>
      <Confetti width={1000} height={800} />
      <YStack style={{ width: '100%', padding: '16px 32px' }}>
        <XStack justifyContent={'space-between'} style={{ marginBottom: '10px' }}>
          <Text size={27} weight={'semibold'}>
            Validator Setup
          </Text>
        </XStack>
      </YStack>
    </Stack>
  )
}

export default Activation
