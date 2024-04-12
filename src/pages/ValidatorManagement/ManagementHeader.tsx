import { XStack } from 'tamagui'

import NimbusLogo from '../../components/Logos/NimbusLogo'
import SyncStatusCard from '../../components/General/SyncStatusCard'
import styles from './validatorManagement.module.css'

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
      <XStack space={'$2'}>
        <div className={styles['sync-status-card-container-first']}>
          <SyncStatusCard
            synced={123.524}
            total={172.503}
            title="Execution Sync Status"
            color="#2a4af5"
          />
        </div>
        <div className={styles['sync-status-card-container-second']}>
          <SyncStatusCard
            synced={123.524}
            total={172.503}
            title="Consensus Sync Status"
            color="#ff6161"
          />
        </div>
      </XStack>
    </XStack>
  )
}

export default ManagementHeader
