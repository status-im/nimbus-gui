import { YStack } from 'tamagui'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'
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
import ActivationValidatorSetup from './ValidatorSetup/ValidatorActivation/ActivationValidatorSetup'
import Deposit from './Deposit/Deposit'
import { useWindowSize } from '../../hooks/useWindowSize'
 import styles from './layoutGradient.module.css'

const ValidatorOnboarding = () => {
  const { activeStep, subStepValidatorSetup } = useSelector(
    (state: RootState) => state.validatorOnboarding,
  )
  const windowSize = useWindowSize()

  return (
    <div className={styles.gradientWrapper}>
      <YStack
        style={{
          width: '100%',
          padding: windowSize.width < 1000 ? '5% 2% 3% 2%' : '3% 13% 1% 13%',
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
          {activeStep === 2 && subStepValidatorSetup === 0 && <ValidatorSetup />}
          {activeStep === 2 && subStepValidatorSetup === 1 && <ValidatorSetupInstall />}
          {activeStep === 2 && subStepValidatorSetup === 2 && <ConsensusSelection />}
          {activeStep === 2 && subStepValidatorSetup === 3 && <ActivationValidatorSetup />}
          {activeStep === 3 && <ClientSetup />}
          {activeStep === 4 && <KeyGeneration />}
          {activeStep === 5 && <Deposit />}
          {activeStep === 6 && (
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
