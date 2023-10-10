import { YStack } from 'tamagui'

import { useSelector } from 'react-redux'

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
import { RootState } from '../../redux/store'
import ActivationValidatorSetup from './ValidatorSetup/ValidatorActivation/ActivationValidatorSetup'
import './layoutGradient.css'

const ValidatorOnboarding = () => {
  const { activeStep, subStepValidatorSetup } = useSelector(
    (state: RootState) => state.validatorOnboarding,
  )
  const { isConfirmPhraseStage } = useSelector((state: RootState) => state.keyGeneration)

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
        <FormStepper activeStep={activeStep} />
        <ValidatorBoxWrapper>
          {activeStep === 0 && <Overview />}
          {activeStep === 1 && <Advisories />}
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
        <ContinueButton />
      </YStack>
    </div>
  )
}

export default ValidatorOnboarding
