import { XStack } from 'tamagui'

import LeftSidebar from '../../components/General/LeftSidebar/LeftSidebar'
import DashboardContent from './DashboardContent'
import RightSidebar from '../../components/General/RightSideBar/RightSidebar'

const Dashboard = () => (
  <XStack style={{ height: '100vh' }}>
    <LeftSidebar />
    <DashboardContent />
    <RightSidebar />
  </XStack>
)

export default Dashboard
