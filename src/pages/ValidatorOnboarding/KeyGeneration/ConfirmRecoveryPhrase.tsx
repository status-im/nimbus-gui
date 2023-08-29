import { YStack } from 'tamagui'
import KeyGenerationTitle from './KeyGenerationTitle'
import { Text } from '@status-im/components'

const ConfirmRecoveryPhrase = () => {
  return (
    <YStack space={'$4'} style={{ width: '100%', marginTop: '20px' }}>
      <KeyGenerationTitle />
      <Text size={27}>Confirm Recovery Phrase</Text>
    </YStack>
  )
}

export default ConfirmRecoveryPhrase
