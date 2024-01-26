import SyncStatusCard from '../../../../components/General/SyncStatusCard'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import KeyGenerationTitle from '../KeyGenerationTitle'
import styles from '../index.module.css'

const KeyGenerationHeader = () => {
  const windowSize = useWindowSize()

  if (windowSize.width <= 0) {
    return null
  }

  return (
    <div className={styles['header']}>
      <KeyGenerationTitle />
      <div
        style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          minWidth: windowSize.width < 771 ? '100%' : '',
        }}
      >
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
