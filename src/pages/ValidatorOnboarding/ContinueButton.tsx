import { Stack, XStack } from 'tamagui'
import { Button, InformationBox } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { RootState } from '../../redux/store'
import { setIsRightPhrase } from '../../redux/ValidatorOnboarding/KeyGeneration/slice'
import LinkWithArrow from '../../components/General/LinkWithArrow'

type ContinueButton = {
  continueHandler: () => void
  activeStep: number
  isConfirmPhraseStage: boolean
  subStepValidatorSetup: number
}

const ContinueButton = ({ continueHandler, activeStep, isConfirmPhraseStage, subStepValidatorSetup }: ContinueButton) => {
  console.log(activeStep)
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

  const isActivationScreen = activeStep === 3 && subStepValidatorSetup === 3
  console.log(isActivationScreen)
  return (
    <XStack style={{ width: '100%', marginTop: '16px', zIndex: 999, alignItems: 'center' }}>
      {isCopyPastedPhrase && (
        <Stack style={{ width: '100%' }}>
          <InformationBox
            message="You have copy and pasted the entire Recovery Phrase. Please ensure you have secured it appropriately prior to continuing."
            variant="error"
            icon={<CloseCircleIcon size={20} />}
          />
        </Stack>
      )}
      <XStack
        style={{
          width: '100%',
          zIndex: 999,
          justifyContent: isActivationScreen ? 'space-between' : 'end',
          marginTop: isCopyPastedPhrase ? '0px' : '40px',
        }}
      >
        {isActivationScreen &&

          <LinkWithArrow
            text="Skip to Dashboard"
            to="/"
            arrowRight={true}
            style={{ fontWeight: 'bold' }}
          />
        }

        <Button onPress={continueHandler} size={40} disabled={isDisabled()}>
          {activeStep < 5 ? 'Continue' : 'Continue to Dashboard'}
        </Button>
      </XStack>
    </XStack >
  )
}

export default ContinueButton
