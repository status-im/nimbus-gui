import { Stack, XStack } from 'tamagui'
import { Button, InformationBox } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { RootState } from '../../redux/store'
import LinkWithArrow from '../../components/General/LinkWithArrow'
import { setActiveStep, setSubStepValidatorSetup } from '../../redux/ValidatorOnboarding/slice'
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

  const stepToPathMap: (string | string[])[] = [
    '/validator-onboarding/overview',
    '/validator-onboarding/advisories',
    [
      '/validator-onboarding/validator-setup',
      '/validator-onboarding/validator-setup-install',
      '/validator-onboarding/consensus-selection',
      '/validator-onboarding/activation-validator-setup',
    ],
    '/validator-onboarding/client-setup',
    '/validator-onboarding/key-generation',
    '/validator-onboarding/deposit',
    '/dashboard',
  ]
  const { activeStep, subStepValidatorSetup } = useSelector(
    (state: RootState) => state.validatorOnboarding,
  )
  const { isValidatorSet } = useSelector((state: RootState) => state.validatorSetup)

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
      const newValidWords = mnemonic.map((w, index) => generatedMnemonic[index] === w)
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
    let nextPath: string

    if (activeStep === 2) {
      const paths = stepToPathMap[activeStep]
      if (Array.isArray(paths)) {
        nextPath = paths[subStepValidatorSetup + 1] || '/dashboard'
      } else {
        nextPath = '/dashboard'
      }
    } else {
      const path = stepToPathMap[activeStep + 1]
      nextPath = typeof path === 'string' ? path : '/dashboard'
    }

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
        {activeStep < 6 ? 'Continue' : 'Continue to Dashboard'}
      </Button>
    </XStack>
  )
}

export default ContinueButton
