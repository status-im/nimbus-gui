import { XStack } from 'tamagui'

import ValidatorManagementContent from './ValidatorManagementContent'
import LeftSidebar from '../../components/General/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/General/RightSideBar/RightSidebar'
import './validatorManagement.css'

const ValidatorManagement = () => {
  return (
    <XStack style={{ height: '100vh' }}>
      <LeftSidebar />
      <ValidatorManagementContent />
      <div className="right-sidebar-wrapper">
        <RightSidebar />
      </div>
    </XStack>
  )
}

export default ValidatorManagement
