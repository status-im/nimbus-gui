import { Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
import RecoveryMechanismCard from './RecoveryMechanismCard'
import { BOTH_KEY_AND_RECOVERY, KEY_FILES, RECOVERY_PHRASE } from '../../../constants'

type RecoveryMechanismProps = {
  selectedRecoveryMechanism: string
  handleRecoveryMechanismChange: (value: string) => void
}

const RecoveryMechanism = ({
  selectedRecoveryMechanism,
  handleRecoveryMechanismChange,
}: RecoveryMechanismProps) => {
  return (
    <YStack style={{ width: '100%' }}>
      <Text size={19} weight={'semibold'}>
        Select Recovery Mechanism
      </Text>
      <XStack space={'$4'} style={{ justifyContent: 'space-between', marginTop: '40px' }}>
        <RecoveryMechanismCard
          value={KEY_FILES}
          selectedRecoveryMechanism={selectedRecoveryMechanism}
          handleRecoveryMechanismChange={handleRecoveryMechanismChange}
        />
        <RecoveryMechanismCard
          value={RECOVERY_PHRASE}
          selectedRecoveryMechanism={selectedRecoveryMechanism}
          handleRecoveryMechanismChange={handleRecoveryMechanismChange}
        />
        <RecoveryMechanismCard
          value={BOTH_KEY_AND_RECOVERY}
          selectedRecoveryMechanism={selectedRecoveryMechanism}
          handleRecoveryMechanismChange={handleRecoveryMechanismChange}
        />
      </XStack>
    </YStack>
  )
}

export default RecoveryMechanism
