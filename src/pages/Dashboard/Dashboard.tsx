import { XStack } from 'tamagui'

import LeftSidebar from '../../components/General/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/General/RightSideBar/RightSidebar'
import DashboardContent from './DashboardContent'
import { useEffect, useState } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'

const Dashboard = () => {
  const { width } = useWindowSize()
  return (
    <XStack style={{ height: '100vh' }}>
      <LeftSidebar />
      <DashboardContent />
      {width > 900 && <RightSidebar />}
    </XStack>
  )
}

export default Dashboard
