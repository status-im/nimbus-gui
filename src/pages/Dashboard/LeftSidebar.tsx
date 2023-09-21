import { IconButton } from '@status-im/components'
import {
  DashboardIcon,
  SpeedIcon,
  ChartIcon,
  HeartIcon,
  CodeBlockIcon,
  CommunitiesIcon,
  ActivityCenterIcon,
  SettingsIcon,
} from '@status-im/icons'
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
      <IconButton icon={<DashboardIcon size={20} />} variant="ghost" selected />
      <IconButton icon={<SpeedIcon size={20} />} variant="ghost" />
      <IconButton icon={<ChartIcon size={20} />} variant="outline" disabled />
      <IconButton icon={<HeartIcon size={20} />} variant="ghost" />
      <IconButton icon={<CodeBlockIcon size={20} />} variant="ghost" />
      <IconButton icon={<CommunitiesIcon size={20} />} variant="ghost" />
      <IconButton icon={<ActivityCenterIcon size={20} />} variant="ghost" />
      <IconButton icon={<SettingsIcon size={20} />} variant="ghost" />
    </YStack>
  )
}

export default LeftSidebar
