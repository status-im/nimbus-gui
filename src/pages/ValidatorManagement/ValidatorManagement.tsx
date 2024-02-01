import { XStack } from 'tamagui'

import ValidatorManagementContent from './ValidatorManagementContent'
import LeftSidebar from '../../components/General/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/General/RightSideBar/RightSidebar'
import styles from './validatorManagement.module.css'

import ManageValidator from './ManageValidator/ManageValidator'

const ValidatorManagement = () => {
  const isValidatorOpen = true

  return (
    <XStack style={{ height: '100vh' }}>
      <LeftSidebar />
      {isValidatorOpen ? <ManageValidator /> : <ValidatorManagementContent />}
      {!isValidatorOpen && (
        <div className={styles['right-sidebar-wrapper']}>
          <RightSidebar />
        </div>
      )}
    </XStack>
  )
}

export default ValidatorManagement
