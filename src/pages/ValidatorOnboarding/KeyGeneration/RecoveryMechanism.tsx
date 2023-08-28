import { Text } from '@status-im/components'
import { XStack } from 'tamagui'
import RecoveryMechanismCard from './RecoveryMechanismCard'

type RecoveryMechanismProps = {
  selectedRecoveryMechanism: string
  handleRecoveryMechanismChange: (value: string) => void
}

const RecoveryMechanism = ({
  selectedRecoveryMechanism,
  handleRecoveryMechanismChange,
}: RecoveryMechanismProps) => {
  return (
    <XStack style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
      <Text size={19} weight={'semibold'}>
        Select Recovery Mechanism
      </Text>
      <XStack space={'$1'}>
        <RecoveryMechanismCard
          value="Key Files"
          selectedRecoveryMechanism={selectedRecoveryMechanism}
          handleRecoveryMechanismChange={handleRecoveryMechanismChange}
        />
        <RecoveryMechanismCard
          value="Recovery Phrase"
          selectedRecoveryMechanism={selectedRecoveryMechanism}
          handleRecoveryMechanismChange={handleRecoveryMechanismChange}
        />
        <RecoveryMechanismCard
          value="Both Key Files & Recovery Phrase"
          selectedRecoveryMechanism={selectedRecoveryMechanism}
          handleRecoveryMechanismChange={handleRecoveryMechanismChange}
        />
      </XStack>
    </XStack>
  )
}

export default RecoveryMechanism
