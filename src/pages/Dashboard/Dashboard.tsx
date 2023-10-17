import { XStack } from 'tamagui'

import LeftSidebar from './LeftSidebar/LeftSidebar'
import DashboardContent from './DashboardContent'
import RightSidebar from './RightSideBar/RightSidebar'

const Dashboard = () => (
  <XStack style={{ height: '100vh' }}>
    <LeftSidebar />
    <DashboardContent />
    <RightSidebar />
  </XStack>
)

export default Dashboard
