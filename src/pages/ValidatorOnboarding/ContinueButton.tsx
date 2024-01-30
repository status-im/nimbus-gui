import { Stack, XStack } from 'tamagui'
import { Button, InformationBox } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { RootState } from '../../redux/store'
import LinkWithArrow from '../../components/General/LinkWithArrow'
import { setActiveStep } from '../../redux/ValidatorOnboarding/slice'
import { KEYSTORE_FILES } from '../../constants'
import {
  setIsConfirmPhraseStage,
  setIsCopyPastedPhrase,
  setValidWords,
} from '../../redux/ValidatorOnboarding/KeyGeneration/slice'
import { useWindowSize } from '../../hooks/useWindowSize'

const ContinueButton = () => {
  const windowSize = useWindowSize()
  const [isDisabled, setIsDisabled] = useState(false)
  const {
    isCopyPastedPhrase,
    mnemonic,
    validWords,
    isConfirmPhraseStage,
    recoveryMechanism,
    generatedMnemonic,
  } = useSelector((state: RootState) => state.keyGeneration)

  const { activeStep, subStepValidatorSetup } = useSelector(
    (state: RootState) => state.validatorOnboarding,
  )
  const dispatch = useDispatch()

  const pathToStepMap = {
    '/validator-onboarding/': 0,
    '/validator-onboarding/advisories': 1,
    '/validator-onboarding/validator-setup': 2,
    '/validator-onboarding/validator-setup-install': 3,
    '/validator-onboarding/consensus-selection': 4,
    '/validator-onboarding/activation-validator-setup': 5,
    '/validator-onboarding/client-setup': 6,
    '/validator-onboarding/key-generation': 7,
    '/validator-onboarding/deposit': 8,
    '/validator-onboarding/activation': 9,
  }
  dispatch(setActiveStep(pathToStepMap[location.pathname as keyof typeof pathToStepMap] || 0))

  const { isValidatorSet } = useSelector((state: RootState) => state.validatorSetup)

  const navigate = useNavigate()

  const isActivationValScreen = activeStep === 5

  useEffect(() => {
    const getDisabledButton = () => {
      if (activeStep === 7 && isConfirmPhraseStage) {
        if (
          validWords.some(w => w === false) ||
          generatedMnemonic.some((w, i) => w !== mnemonic[i])
        ) {
          return true
        }
      } else if (activeStep === 6 && !isValidatorSet) {
        return true
      }
      return false
    }

    setIsDisabled(getDisabledButton())
  }, [
    activeStep,
    subStepValidatorSetup,
    isConfirmPhraseStage,
    mnemonic,
    validWords,
    isValidatorSet,
  ])

  const handleRecoveryMechanism = () => {
    if (!isConfirmPhraseStage && recoveryMechanism === KEYSTORE_FILES) {
      return dispatch(setActiveStep(activeStep + 1))
    }
    if (!isConfirmPhraseStage) {
      return dispatch(setIsConfirmPhraseStage(true))
    }

    if (isConfirmPhraseStage) {
      const newValidWords = mnemonic.map(
        (w, index) => generatedMnemonic[index] === w,
      )
      dispatch(setValidWords(newValidWords))

      if (!newValidWords.includes(false)) {
        dispatch(setActiveStep(activeStep + 1))
        if (isCopyPastedPhrase) {
          dispatch(setIsCopyPastedPhrase(false))
        }
      }
    }
  }

  const continueHandler = () => {
    let nextPath
    if (activeStep === 0) nextPath = '/validator-onboarding/advisories'
    else if (activeStep === 1) nextPath = '/validator-onboarding/validator-setup'
    else if (activeStep === 2) nextPath = '/validator-onboarding/validator-setup-install'
    else if (activeStep === 3) nextPath = '/validator-onboarding/consensus-selection'
    else if (activeStep === 4) nextPath = '/validator-onboarding/activation-validator-setup'
    else if (activeStep === 5) {
      nextPath = '/validator-onboarding/client-setup'
    } else if (activeStep === 6) {
      nextPath = '/validator-onboarding/key-generation'
    } else if (activeStep === 7) {
      if (isConfirmPhraseStage) {
        nextPath = '/validator-onboarding/deposit'
      } else {
        nextPath = '/validator-onboarding/key-generation'
      }
      handleRecoveryMechanism()
    } else if (activeStep === 8) nextPath = '/validator-onboarding/activation'
    else if (activeStep === 9) nextPath = '/dashboard'
    else nextPath = '/validator-onboarding/'

    navigate(nextPath)
  }

  return (
    <XStack
      style={{
        width: '100%',
        justifyContent: isActivationValScreen
          ? 'space-between'
          : windowSize.width < 560
          ? 'start'
          : 'end',
        alignItems: 'center',
        zIndex: 1000,
        marginTop: '21px',
      }}
    >
      {isCopyPastedPhrase && (
        <Stack style={{ width: '100%', position: 'absolute' }}>
          <InformationBox
            message="You have copy and pasted the entire Recovery Phrase. Please ensure you have secured it appropriately prior to continuing."
            variant="error"
            icon={<CloseCircleIcon size={20} />}
          />
        </Stack>
      )}
      {isActivationValScreen && (
        <LinkWithArrow
          text="Skip to Dashboard"
          to="/dashboard"
          arrowRight={true}
          style={{ fontWeight: 'bold', zIndex: 999 }}
        />
      )}
      <Button onPress={continueHandler} size={40} disabled={isDisabled}>
        {activeStep < 9 ? 'Continue' : 'Continue to Dashboard'}
      </Button>
    </XStack>
  )
}

export default ContinueButton
