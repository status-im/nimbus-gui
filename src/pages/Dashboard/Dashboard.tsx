import { XStack } from 'tamagui'

import LeftSidebar from '../../components/General/LeftSidebar/LeftSidebar'
import DashboardContent from './DashboardContent'
import { useWindowSize } from '../../hooks/useWindowSize'
import DashboardSidebar from './DashboardSidebar/DashboardSidebar'

const Dashboard = () => {
  const { width } = useWindowSize()
  return (
    <XStack style={{ height: '100vh' }}>
      <LeftSidebar />
      <DashboardContent />
      {width > 900 && <DashboardSidebar />}
    </XStack>
  )
}

export default Dashboard
