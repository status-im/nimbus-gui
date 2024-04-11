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
import { Tooltip } from '@status-im/components'

import LeftSidebarIconButton from './LeftSidebarIconButton'

export const LEFT_SIDEBAR_ICONS = [
  {
    path: '/dashboard',
    tooltip: 'Dashboard',
    icon: <DashboardIcon size={20} />,
  },
  {
    path: '/validator-management',
    tooltip: 'Validator Management',
    icon: <SpeedIcon size={20} />,
  },
  {
    path: '/advanced-analytics',
    tooltip: 'Advanced Analytics',
    icon: <ChartIcon size={20} />,
  },
  {
    path: '/device-health-check',
    tooltip: 'Device Health Check',
    icon: <HeartIcon size={20} />,
  },
  { path: '/logs', tooltip: 'Logs', icon: <CodeBlockIcon size={20} /> },
  {
    path: '/community',
    tooltip: 'Community',
    icon: <CommunitiesIcon size={20} />,
  },
  {
    path: '/notifications',
    tooltip: 'Notifications',
    icon: <ActivityCenterIcon size={20} />,
  },
  {
    path: '/settings',
    tooltip: 'Settings',
    icon: <SettingsIcon size={20} />,
  },
]

const LeftSidebar = () => {
  return (
    <YStack
      space={'$3'}
      minHeight={'14vh'}
      style={{
        padding: '8px',
        border: '1px solid #F0F2F5',
      }}
    >
      {LEFT_SIDEBAR_ICONS.map(icon => (
        <Tooltip side="right" content={icon.tooltip} key={icon.path}>
          <Stack>
            <LeftSidebarIconButton icon={icon.icon} path={icon.path} />
          </Stack>
        </Tooltip>
      ))}
    </YStack>
  )
}

export default LeftSidebar
