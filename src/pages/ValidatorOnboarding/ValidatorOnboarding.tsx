import { YStack } from 'tamagui'
import FormStepper from './FormStepper/FormStepper'
import PageWrapperGradient from '../../components/PageWrappers/PageWrapperGradient'
import Titles from '../../components/General/Titles'
import { useState } from 'react'
import Overview from './Overview/Overview'
import KeyGeneration from './KeyGeneration/KeyGeneration'
import Advicsories from './Advicsories/Advicsories'
import ValidatorSetup from './ValidatorSetup/ValidatorSetup'
import Activation from './Activation/Activation'

const ValidatorOnboarding = () => {
  const [activeStep, setActiveStep] = useState(0)

  const changeActiveStep = (step: number) => {
    setActiveStep(step)
  }

  return (
    <PageWrapperGradient>
      <YStack
        style={{
          width: '100%',
          margin: '0 auto',
          padding: '2% 10%',
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
        {activeStep === 0 && <Overview />}
        {activeStep === 1 && <Advicsories />}
        {activeStep === 2 && <ValidatorSetup />}
        {activeStep === 3 && <KeyGeneration />}
        {activeStep === 4 && <Activation />}
      </YStack>
    </PageWrapperGradient>
  )
}

export default ValidatorOnboarding
