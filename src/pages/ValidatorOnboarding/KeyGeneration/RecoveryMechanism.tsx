import { Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
import RecoveryMechanismCard from './RecoveryMechanismCard'
import { BOTH_KEY_AND_RECOVERY, KEY_FILES, RECOVERY_PHRASE } from '../../../constants'

type RecoveryMechanismProps = {
  recoveryMechanism: string
  handleRecMechanismChange: (value: string) => void
}

const RecoveryMechanism = ({
  recoveryMechanism,
  handleRecMechanismChange,
}: RecoveryMechanismProps) => {
  return (
    <YStack style={{ width: '100%' }}>
      <Text size={19} weight={'semibold'}>
        Select Recovery Mechanism
      </Text>
      <XStack space={'$4'} style={{ justifyContent: 'space-between', marginTop: '40px' }}>
        <RecoveryMechanismCard
          value={KEY_FILES}
          recoveryMechanism={recoveryMechanism}
          handleRecMechanismChange={handleRecMechanismChange}
        />
        <RecoveryMechanismCard
          value={RECOVERY_PHRASE}
          recoveryMechanism={recoveryMechanism}
          handleRecMechanismChange={handleRecMechanismChange}
        />
        <RecoveryMechanismCard
          value={BOTH_KEY_AND_RECOVERY}
          recoveryMechanism={recoveryMechanism}
          handleRecMechanismChange={handleRecMechanismChange}
        />
      </XStack>
    </YStack>
  )
}

export default RecoveryMechanism
