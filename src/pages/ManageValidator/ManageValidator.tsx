import { XStack } from 'tamagui'
import { Outlet } from 'react-router-dom'

import LeftSidebar from '../../components/General/LeftSidebar/LeftSidebar'
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
        <div style={{ flexGrow: 1 }}>
          <Outlet />
        </div>
      </XStack>
    </XStack>
  )
}

export default ManageValidator
