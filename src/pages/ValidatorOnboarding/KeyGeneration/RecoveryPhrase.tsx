import { YStack } from 'tamagui'
import { Button, InformationBox } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'

const RecoveryPhrase = () => {
  return (
    <YStack space={'$2'}>
      <Button>Reveal Recovery Phrase</Button>
      <InformationBox
        message="Write down and keep your Secret Recovery Phrase in a secure place. Make sure no one is looking at your screen."
        variant="error"
        icon={<CloseCircleIcon size={20} />}
      />
    </YStack>
  )
}

export default RecoveryPhrase
