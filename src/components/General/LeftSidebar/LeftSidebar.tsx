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
import { Tooltip } from '@status-im/components'

import LeftSidebarIconButton from './LeftSidebarIconButton'
import { SidebarButton } from '../../../redux/LeftSidebar/slice'
import { RootState } from '../../../redux/store'

const LeftSidebar = () => {
  const buttons = useSelector((state: RootState) => state.leftSidebar.buttons)

  const renderIcon = (path: string) => {
    switch (path) {
      case '/dashboard':
        return <DashboardIcon size={20} />
      case '/validator-management':
        return <SpeedIcon size={20} />
      case '/charts':
        return <ChartIcon size={20} />
      case '/device-health-check':
        return <HeartIcon size={20} />
      case '/logs':
        return <CodeBlockIcon size={20} />
      case '/communities':
        return <CommunitiesIcon size={20} />
      case '/activityCenter':
        return <ActivityCenterIcon size={20} />
      case '/settings':
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
      {buttons.map((button: SidebarButton) => (
        <Tooltip side="right" content={button.tooltip}>
          <div style={{ padding: '3px', cursor: 'pointer' }}>
            <LeftSidebarIconButton
              key={button.path}
              iconEl={renderIcon(button.path)}
              isDotOn={button.isDotOn}
              isDisabled={button.isDisabled}
              path={button.path}
            />
          </div>
        </Tooltip>
      ))}
    </YStack>
  )
}

export default LeftSidebar
