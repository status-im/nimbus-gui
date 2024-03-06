import { XStack } from 'tamagui'

import LeftSidebar from '../../components/General/LeftSidebar/LeftSidebar'
import DashboardContent from './DashboardContent'
import { useWindowSize } from '../../hooks/useWindowSize'
import RightSideBar from '../../components/General/RightSideBar/RightSidebar'

const Dashboard = () => {
  const { width } = useWindowSize()
  return (
    <XStack style={{ height: '100vh' }}>
      <LeftSidebar />
      <DashboardContent />
      {width > 900 && <RightSideBar />}
    </XStack>
  )
}

export default Dashboard
