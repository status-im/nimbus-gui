import { Stack, YStack } from 'tamagui'
import KeyGenerationTitle from './KeyGenerationTitle'
import { Input, Text } from '@status-im/components'

const ConfirmRecoveryPhrase = () => {
  return (
    <YStack space={'$4'} style={{ width: '100%', marginTop: '20px' }}>
      <KeyGenerationTitle />
      <Text size={27}>Confirm Recovery Phrase</Text>
      <Stack style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px 16px' }}>
        {Array.from({ length: 24 }, (_, index) => (
          <Input key={`input-${index}`} />
        ))}
      </Stack>
    </YStack>
  )
}

export default ConfirmRecoveryPhrase
