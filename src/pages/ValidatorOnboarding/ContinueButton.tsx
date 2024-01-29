import { Stack, XStack } from 'tamagui';
import { Button, InformationBox } from '@status-im/components';
import { CloseCircleIcon } from '@status-im/icons';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import LinkWithArrow from '../../components/General/LinkWithArrow';
import { useWindowSize } from '../../hooks/useWindowSize';

const ContinueButton = () => {
  const windowSize = useWindowSize();
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Derive the active step index based on the current URL
  const pathToStepMap = {
    '/validator-onboarding/overview': 0,
    '/validator-onboarding/advisories': 1,
    '/validator-onboarding/validator-setup': 2,
    '/validator-onboarding/validator-setup-install': 3,
    '/validator-onboarding/consensus-selection': 4,
    '/validator-onboarding/activation-validator-setup': 5,
    '/validator-onboarding/client-setup': 6,
    '/validator-onboarding/key-generation': 7,
    '/validator-onboarding/deposit': 8,
    '/validator-onboarding/activation': 9,
    // Add more mappings as needed
  };

  const activeStep = pathToStepMap[location.pathname] || 0;

  const {
    isCopyPastedPhrase,
    mnemonic,
    validWords,
    isConfirmPhraseStage,
    recoveryMechanism,
    generatedMnemonic,
  } = useSelector((state: RootState) => state.keyGeneration);

  const { isValidatorSet } = useSelector((state: RootState) => state.validatorSetup);

  useEffect(() => {
    const getDisabledButton = () => {
      if (activeStep === 7 && isConfirmPhraseStage) {
        if (
          validWords.some(w => w === false) ||
          generatedMnemonic.some((w, i) => w !== mnemonic[i])
        ) {
          return true;
        }
      } else if (activeStep === 6 && !isValidatorSet) {
        return true;
      }
      return false;
    };

    setIsDisabled(getDisabledButton());
  }, [
    activeStep,
    isConfirmPhraseStage,
    mnemonic,
    validWords,
    isValidatorSet,
  ]);

  const continueHandler = () => {
    // Logic to determine the next path based on activeStep
    // For example, if activeStep is 1 (advisories), navigate to step 2's URL
    let nextPath;
    switch(activeStep) {
      case 0: nextPath = '/validator-onboarding/advisories'; break;
      case 1: nextPath = '/validator-onboarding/validator-setup'; break;
      case 2: nextPath = '/validator-onboarding/validator-setup-install'; break;
      case 3: nextPath = '/validator-onboarding/consensus-selection'; break;
      case 4: nextPath = '/validator-onboarding/activation-validator-setup'; break;
      case 5: nextPath = '/validator-onboarding/client-setup'; break;
      case 6: nextPath = '/validator-onboarding/key-generation'; break;
      case 7: nextPath = '/validator-onboarding/deposit'; break;
      case 8: nextPath = '/validator-onboarding/activation'; break;
      case 9: nextPath = '/dashboard'; break;
      default: nextPath = '/validator-onboarding/overview';
    }

    navigate(nextPath);
  };

  return (
    <XStack
      style={{
        width: '100%',
        justifyContent: windowSize.width < 560 ? 'start' : 'end',
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
      <LinkWithArrow
        text="Skip to Dashboard"
        to="/dashboard"
        arrowRight={true}
        style={{ fontWeight: 'bold', zIndex: 999 }}
      />
      <Button onPress={continueHandler} size={40} disabled={isDisabled}>
        {activeStep < 6 ? 'Continue' : 'Continue to Dashboard'}
      </Button>
    </XStack>
  );
};

export default ContinueButton;
