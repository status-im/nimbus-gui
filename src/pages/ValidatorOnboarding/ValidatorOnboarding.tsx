import { Stack, YStack } from 'tamagui'
import FormStepper from './FormStepper/FormStepper'
import Titles from '../../components/General/Titles'
import { useState } from 'react'
import Overview from './Overview/Overview'
import KeyGeneration from './KeyGeneration/KeyGeneration'
import Advicsories from './Advicsories/Advicsories'
import ValidatorSetup from './ValidatorSetup/ValidatorSetup'
import Activation from './Activation/Activation'
import './layoutGradient.css'
import ValidatorBoxWrapper from './ValidatorBoxWrapper/ValidatorBoxWrapper'
import { Button } from '@status-im/components'

const ValidatorOnboarding = () => {
  const [activeStep, setActiveStep] = useState(0)

  const changeActiveStep = (step: number) => {
    setActiveStep(step)
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
          {activeStep === 2 && <ValidatorSetup />}
          {activeStep === 3 && <KeyGeneration />}
          {activeStep === 4 && <Activation />}
        </ValidatorBoxWrapper>
        <Stack style={{ alignItems: 'end', width: '100%', marginTop: '16px', zIndex: 999 }}>
          <Button>Continue</Button>
        </Stack>
      </YStack>
    </div>
  )
}

export default ValidatorOnboarding
