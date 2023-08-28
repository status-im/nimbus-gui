import { YStack } from 'tamagui'
import KeyGenerationHeader from './KeyGenerationHeader'
import RecoveryMechanism from './RecoveryMechanism'

const KeyGeneration = () => {
  return (
    <YStack space={'$2'} style={{ width: '100%', padding: '16px 32px' }}>
      <KeyGenerationHeader />
      <RecoveryMechanism />
    </YStack>
  )
}

export default KeyGeneration
