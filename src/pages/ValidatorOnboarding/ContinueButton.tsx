import { Stack, XStack } from 'tamagui'
import { Button, InformationBox } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { RootState } from '../../redux/store'
import LinkWithArrow from '../../components/General/LinkWithArrow'

type ContinueButton = {
  continueHandler: () => void
  activeStep: number
  subStepValidatorSetup: number
}

const ContinueButton = ({ continueHandler, activeStep, subStepValidatorSetup }: ContinueButton) => {
  const [isDisabled, setIsDisabled] = useState(false)
  const { isCopyPastedPhrase, mnemonic, validWords, isConfirmPhraseStage } = useSelector(
    (state: RootState) => state.keyGeneration,
  )
  const isActivationValScreen = activeStep === 3 && subStepValidatorSetup === 3

  useEffect(() => {
    const getDisabledButton = () => {
      if (activeStep === 4 && isConfirmPhraseStage) {
        if (mnemonic.some(word => word === '') || validWords.some(w => w === false)) {
          return false
        }
      }

      return false
    }

    setIsDisabled(getDisabledButton())
  }, [activeStep, subStepValidatorSetup, isConfirmPhraseStage, mnemonic, validWords])

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
      <Button onPress={continueHandler} size={40} disabled={isDisabled}>
        {activeStep < 5 ? 'Continue' : 'Continue to Dashboard'}
      </Button>
    </XStack>
  )
}

export default ContinueButton
