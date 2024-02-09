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
import { useSelector } from 'react-redux'

import LeftSidebarIconButton from './LeftSidebarIconButton'

const LeftSidebar = () => {
  const buttons = useSelector((state: any) => state.leftSidebar.buttons)

  const renderIcon = (id: string) => {
    switch (id) {
      case 'dashboard':
        return <DashboardIcon size={20} />
      case 'speed':
        return <SpeedIcon size={20} />
      case 'chart':
        return <ChartIcon size={20} />
      case 'heart':
        return <HeartIcon size={20} />
      case 'codeBlock':
        return <CodeBlockIcon size={20} />
      case 'communities':
        return <CommunitiesIcon size={20} />
      case 'activityCenter':
        return <ActivityCenterIcon size={20} />
      case 'settings':
        return <SettingsIcon size={20} />
      default:
        return null
    }
  }

  return (
    <YStack
      space={'$3'}
      minHeight={'14vh'}
      style={{
        padding: '8px',
        borderTopLeftRadius: '16px',
        borderBottomLeftRadius: '16px',
        border: '1px solid #F0F2F5',
      }}
    >
      {buttons.map((button: any) => (
        <LeftSidebarIconButton
          key={button.id}
          iconEl={renderIcon(button.id)}
          isDotOn={button.isDotOn}
          isSelected={button.isSelected}
          isDisabled={button.isDisabled}
          id={button.id}
        />
      ))}
    </YStack>
  )
}

export default LeftSidebar
