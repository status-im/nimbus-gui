import NimbusLogo from '../../components/Logos/NimbusLogo'
import SyncStatusCard from '../../components/General/SyncStatusCard'
import styles from './validatorManagement.module.css'

const ManagementHeader = () => {
  return (
    <div className={styles['header-container']}>
      <NimbusLogo subtitle="Validator Management" />
      <div className={styles['sync-status-cards-container']}>
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
      </div>
    </div>
  )
}

export default ManagementHeader
