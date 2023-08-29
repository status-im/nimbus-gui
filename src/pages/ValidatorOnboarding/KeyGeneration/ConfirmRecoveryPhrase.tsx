import { Stack, YStack } from 'tamagui'
import KeyGenerationTitle from './KeyGenerationTitle'
import { Input, Text } from '@status-im/components'
import { useState } from 'react'

const ConfirmRecoveryPhrase = () => {
  const [words, setWords] = useState<string[]>(Array.from({ length: 24 }, () => ''))

  const changeWordHandler = (e: any, index: number) => {
    const newWords = [...words]
    newWords[index] = e.target.value
    setWords(newWords)
  }

  return (
    <YStack space={'$4'} style={{ width: '100%', marginTop: '20px' }}>
      <KeyGenerationTitle />
      <Text size={27}>Confirm Recovery Phrase</Text>
      <Stack style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px 16px' }}>
        {words.map((word, index) => (
          <Input
            key={index}
            icon={
              <Text size={15} color="#0D162566">
                {index + 1}.{' '}
              </Text>
            }
            value={word}
            onChange={e => changeWordHandler(e, index)}
          />
        ))}
      </Stack>
    </YStack>
  )
}

export default ConfirmRecoveryPhrase
