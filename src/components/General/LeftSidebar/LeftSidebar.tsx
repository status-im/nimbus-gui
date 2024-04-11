import {
  DashboardIcon,
  SpeedIcon,
  ChartIcon,
  HeartIcon,
  CodeBlockIcon,
  CommunitiesIcon,
  ActivityCenterIcon,
  SettingsIcon,
  NotificationsUnreadIcon,
} from '@status-im/icons'
import { Stack, YStack } from 'tamagui'
import { Tooltip } from '@status-im/components'
import { useMemo } from 'react'

import LeftSidebarIconButton from './LeftSidebarIconButton'
import { PATHS } from '../../../constants'

const LeftSidebar = () => {
  const isNotification = true

  const LEFT_SIDEBAR_ICONS = useMemo(
    () => [
      {
        path: PATHS.DASHBOARD,
        tooltip: 'Dashboard',
        icon: <DashboardIcon size={20} />,
      },
      {
        path: PATHS.VALIDATOR_MANAGEMENT,
        tooltip: 'Validator Management',
        icon: <SpeedIcon size={20} />,
      },
      {
        path: '/advanced-analytics',
        tooltip: 'Advanced Analytics',
        icon: <ChartIcon size={20} />,
      },
      {
        path: PATHS.DEVICE_HEALTH_CHECK,
        tooltip: 'Device Health Check',
        icon: <HeartIcon size={20} />,
      },
      { path: PATHS.LOGS, tooltip: 'Logs', icon: <CodeBlockIcon size={20} /> },
      {
        path: '/community',
        tooltip: 'Community',
        icon: <CommunitiesIcon size={20} />,
      },
      {
        path: '/notifications',
        tooltip: 'Notifications',
        icon: isNotification ? (
          <NotificationsUnreadIcon size={20} />
        ) : (
          <ActivityCenterIcon size={20} />
        ),
      },
      {
        path: '/settings',
        tooltip: 'Settings',
        icon: <SettingsIcon size={20} />,
      },
    ],
    [isNotification],
  )

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
