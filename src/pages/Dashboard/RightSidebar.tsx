import { SidebarMembers } from '@status-im/components'
import { YStack } from 'tamagui'

const RightSidebar = () => {
  return (
    <YStack
      space={'$4'}
      minHeight={'100vh'}
      background={'#FFF'}
      style={{ padding: '8px', border: '1px solid #F0F2F5' }}
    >
      <SidebarMembers />
    </YStack>
  )
}

export default RightSidebar
