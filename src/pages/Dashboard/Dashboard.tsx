import { XStack } from 'tamagui'

import LeftSidebar from '../../components/General/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/General/RightSideBar/RightSidebar'
import DashboardContent from './DashboardContent'

const Dashboard = () => (
  <XStack style={{ height: '100vh' }}>
    <LeftSidebar />
    <DashboardContent />
    <RightSidebar />
  </XStack>
)

export default Dashboard
