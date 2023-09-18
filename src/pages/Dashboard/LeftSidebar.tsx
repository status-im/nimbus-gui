import { IconButton } from '@status-im/components'
import { NodeIcon } from '@status-im/icons'
import { YStack } from 'tamagui'

const LeftSidebar = () => {
  return (
    <YStack
      space={'$4'}
      minHeight={'100vh'}
      background={'#FFF'}
      style={{
        padding: '8px',
        borderTopLeftRadius: '16px',
        borderBottomLeftRadius: '16px',
        border: '1px solid #F0F2F5',
      }}
    >
      <IconButton icon={<NodeIcon size={20} />} variant="ghost" selected />
      <IconButton icon={<NodeIcon size={20} />} variant="ghost" />
      <IconButton icon={<NodeIcon size={20} />} variant="outline" disabled />
      <IconButton icon={<NodeIcon size={20} />} variant="ghost" />
      <IconButton icon={<NodeIcon size={20} />} variant="ghost" />
      <IconButton icon={<NodeIcon size={20} />} variant="ghost" />
      <IconButton icon={<NodeIcon size={20} />} variant="ghost" />
    </YStack>
  )
}

export default LeftSidebar
