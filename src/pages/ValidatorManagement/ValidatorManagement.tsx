import { XStack } from 'tamagui'

import RightSidebar from '../Dashboard/RightSideBar/RightSidebar'
import LeftSidebar from '../Dashboard/LeftSidebar'

const ValidatorManagement = () => {
  return (
    <XStack style={{ height: '100vh' }}>
      <LeftSidebar />
      <RightSidebar />
    </XStack>
  )
}

export default ValidatorManagement
