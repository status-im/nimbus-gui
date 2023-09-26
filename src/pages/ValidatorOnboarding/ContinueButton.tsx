import { Stack, YStack } from 'tamagui'
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

const ContinueButton = ({
  continueHandler,
  activeStep,
  isConfirmPhraseStage,
  subStepValidatorSetup,
}: ContinueButton) => {
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

  const isActivationValScreen = activeStep === 3 && subStepValidatorSetup === 3

  return (
    <YStack style={{ width: '100%', alignItems: 'center', zIndex: 999, marginTop: '30px' }}>
      <Stack style={{ width: '100%' }}>
        {isCopyPastedPhrase && (
          <InformationBox
            message="You have copy and pasted the entire Recovery Phrase. Please ensure you have secured it appropriately prior to continuing."
            variant="error"
            icon={<CloseCircleIcon size={20} />}
          />
        )}
        {isActivationValScreen && (
          <LinkWithArrow
            text="Skip to Dashboard"
            to="/dashboard"
            arrowRight={true}
            style={{ fontWeight: 'bold', zIndex: 1000 }}
          />
        )}
      </Stack>
      <Stack
        style={{
          width: '100%',
          zIndex: 999,
          alignItems: 'end',
        }}
      >
        <Button onPress={continueHandler} size={40} disabled={isDisabled()}>
          {activeStep < 5 ? 'Continue' : 'Continue to Dashboard'}
        </Button>
      </Stack>
    </YStack>
  )
}

export default ContinueButton
