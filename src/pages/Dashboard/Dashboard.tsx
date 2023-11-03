import { XStack } from 'tamagui'

import LeftSidebar from '../../components/General/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/General/RightSideBar/RightSidebar'
import DashboardContent from './DashboardContent'
import { useEffect, useState } from 'react'

const Dashboard = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(+window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <XStack style={{ height: '100vh' }}>
      {windowWidth > 900 && <LeftSidebar />}

      <DashboardContent windowWidth={windowWidth} />
      {windowWidth > 900 && <RightSidebar />}
    </XStack>
  )
}

export default Dashboard
