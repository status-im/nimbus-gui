import { XStack } from 'tamagui'

import NimbusLogo from '../../components/Logos/NimbusLogo'
import SyncStatusCard from '../../components/General/SyncStatusCard'

const ManagementHeader = () => {
  return (
    <XStack
      style={{
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <NimbusLogo subtitle="Validator Management" />
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
  )
}

export default ManagementHeader
