import { YStack } from 'tamagui'
import KeyGenerationHeader from './KeyGenerationHeader'
import RecoveryMechanism from './RecoveryMechanism'
import { Text } from '@status-im/components'
import PasswordFields from './PasswordFields'
import { useState } from 'react'
import RecoveryPhrase from './RecoveryPhrase'

const KeyGeneration = () => {
  const [selectedRecoveryMechanism, setSelectedRecoveryMechanism] = useState('Key Files')

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
      {selectedRecoveryMechanism === 'Key Files' && <PasswordFields />}
      {selectedRecoveryMechanism === 'Recovery Phrase' && <RecoveryPhrase />}
    </YStack>
  )
}

export default KeyGeneration
