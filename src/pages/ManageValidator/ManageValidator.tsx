import { Separator, XStack, YStack } from 'tamagui'
import { Outlet } from 'react-router-dom'

import LeftManage from './LeftManage/LeftManage'
import SidebarsWrapper from '../../components/PageWrappers/SidebarsWrapper'
import Breadcrumb from '../../components/General/Breadcrumb/Breadcrumb'

const ManageValidator = () => {
  return (
    <SidebarsWrapper
      isNotRightSidebar={true}
      isNotTopPadding={true}
      isNotRightPadding={true}
      isNotBottomPadding={true}
      isNotLeftPadding={true}
    >
      <YStack style={{ width: '100%' }}>
        <div style={{ padding: '12px 0 12px 16px' }}>
          <Breadcrumb />
        </div>
        <Separator borderColor={'#F0F2F5'} />
        <XStack
          width={'min-content'}
          alignItems="flex-start"
          style={{
            flexGrow: 1,
            width: '100%',
          }}
        >
          <LeftManage />
          <div style={{ flexGrow: 1 }}>
            <Outlet />
          </div>
        </XStack>
      </YStack>
    </SidebarsWrapper>
  )
}

export default ManageValidator
