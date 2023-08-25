import { YStack } from 'tamagui'
import KeyGenerationHeader from './KeyGenerationHeader'

const KeyGeneration = () => {
  return (
    <YStack space={'$2'} style={{ width: '100%', padding: '16px 32px' }}>
      <KeyGenerationHeader />
    </YStack>
  )
}

export default KeyGeneration
