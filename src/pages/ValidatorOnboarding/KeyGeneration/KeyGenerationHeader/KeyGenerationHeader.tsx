import { XStack } from 'tamagui'

import SyncStatusCard from '../../../../components/General/SyncStatusCard'
import KeyGenerationTitle from '../KeyGenerationTitle'

const KeyGenerationHeader = () => {
  return (
    <XStack style={{ width: '100%', justifyContent: 'space-between' }}>
      <KeyGenerationTitle />
      <XStack space={'$2'}>
        <SyncStatusCard
          synced={123.524}
          total={172.503}
          title="Execution Sync Status"
          color="#2a4af5"
        />
        <SyncStatusCard
          synced={123.524}
          total={172.503}
          title="Consensus Sync Status"
          color="#ff6161"
        />
      </XStack>
    </XStack>
  )
}

export default KeyGenerationHeader
