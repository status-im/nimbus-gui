import { Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import { useState } from 'react'

import KeyGenerationHeader from './KeyGenerationHeader'
import RecoveryMechanism from './RecoveryMechanism'
import KeyFiles from './KeyFiles'
import RecoveryPhrase from './RecoveryPhrase'
import { BOTH_KEY_AND_RECOVERY, KEY_FILES, RECOVERY_PHRASE } from '../../../constants'

const KeyGeneration = () => {
  const [recoveryMechanism, setRecoveryMechanism] = useState(KEY_FILES)

  const handleRecMechanismChange = (value: string) => {
    setRecoveryMechanism(value)
  }

  const isKeyFiles = recoveryMechanism === KEY_FILES || recoveryMechanism === BOTH_KEY_AND_RECOVERY

  const isRecoveryPhrase =
    recoveryMechanism === RECOVERY_PHRASE || recoveryMechanism === BOTH_KEY_AND_RECOVERY

  return (
    <YStack space={'$2'} style={{ width: '100%', padding: '16px 32px', alignItems: 'start' }}>
      <KeyGenerationHeader />
      <RecoveryMechanism
        recoveryMechanism={recoveryMechanism}
        handleRecMechanismChange={handleRecMechanismChange}
      />
      <Stack style={{ margin: '30px 0' }}>
        <Text size={27} weight={'semibold'}>
          4 Validators
        </Text>
      </Stack>
      {isKeyFiles && <KeyFiles />}
      {isRecoveryPhrase && <RecoveryPhrase isKeyFiles={isKeyFiles} />}
    </YStack>
  )
}

export default KeyGeneration
