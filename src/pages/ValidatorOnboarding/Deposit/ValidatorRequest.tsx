import { DividerLine, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

const ValidatorRequest = () => {
  return (
    <YStack space={'$3'} style={{ width: '100%' }}>
      <XStack style={{ justifyContent: 'space-between' }}>
        <Text size={13} color="#647084" weight={'semibold'}>
          Keys Generated
        </Text>
        <Text size={13} color="#2F80ED" weight={'semibold'}>
          Requires Deposit
        </Text>
      </XStack>
      <DividerLine />
    </YStack>
  )
}

export default ValidatorRequest
