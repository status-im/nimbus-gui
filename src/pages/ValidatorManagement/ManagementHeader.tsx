import NimbusLogo from '../../components/Logos/NimbusLogo'
import SyncStatusCard from '../../components/General/SyncStatusCard'
import { useWindowSize } from '../../hooks/useWindowSize'

const ManagementHeader = () => {
  const windowSize = useWindowSize()

  return (
    <div
      style={{
        width: '100%',
        justifyContent: 'space-between',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
      }}
    >
      <NimbusLogo subtitle="Validator Management" />
      <div
        style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          minWidth: windowSize.width < 790 ? '100%' : '',
          flexDirection: windowSize.width < 550 ? 'column' : 'row',
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

export default ManagementHeader
