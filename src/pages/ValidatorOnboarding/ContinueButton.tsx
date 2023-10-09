import { Stack, YStack } from 'tamagui'
import { Button, InformationBox } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'
import LinkWithArrow from '../../components/General/LinkWithArrow'

type ContinueButton = {
  continueHandler: () => void
  activeStep: number
  isConfirmPhraseStage: boolean
  subStepValidatorSetup: number
}

const ContinueButton = ({
  continueHandler,
  activeStep,
  isConfirmPhraseStage,
  subStepValidatorSetup,
}: ContinueButton) => {
  const { isCopyPastedPhrase, words, validWords } = useSelector(
    (state: RootState) => state.keyGeneration,
  )
  const { isWalletConnected } = useSelector((state: RootState) => state.deposit)

  const isActivationValidatorScreen = activeStep === 3 && subStepValidatorSetup === 3

  const isDisabled = () => {
    const isDepositWalletConnected = isWalletConnected === false && activeStep === 5
    let isEmptyPhrase = false
    let isNotValidWords = false

    if (isConfirmPhraseStage) {
      isEmptyPhrase = words.some(word => word === '')
      isNotValidWords = validWords.every(word => word === false)
    }

    if (isEmptyPhrase || isNotValidWords || isDepositWalletConnected) {
      return true
    }
    return false
  }

  return (
    <YStack style={{ width: '100%', alignItems: 'center', zIndex: 999, marginTop: '30px' }}>
      <Stack style={{ width: '100%' }}>
        {isCopyPastedPhrase && (
          <InformationBox
            message="You have copy and pasted the entire Recovery Phrase. Please ensure you have secured it appropriately prior to continuing."
            variant="error"
            icon={<CloseCircleIcon size={20} />}
          />
        )}
        {isActivationValidatorScreen && (
          <LinkWithArrow
            text="Skip to Dashboard"
            to="/"
            arrowRight={true}
            style={{ fontWeight: 'bold', zIndex: 1000 }}
          />
        )}
      </Stack>
      <Stack
        style={{
          width: '100%',
          zIndex: 999,
          alignItems: 'end',
        }}
      >
        <Button onPress={continueHandler} size={40} disabled={isDisabled()}>
          {activeStep < 6 ? 'Continue' : 'Continue to Dashboard'}
        </Button>
      </Stack>
    </YStack>
  )
}

export default ContinueButton
