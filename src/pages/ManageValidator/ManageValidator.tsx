import { XStack } from 'tamagui'

import LeftSidebar from '../../components/General/LeftSidebar/LeftSidebar'
import RightManage from './RightManage/RightManage'
import LeftManage from './LeftManage/LeftManage'

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
        <LeftManage />
        <RightManage />
      </XStack>
    </XStack>
  )
}

export default ManageValidator
