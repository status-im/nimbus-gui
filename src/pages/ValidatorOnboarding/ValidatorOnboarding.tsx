import { YStack } from 'tamagui'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FormStepper from './FormStepper/FormStepper'
import Titles from '../../components/General/Titles'
import Overview from './Overview/Overview'
import KeyGeneration from './KeyGeneration/KeyGeneration'
import Activation from './Activation/Activation'
import ValidatorBoxWrapper from './ValidatorBoxWrapper/ValidatorBoxWrapper'
import ClientSetup from './ClientSetup/ClientSetup'
import ConsensusSelection from './ValidatorSetup/ConsensusSelection'
import Advisories from './Advisories/Advisories'
import ValidatorSetup from './ValidatorSetup/ValidatorSetup'
import ValidatorSetupInstall from './ValidatorSetup/ValidatorInstall'
import ContinueButton from './ContinueButton'
import {
  setIsCopyPastedPhrase,
  setValidWords,
} from '../../redux/ValidatorOnboarding/KeyGeneration/slice'
import { RootState } from '../../redux/store'
import './layoutGradient.css'
import ActivationValidatorSetup from './ValidatorSetup/ActivationValidatorSetup'
import wordlist from 'web-bip39/wordlists/english'

const ValidatorOnboarding = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isConfirmPhraseStage, setIsConfirmPhraseStage] = useState(false)
  const [subStepValidatorSetup, setSubStepValidatorSetup] = useState(0)
  const { isCopyPastedPhrase, words } = useSelector((state: RootState) => state.keyGeneration)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const changeActiveStep = (step: number) => {
    setActiveStep(step)
    removeCopyPastePhraseInfoBox()
    removeConfirmPhraseStage()
  }

  const continueHandler = () => {
    if (activeStep === 4 && isConfirmPhraseStage === false) {
      return setIsConfirmPhraseStage(true)
    } else if (activeStep === 4 && isConfirmPhraseStage === true) {
      const newValidWords = words.map(w => wordlist.includes(w))
      dispatch(setValidWords(newValidWords))

      if (newValidWords.every(w => w === true)) {
        setActiveStep(activeStep + 1)
      } else {
        return
      }
    } else if (activeStep === 3 && subStepValidatorSetup < 3) {
      setSubStepValidatorSetup(subStepValidatorSetup + 1)
    } else if (activeStep < 5) {
      setActiveStep(activeStep + 1)
      if (activeStep === 3 && subStepValidatorSetup === 2) {
        setSubStepValidatorSetup(0)
      }
    } else {
      navigate('/')
    }
    
    removeCopyPastePhraseInfoBox()
    removeConfirmPhraseStage()
  }

  const removeCopyPastePhraseInfoBox = () => {
    if (isCopyPastedPhrase) {
      dispatch(setIsCopyPastedPhrase(false))
    }
  }

  const removeConfirmPhraseStage = () => {
    if (isConfirmPhraseStage) {
      setIsConfirmPhraseStage(false)
    }
  }

  return (
    <div className="gradient-wrapper">
      <YStack
        style={{
          width: '100%',
          margin: '0 auto',
          padding: '2% 10% 4%',
          justifyContent: 'start',
          alignItems: 'start',
        }}
      >
        <Titles
          title="Create Nimbus Validator"
          titleSize={19}
          subtitle="Earn Rewards for securing the Ethereum Network"
        />
        <FormStepper activeStep={activeStep} changeActiveStep={changeActiveStep} />
        <ValidatorBoxWrapper>
          {activeStep === 0 && <Overview />}
          {activeStep === 1 && <Advisories />}
          {activeStep === 2 && <ClientSetup />}

          {activeStep === 3 && subStepValidatorSetup === 0 && <ValidatorSetup />}
          {activeStep === 3 && subStepValidatorSetup === 1 && <ValidatorSetupInstall />}
          {activeStep === 3 && subStepValidatorSetup === 2 && <ConsensusSelection />}
          {activeStep === 3 && subStepValidatorSetup === 3 && <ActivationValidatorSetup />}

          {activeStep === 4 && <KeyGeneration isConfirmPhraseStage={isConfirmPhraseStage} />}
          {activeStep === 5 && <Activation />}
        </ValidatorBoxWrapper>
        <ContinueButton
          activeStep={activeStep}
          continueHandler={continueHandler}
          isConfirmPhraseStage={isConfirmPhraseStage}
        />
      </YStack>
    </div>
  )
}

export default ValidatorOnboarding
