import { Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

import RecoveryMechanismCard from './RecoveryMechanismCard'
import { BOTH_KEY_AND_RECOVERY, KEYSTORE_FILES, RECOVERY_PHRASE } from '../../../../constants'

type RecoveryMechanismProps = {
  recoveryMechanism: string
}

const cards = [RECOVERY_PHRASE, KEYSTORE_FILES, BOTH_KEY_AND_RECOVERY]

const RecoveryMechanism = ({ recoveryMechanism }: RecoveryMechanismProps) => {
  return (
    <YStack style={{ width: '100%' }}>
      <Text size={19} weight={'semibold'}>
        Select Recovery Mechanism
      </Text>
      <XStack space={'$4'} style={{ justifyContent: 'space-between', marginTop: '40px' }}>
        {cards.map(value => (
          <RecoveryMechanismCard key={value} value={value} recoveryMechanism={recoveryMechanism} />
        ))}
      </XStack>
    </YStack>
  )
}

export default RecoveryMechanism
