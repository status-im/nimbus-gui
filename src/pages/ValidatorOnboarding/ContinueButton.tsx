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
import { setSubStepAdvisories } from '../../redux/ValidatorOnboarding/Advisories/slice'

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

  const { activeStep, subStepValidatorSetup } = useSelector(
    (state: RootState) => state.validatorOnboarding,
  )
  const { subStepAdvisories, isValidatorSet } = useSelector((state: RootState) => state.advisories)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isActivationValScreen = activeStep === 3 && subStepValidatorSetup === 3

  useEffect(() => {
    const getDisabledButton = () => {
      if (activeStep === 4 && isConfirmPhraseStage) {
        if (validWords.some(w => w === false)) {
          return false
        }
      }
      return false
    }

    setIsDisabled(getDisabledButton())
  }, [activeStep, subStepValidatorSetup, isConfirmPhraseStage, mnemonic, validWords])

  const handleStep1 = () => {
    if (subStepAdvisories < 5) {
      dispatch(setSubStepAdvisories(subStepAdvisories + 1))
    } else {
      dispatch(setSubStepAdvisories(0))
      dispatch(setActiveStep(activeStep + 1))
    }
  }
  const handleStep3 = () => {
    subStepValidatorSetup < 3
      ? dispatch(setSubStepValidatorSetup(subStepValidatorSetup + 1))
      : dispatch(setSubStepValidatorSetup(0))
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
        setActiveStep(activeStep + 1)
        dispatch(setIsConfirmPhraseStage(false))
        if (isCopyPastedPhrase) {
          dispatch(setIsCopyPastedPhrase(false))
        }
      }
    }
  }

  const continueHandler = () => {
    if (activeStep === 1) {
      handleStep1()
    } else if (activeStep === 3) {
      handleStep3()
    } else if (activeStep === 4) {
      handleStep4()
    } else {
      if (activeStep < 5) {
        dispatch(setActiveStep(activeStep + 1))
      } else {
        navigate('/')
      }
    }
  }

  return (
    <XStack
      style={{
        width: '100%',
        justifyContent: isActivationValScreen ? 'space-between' : 'end',
        alignItems: 'center',
        zIndex: 1000,
        marginTop: '10px',
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
      <Button
        onPress={continueHandler}
        size={40}
        disabled={isDisabled || (isValidatorSet === false && activeStep === 3)}
      >
        {activeStep < 5 ? 'Continue' : 'Continue to Dashboard'}
      </Button>
    </XStack>
  )
}

export default ContinueButton
