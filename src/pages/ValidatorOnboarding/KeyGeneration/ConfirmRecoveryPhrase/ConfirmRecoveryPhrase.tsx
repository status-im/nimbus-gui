import { Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'

import AutocompleteInput from './AutocompleteInput'
import KeyGenerationTitle from '../KeyGenerationTitle'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsRightPhrase } from '../../../../redux/ValidatorOnboarding/KeyGeneration/slice'
import { RootState } from '../../../../redux/store'

const ConfirmRecoveryPhrase = () => {
  const [validWords, setValidWords] = useState<boolean[]>([])
  const { words } = useSelector((state: RootState) => state.keyGeneration)
  const dispatch = useDispatch()

  useEffect(() => {
    const newValidWords = Array.from({ length: 24 }).map(() => true)
    setValidWords(newValidWords)
  }, [])

  useEffect(() => {
    const isValidWords = validWords.every(isValid => isValid)
    const isFilledWords = words.every(word => word !== '')
    dispatch(setIsRightPhrase(isValidWords && isFilledWords))
  }, [validWords])

  const changeIsValid = (isValid: boolean, index: number) => {
    const newValidWords = [...validWords]
    newValidWords[index] = isValid
    setValidWords(newValidWords)
  }

  return (
    <YStack space={'$4'} style={{ width: '100%', marginTop: '20px' }}>
      <KeyGenerationTitle />
      <Text size={27}>Confirm Recovery Phrase</Text>
      <Stack
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px 40px',
          width: '72%',
          marginBottom: '10px',
        }}
      >
        {Array.from({ length: 24 }).map((_, index) => (
          <AutocompleteInput
            key={index}
            index={index}
            isValid={validWords[index]}
            changeIsValid={changeIsValid}
          />
        ))}
      </Stack>
    </YStack>
  )
}

export default ConfirmRecoveryPhrase
