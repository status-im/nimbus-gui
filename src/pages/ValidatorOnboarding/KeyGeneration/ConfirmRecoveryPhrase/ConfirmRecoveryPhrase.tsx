import { YStack } from 'tamagui'
import { Text } from '@status-im/components'
import { useSelector } from 'react-redux'

import AutocompleteInput from './AutocompleteInput'
import KeyGenerationTitle from '../KeyGenerationTitle'
import { RootState } from '../../../../redux/store'
import styles from '../index.module.css'

const ConfirmRecoveryPhrase = () => {
  const { validWords } = useSelector((state: RootState) => state.keyGeneration)

  return (
    <YStack space={'$3'} style={{ width: '100%', marginTop: '20px' }}>
      <KeyGenerationTitle />
      <Text size={19}>Confirm Recovery Phrase</Text>
      <div className={styles['confirm-recovery-phrase']}>
        {validWords.map((_, index) => (
          <AutocompleteInput key={index} index={index} />
        ))}
      </div>
    </YStack>
  )
}

export default ConfirmRecoveryPhrase
