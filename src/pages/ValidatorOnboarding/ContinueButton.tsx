import { Stack, XStack } from 'tamagui'
import { Button, InformationBox } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'

type ContinueButton = {
  continueHandler: () => void
  activeStep: number
}

const ContinueButton = ({ continueHandler, activeStep }: ContinueButton) => {
  const isCopyPastedPhrase = useSelector(
    (state: RootState) => state.keyGeneration.isCopyPastedPhrase,
  )

  return (
    <XStack style={{ width: '100%', marginTop: '16px', zIndex: 999, alignItems: 'center' }}>
      <Stack style={{ width: '100%' }}>
        {isCopyPastedPhrase && (
          <InformationBox
            message="You have copy and pasted the entire Recovery Phrase. Please ensure you have secured it appropriately prior to continuing."
            variant="error"
            icon={<CloseCircleIcon size={20} />}
          />
        )}
      </Stack>
      <Stack
        style={{
          width: '100%',
          alignItems: 'end',
          zIndex: 999,
          position: 'absolute',
          marginTop: isCopyPastedPhrase ? '0px' : '40px',
        }}
      >
        <Button onPress={continueHandler} size={40}>
          {activeStep < 5 ? 'Continue' : 'Continue to Dashboard'}
        </Button>
      </Stack>
    </XStack>
  )
}

export default ContinueButton
