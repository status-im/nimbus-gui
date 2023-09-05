import { Stack, XStack, YStack } from 'tamagui'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Button, InformationBox } from '@status-im/components'

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
import './layoutGradient.css'
import { CloseCircleIcon } from '@status-im/icons'

const ValidatorOnboarding = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isConfirmPhraseStage, setIsConfirmPhraseStage] = useState(false)
  const [subStepValidatorSetup, setSubStepValidatorSetup] = useState(0)

  const navigate = useNavigate()

  const changeActiveStep = (step: number) => {
    setActiveStep(step)
  }

  const continueHandler = () => {
    if (activeStep === 4 && isConfirmPhraseStage === false) {
      setIsConfirmPhraseStage(true)
    } else if (activeStep === 3 && subStepValidatorSetup < 2) {
      setSubStepValidatorSetup(subStepValidatorSetup + 1)
    } else if (activeStep < 5) {
      setActiveStep(activeStep + 1)
      if (activeStep === 3 && subStepValidatorSetup === 2) {
        setSubStepValidatorSetup(0)
      }
    } else {
      navigate('/')
    }
  }

  return (
    <div className="gradient-wrapper">
      <YStack
        style={{
          width: '100%',
          margin: '0 auto',
          padding: '2% 10% 1%',
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

          {activeStep === 4 && <KeyGeneration isConfirmPhraseStage={isConfirmPhraseStage} />}
          {activeStep === 5 && <Activation />}
        </ValidatorBoxWrapper>
        <XStack style={{ width: '100%', marginTop: '16px', zIndex: 999, alignItems: 'center' }}>
          <Stack style={{ width: '100%' }}>
            <InformationBox
              message="You have copy and pasted the entire Recovery Phrase. Please ensure you have secured it appropriately prior to continuing."
              variant="error"
              icon={<CloseCircleIcon size={20} />}
            />
          </Stack>
          <Stack style={{ width: '100%', alignItems: 'end', zIndex: 999, position: 'absolute' }}>
            <Button onPress={continueHandler} size={40}>
              {activeStep < 5 ? 'Continue' : 'Continue to Dashboard'}
            </Button>
          </Stack>
        </XStack>
      </YStack>
    </div>
  )
}

export default ValidatorOnboarding
