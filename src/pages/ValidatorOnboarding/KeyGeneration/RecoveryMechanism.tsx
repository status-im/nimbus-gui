import { Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
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
    <YStack style={{ width: '100%' }}>
      <Text size={19} weight={'semibold'}>
        Select Recovery Mechanism
      </Text>
      <XStack space={'$4'} style={{ justifyContent: 'space-between', marginTop: '40px' }}>
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
    </YStack>
  )
}

export default RecoveryMechanism
