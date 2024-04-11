import { Text } from '@status-im/components'
import { YStack } from 'tamagui'

import RecoveryMechanismCard from './RecoveryMechanismCard'
import {
  BOTH_KEY_AND_RECOVERY,
  KEYSTORE_FILES_OPTION,
  RECOVERY_PHRASE_OPTION,
} from '../../../../constants'
import styles from '../index.module.css'

type RecoveryMechanismProps = {
  recoveryMechanism: string
}

const cards = {
  [RECOVERY_PHRASE_OPTION]: 'recovery-phrase-icon.svg',
  [KEYSTORE_FILES_OPTION]: 'keystore-files-icon.svg',
  [BOTH_KEY_AND_RECOVERY]: 'both-recovery-keystore-icon.svg',
}

const RecoveryMechanism = ({ recoveryMechanism }: RecoveryMechanismProps) => {
  return (
    <YStack style={{ width: '100%' }}>
      <Text size={19} weight={'semibold'}>
        Select Recovery Mechanism
      </Text>
      <div className={styles['recovery-mechanism-container']}>
        {Object.entries(cards).map(([value, icon]) => (
          <RecoveryMechanismCard
            key={value}
            value={value}
            recoveryMechanism={recoveryMechanism}
            icon={icon}
          />
        ))}
      </div>
    </YStack>
  )
}

export default RecoveryMechanism
