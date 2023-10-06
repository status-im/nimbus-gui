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
import ConsensusSelection from './ValidatorSetup/ConsensusClient/ConsensusSelection'
import Advisories from './Advisories/Advisories'
import ValidatorSetup from './ValidatorSetup/ValidatorSetup/ValidatorSetup'
import ValidatorSetupInstall from './ValidatorSetup/ValidatorInstalling/ValidatorInstall'
import ContinueButton from './ContinueButton'
import {
  setIsCopyPastedPhrase,
  setValidWords,
} from '../../redux/ValidatorOnboarding/KeyGeneration/slice'
import { RootState } from '../../redux/store'
import './layoutGradient.css'
import ActivationValidatorSetup from './ValidatorSetup/ValidatorActivation/ActivationValidatorSetup'
import wordlist from 'web-bip39/wordlists/english'

const ValidatorOnboarding = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isConfirmPhraseStage, setIsConfirmPhraseStage] = useState(false)
  const [subStepValidatorSetup, setSubStepValidatorSetup] = useState(0)

  const [subStepAdvisories, setSubStepAdvisories] = useState(0)

  const { isCopyPastedPhrase, words } = useSelector((state: RootState) => state.keyGeneration)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isAdvisoriesComplete, setIsAdvisoriesComplete] = useState(false)
  const unicodeNumbers = ['➀', '➁', '➂', '➃', '➄', '➅']
  const advisoriesIcon = unicodeNumbers.map((number, index) =>
    index <= subStepAdvisories ? '✓' : number,
  )

  const changeActiveStep = (step: number) => {
    if (step < activeStep) {
      return setActiveStep(step)
    }
    removeCopyPastePhraseInfoBox()
    removeConfirmPhraseStage()
  }

  const continueHandler = () => {
    if (activeStep === 1 && isAdvisoriesComplete === false) {
      if (subStepAdvisories === 5) {
        setIsAdvisoriesComplete(true)
        setActiveStep(activeStep + 1)
        setSubStepAdvisories(0)
      }
      return setSubStepAdvisories(subStepAdvisories + 1)
    } else if (activeStep === 4 && isConfirmPhraseStage === false) {
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
          maxWidth: '1100px',
          margin: '4rem auto 2rem',
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
          {activeStep === 1 && (
            <Advisories advisoriesIcons={advisoriesIcon} subStepAdvisories={subStepAdvisories} />
          )}
          {activeStep === 2 && <ClientSetup />}

          {activeStep === 3 && subStepValidatorSetup === 0 && <ValidatorSetup />}
          {activeStep === 3 && subStepValidatorSetup === 1 && <ValidatorSetupInstall />}
          {activeStep === 3 && subStepValidatorSetup === 2 && <ConsensusSelection />}
          {activeStep === 3 && subStepValidatorSetup === 3 && <ActivationValidatorSetup />}

          {activeStep === 4 && <KeyGeneration isConfirmPhraseStage={isConfirmPhraseStage} />}
          {activeStep === 5 && (
            <Activation
              validatorsValue="4"
              executionSyncStatus1={{
                text: 'Execution Sync Status',
                isGaugeIncluded: true,
                gaugeColor: '$blue',
                gaugeSynced: 123.524,
                gaugeTotal: 172.503,
              }}
              executionSyncStatus2={{
                text: 'Execution Sync Status',
                isGaugeIncluded: true,
                gaugeColor: '$red',
                gaugeSynced: 123.524,
                gaugeTotal: 172.503,
              }}
              currentAPRValue="4.40%"
              estimatedActivationTimeValue="32 Days"
              validatorQueueValue="92603"
            />
          )}
        </ValidatorBoxWrapper>
        <ContinueButton
          activeStep={activeStep}
          continueHandler={continueHandler}
          isConfirmPhraseStage={isConfirmPhraseStage}
          subStepValidatorSetup={subStepValidatorSetup}
        />
      </YStack>
    </div>
  )
}

export default ValidatorOnboarding
