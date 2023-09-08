import { Stack, XStack } from 'tamagui'
import { Button, InformationBox } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { RootState } from '../../redux/store'
import { setIsRightPhrase } from '../../redux/ValidatorOnboarding/KeyGeneration/slice'

type ContinueButton = {
  continueHandler: () => void
  activeStep: number
  isConfirmPhraseStage: boolean
}

const ContinueButton = ({ continueHandler, activeStep, isConfirmPhraseStage }: ContinueButton) => {
  const { isCopyPastedPhrase, isRightPhrase, words, validWords } = useSelector(
    (state: RootState) => state.keyGeneration,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setIsRightPhrase(words.every(word => word !== '')))
  }, [words])

  const isDisabled = () => {
    if (
      (isConfirmPhraseStage && !isRightPhrase) ||
      (isConfirmPhraseStage && validWords.some(w => w === false))
    ) {
      return true
    }
    return false
  }

  return (
    <XStack style={{ width: '100%', marginTop: '16px', zIndex: 999, alignItems: 'center' }}>
      <Stack style={{ width: '100%' }}>
        {isCopyPastedPhrase && (
          <InformationBox
            message="You have copy and pasted the entire Recovery Phrase. Please ensure you have secured it appropriately prior to continuing."
            variant="error"
            icon={<CloseCircleIcon size={20} />}
          />
        )}
      </Stack>
      <Stack
        style={{
          width: '100%',
          alignItems: 'end',
          zIndex: 999,
          position: 'absolute',
          marginTop: isCopyPastedPhrase ? '0px' : '40px',
        }}
      >
        <Button onPress={continueHandler} size={40} disabled={isDisabled()}>
          {activeStep < 5 ? 'Continue' : 'Continue to Dashboard'}
        </Button>
      </Stack>
    </XStack>
  )
}

export default ContinueButton
