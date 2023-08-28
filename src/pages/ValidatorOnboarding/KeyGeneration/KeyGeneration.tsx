import { YStack } from 'tamagui'
import KeyGenerationHeader from './KeyGenerationHeader'
import RecoveryMechanism from './RecoveryMechanism'
import { Button, InformationBox, Text } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'
import PasswordFields from './PasswordFields'
import { useState } from 'react'

const KeyGeneration = () => {
  const [selectedRecoveryMechanism, setSelectedRecoveryMechanism] = useState('key-files')

  const handleRecoveryMechanismChange = (value: string) => {
    setSelectedRecoveryMechanism(value)
  }

  return (
    <YStack space={'$2'} style={{ width: '100%', padding: '16px 32px', alignItems: 'start' }}>
      <KeyGenerationHeader />
      <RecoveryMechanism
        selectedRecoveryMechanism={selectedRecoveryMechanism}
        handleRecoveryMechanismChange={handleRecoveryMechanismChange}
      />
      <Text size={27} weight={'semibold'}>
        4 Validators
      </Text>
      <PasswordFields />
      <InformationBox
        message="You should see that you have one keystore per validator. This keystore contains your signing key, encrypted with your password. Warning: Do not store keys on multiple (backup) validator clients at once"
        variant="error"
        icon={<CloseCircleIcon size={20} />}
      />
      <Button>Reveal Recovery Phrase</Button>
      <InformationBox
        message="Write down and keep your Secret Recovery Phrase in a secure place. Make sure no one is looking at your screen."
        variant="error"
        icon={<CloseCircleIcon size={20} />}
      />
    </YStack>
  )
}

export default KeyGeneration
