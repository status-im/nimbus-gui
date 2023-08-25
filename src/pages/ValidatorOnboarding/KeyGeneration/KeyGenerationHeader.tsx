import { Text } from '@status-im/components'
import { XStack } from 'tamagui'
// import SyncCard from './SyncCard'

const KeyGenerationHeader = () => {
  return (
    <XStack justifyContent="space-between">
      <Text size={27} weight={'semibold'}>
        Key Generation
      </Text>
      <XStack space={'$2'}>
        {/* <SyncCard synced={123.524} total={172.503} />
        <SyncCard synced={123.524} total={172.503} /> */}
      </XStack>
    </XStack>
  )
}

export default KeyGenerationHeader
