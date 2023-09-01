import { Stack, YStack } from 'tamagui'
import AutocompleteInput from './AutocompleteInput'
import { Text } from '@status-im/components'
import KeyGenerationTitle from './KeyGenerationTitle'

const ConfirmRecoveryPhrase = () => {
  return (
    <YStack space={'$4'} style={{ width: '100%', marginTop: '20px' }}>
      <KeyGenerationTitle />
      <Text size={27}>Confirm Recovery Phrase</Text>
      <Stack
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px 40px',
          width: '80%',
          marginBottom: '20px',
        }}
      >
        {Array.from({ length: 24 }).map((_, index) => (
          <AutocompleteInput key={index} index={index} />
        ))}
      </Stack>
    </YStack>
  )
}

export default ConfirmRecoveryPhrase
