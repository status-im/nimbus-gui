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

const iconMap = {
  '/dashboard': <DashboardIcon size={20} />,
  '/validator-management': <SpeedIcon size={20} />,
  '/charts': <ChartIcon size={20} />,
  '/device-health-check': <HeartIcon size={20} />,
  '/logs': <CodeBlockIcon size={20} />,
  '/communities': <CommunitiesIcon size={20} />,
  '/activityCenter': <ActivityCenterIcon size={20} />,
  '/settings': <SettingsIcon size={20} />,
}

const LeftSidebar = () => {
  const buttons = useSelector((state: RootState) => state.leftSidebar.buttons)

  return (
    <YStack
      space={'$3'}
      minHeight={'14vh'}
      style={{
        padding: '8px',
        border: '1px solid #F0F2F5',
      }}
    >
      {buttons.map((button: SidebarButton) => (
        <Tooltip side="right" content={button.tooltip} key={button.path}>
          <div style={{ padding: '3px', cursor: 'pointer' }}>
            <LeftSidebarIconButton
              iconEl={iconMap[button.path as keyof typeof iconMap]}
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
