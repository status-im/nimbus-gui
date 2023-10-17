import { XStack } from 'tamagui'

import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSideBar/RightSidebar'
import DashboardContent from './DashboardContent'

const Dashboard = () => (
  <XStack style={{ height: '100vh' }}>
    <LeftSidebar />
    <DashboardContent />
    <RightSidebar />
  </XStack>
)

export default Dashboard
