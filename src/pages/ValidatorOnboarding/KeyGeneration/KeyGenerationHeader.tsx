import { Text } from '@status-im/components'
import { XStack } from 'tamagui'
import SyncCard from './SyncCard'

const KeyGenerationHeader = () => {
  return (
    <XStack style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
      <Text size={27} weight={'semibold'}>
        Key Generation
      </Text>
      <XStack space={'$2'}>
        <SyncCard synced={123.524} total={172.503} title="Execution Sync Status" />
        <SyncCard synced={123.524} total={172.503} title="Consensus Sync Status" />
      </XStack>
    </XStack>
  )
}

export default KeyGenerationHeader
