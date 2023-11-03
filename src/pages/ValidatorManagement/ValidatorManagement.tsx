import { XStack } from 'tamagui'

import ValidatorManagementContent from './ValidatorManagementContent'
import LeftSidebar from '../../components/General/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/General/RightSideBar/RightSidebar'

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
