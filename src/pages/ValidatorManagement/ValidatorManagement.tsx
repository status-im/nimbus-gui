import { XStack } from 'tamagui'

import RightSidebar from '../Dashboard/RightSideBar/RightSidebar'
import LeftSidebar from '../Dashboard/LeftSidebar'
import ValidatorManagementContent from './ValidatorManagementContent'

const ValidatorManagement = () => {
  return (
    <XStack style={{ height: '100vh' }}>
      <LeftSidebar />
      <ValidatorManagementContent />
      <RightSidebar />
    </XStack>
  )
}

export default ValidatorManagement
