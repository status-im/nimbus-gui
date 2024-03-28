import { XStack } from 'tamagui'
import { Outlet } from 'react-router-dom'

import LeftManage from './LeftManage/LeftManage'
import SidebarsWrapper from '../../components/PageWrappers/SidebarsWrapper'

const ManageValidator = () => {
  return (
    <SidebarsWrapper isNotRightSideBar={true}>
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
    </SidebarsWrapper>
  )
}

export default ManageValidator
