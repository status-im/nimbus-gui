import { XStack, YStack } from 'tamagui'
import { Button } from '@status-im/components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { RootState } from '../../redux/store'
import LinkWithArrow from '../../components/General/LinkWithArrow'
import {
  setActiveStep,
  setSubStepValidatorSetup,
} from '../../redux/ValidatorOnboarding/slice'
import { KEYSTORE_FILES } from '../../constants'
import {
  setIsConfirmPhraseStage,
  setIsCopyPastedPhrase,
  setValidWords,
} from '../../redux/ValidatorOnboarding/KeyGeneration/slice'
import { useWindowSize } from '../../hooks/useWindowSize'
import CopyPastedRecoveryPhrase from './CopyPastedRecoveryPhrase'

const ContinueButton = () => {
  const [isDisabled, setIsDisabled] = useState(false)
  const {
    isCopyPastedPhrase,
    mnemonic,
    validWords,
    isConfirmPhraseStage,
    recoveryMechanism,
    generatedMnemonic,
  } = useSelector((state: RootState) => state.keyGeneration)
  const windowSize = useWindowSize()

  const { activeStep, subStepValidatorSetup } = useSelector(
    (state: RootState) => state.validatorOnboarding,
  )
  const { isValidatorSet } = useSelector(
    (state: RootState) => state.validatorSetup,
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isActivationValScreen = activeStep === 3 && subStepValidatorSetup === 3

  useEffect(() => {
    const getDisabledButton = () => {
      if (activeStep === 4 && isConfirmPhraseStage) {
        if (
          validWords.some(w => w === false) ||
          generatedMnemonic.some((w, i) => w !== mnemonic[i])
        ) {
          return true
        }
      } else if (activeStep === 3 && !isValidatorSet) {
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

  const handleStep1 = () => {
    dispatch(setActiveStep(activeStep + 1))
  }

  const handleStep2 = () => {
    if (subStepValidatorSetup === 3) {
      return dispatch(setActiveStep(activeStep + 1))
    }
    dispatch(setSubStepValidatorSetup(subStepValidatorSetup + 1))
  }

  const handleStep4 = () => {
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
    if (activeStep === 1) {
      handleStep1()
    } else if (activeStep === 2) {
      handleStep2()
    } else if (activeStep === 4) {
      handleStep4()
    } else {
      if (activeStep < 6) {
        dispatch(setActiveStep(activeStep + 1))
      } else {
        navigate('/dashboard')
      }
    }
  }

  return (
    <YStack style={{ width: '100%' }}>
      {windowSize.width < 1155 && <CopyPastedRecoveryPhrase isSmallScreen={true} />}
      <XStack
        style={{
          width: '100%',
          justifyContent: isActivationValScreen ? 'space-between' : 'end',
          alignItems: 'center',
          zIndex: 1000,
          marginTop: '12px',
        }}
      >
        {windowSize.width >= 1155 && <CopyPastedRecoveryPhrase />}
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
