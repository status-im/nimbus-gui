import { XStack } from 'tamagui'

import LeftSidebar from '../../components/General/LeftSidebar/LeftSidebar'
import RightManageSettings from './RightManageSettings/RightManageSettings'
import LeftManageSide from './LeftManageSide/LeftManageSide'

const ManageValidator = () => {
  return (
    <XStack style={{ height: '100vh' }}>
      <LeftSidebar />
      <XStack
        width={'min-content'}
        alignItems="flex-start"
        style={{
          flexGrow: 1,
        }}
      >
        <LeftManageSide />
        <RightManageSettings />
      </XStack>
    </XStack>
  )
}

export default ManageValidator
