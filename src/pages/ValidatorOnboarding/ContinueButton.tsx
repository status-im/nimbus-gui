import { XStack, YStack } from 'tamagui'
import { Button } from '@status-im/components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { RootState } from '../../redux/store'
import LinkWithArrow from '../../components/General/LinkWithArrow'
import { setActiveStep } from '../../redux/ValidatorOnboarding/slice'
import { KEYSTORE_FILES, STEPPER_PATHS } from '../../constants'
import {
  setIsConfirmPhraseStage,
  setIsCopyPastedPhrase,
  setValidWords,
} from '../../redux/ValidatorOnboarding/KeyGeneration/slice'
import { useWindowSize } from '../../hooks/useWindowSize'
import CopyPastedRecoveryPhrase from './CopyPastedRecoveryPhrase'
import BackButton from './ValidatorSetup/BackButton'

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
  dispatch(
    setActiveStep(
      pathToStepMap[location.pathname as keyof typeof pathToStepMap] || 0,
    ),
  )

  const { isValidatorSet } = useSelector(
    (state: RootState) => state.validatorSetup,
  )

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
    let nextPath = STEPPER_PATHS[activeStep] || '/validator-onboarding/'

    if (activeStep === 7) {
      nextPath = isConfirmPhraseStage
        ? '/validator-onboarding/deposit'
        : '/validator-onboarding/key-generation'
      handleRecoveryMechanism()
    }

    navigate(nextPath)
  }

  return (
    <YStack style={{ width: '100%' }}>
      {windowSize.width < 1155 && (
        <CopyPastedRecoveryPhrase isSmallScreen={true} />
      )}
      <XStack
        style={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1000,
          marginTop: '12px',
        }}
      >
        {windowSize.width >= 1155 && <CopyPastedRecoveryPhrase />}
        <BackButton prevPageIndex={activeStep}></BackButton>
        {isActivationValScreen && (
          <LinkWithArrow
            text="Skip to Dashboard"
            to="/dashboard"
            arrowRight={true}
            style={{ fontWeight: 'bold', zIndex: 999 }}
          />
        )}
        <Button onPress={continueHandler} size={40} disabled={isDisabled}>
          {activeStep < 6 ? 'Continue' : 'Continue to Dashboard'}
        </Button>
      </XStack>
    </YStack>
  )
}

export default ContinueButton
