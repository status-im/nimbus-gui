import { YStack } from 'tamagui'
import KeyGenerationHeader from './KeyGenerationHeader'
import RecoveryMechanism from './RecoveryMechanism'
import { Text } from '@status-im/components'
import KeyFiles from './KeyFiles'
import { useState } from 'react'
import RecoveryPhrase from './RecoveryPhrase'
import { KEY_FILES, RECOVERY_PHRASE } from '../../../constants'

const KeyGeneration = () => {
  const [selectedRecoveryMechanism, setSelectedRecoveryMechanism] = useState(KEY_FILES)

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
      {selectedRecoveryMechanism === KEY_FILES && <KeyFiles />}
      {selectedRecoveryMechanism === RECOVERY_PHRASE && <RecoveryPhrase />}
    </YStack>
  )
}

export default KeyGeneration
