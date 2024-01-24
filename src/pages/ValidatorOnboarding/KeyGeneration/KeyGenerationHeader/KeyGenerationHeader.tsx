import SyncStatusCard from '../../../../components/General/SyncStatusCard'
import KeyGenerationTitle from '../KeyGenerationTitle'
import styles from '../index.module.css'

const KeyGenerationHeader = () => {
  return (
    <div className={styles['header']}>
      <KeyGenerationTitle />
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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

export default KeyGenerationHeader
