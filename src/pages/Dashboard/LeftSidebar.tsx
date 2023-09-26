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
import { Stack, YStack } from 'tamagui'

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
      <Stack style={{ position: 'relative', display: 'inline-block' }}>
        <IconButton icon={<ActivityCenterIcon size={20} />} variant="ghost" />
        <Stack style={{
          position: 'absolute',
          right: 7,
          top: 5,
          width: '9px',
          height: '9px',
          borderRadius: '50%',
          backgroundColor: '#1992D7',
          border: '1.5px solid #fff'
        }} />
      </Stack>
      <IconButton icon={<SettingsIcon size={20} />} variant="ghost" />
    </YStack>
  )
}

export default LeftSidebar
