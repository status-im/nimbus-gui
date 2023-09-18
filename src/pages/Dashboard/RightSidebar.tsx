import { IconButton } from '@status-im/components'
import { NodeIcon } from '@status-im/icons'
import { XStack, YStack } from 'tamagui'

const RightSidebar = () => {
  return (
    <YStack
      space={'$4'}
      minHeight={'100vh'}
      background={'#FFF'}
      style={{ padding: '8px', borderTopLeftRadius: '20px' }}
    >
      <IconButton icon={<NodeIcon size={20} />} aria-selected={true} />
    </YStack>
  )
}

export default RightSidebar
