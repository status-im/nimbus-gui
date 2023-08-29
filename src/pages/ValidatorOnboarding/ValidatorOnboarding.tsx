import { Stack, YStack } from 'tamagui'
import FormStepper from './FormStepper/FormStepper'
import Titles from '../../components/General/Titles'
import { useState } from 'react'
import Overview from './Overview/Overview'
import KeyGeneration from './KeyGeneration/KeyGeneration'
import Advicsories from './Advicsories/Advicsories'
import Activation from './Activation/Activation'
import './layoutGradient.css'
import ValidatorBoxWrapper from './ValidatorBoxWrapper/ValidatorBoxWrapper'
import { Button } from '@status-im/components'
import { useNavigate } from 'react-router-dom'
import ValidatorSetupInstall from './ValidatorSetup/ValidatorInstall'

const ValidatorOnboarding = () => {
  const [activeStep, setActiveStep] = useState(0)
  const navigate = useNavigate()

  const changeActiveStep = (step: number) => {
    setActiveStep(step)
  }

  const continueHandler = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1)
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
          {activeStep === 1 && <Advicsories />}
          {activeStep === 2 && <ValidatorSetupInstall />}
          {activeStep === 3 && <KeyGeneration />}
          {activeStep === 4 && <Activation />}
        </ValidatorBoxWrapper>
        <Stack style={{ alignItems: 'end', width: '100%', marginTop: '16px', zIndex: 999 }}>
          <Button onPress={continueHandler}>
            {activeStep < 4 ? 'Continue' : 'Continue to Dashboard'}
          </Button>
        </Stack>
      </YStack>
    </div>
  )
}

export default ValidatorOnboarding
