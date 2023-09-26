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
import IconButtonWithDot from './IconButtonWithDot'
import { useDispatch, useSelector } from 'react-redux'

const LeftSidebar = () => {
  const buttons = useSelector((state: any) => state.leftSidebar.buttons)
  console.log(buttons)
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
      <IconButtonWithDot
        iconEl={<DashboardIcon size={20} />}
        variant="ghost"
        isDotOn={false}
        selected={true}
      />
      <IconButtonWithDot iconEl={<SpeedIcon size={20} />} variant="ghost" isDotOn={false} />
      <IconButtonWithDot
        iconEl={<ChartIcon size={20} />}
        variant="outline"
        isDotOn={false}
        disabled={true}
      />
      <IconButtonWithDot iconEl={<HeartIcon size={20} />} variant="ghost" isDotOn={false} />
      <IconButtonWithDot iconEl={<CodeBlockIcon size={20} />} variant="ghost" isDotOn={false} />
      <IconButtonWithDot iconEl={<CommunitiesIcon size={20} />} variant="ghost" isDotOn={false} />
      <IconButtonWithDot iconEl={<ActivityCenterIcon size={20} />} variant="ghost" isDotOn={true} />
      <IconButtonWithDot iconEl={<SettingsIcon size={20} />} variant="ghost" isDotOn={false} />
    </YStack>
  )
}

export default LeftSidebar
