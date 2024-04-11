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
import { LEFT_SIDEBAR_ICONS } from '../../../constants'

const iconMap = {
  '/dashboard': <DashboardIcon size={20} />,
  '/validator-management': <SpeedIcon size={20} />,
  '/advanced-analytics': <ChartIcon size={20} />,
  '/device-health-check': <HeartIcon size={20} />,
  '/logs': <CodeBlockIcon size={20} />,
  '/community': <CommunitiesIcon size={20} />,
  '/notifications': <ActivityCenterIcon size={20} />,
  '/settings': <SettingsIcon size={20} />,
}

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
            <LeftSidebarIconButton
              iconEl={iconMap[icon.path as keyof typeof iconMap]}
              path={icon.path}
            />
          </Stack>
        </Tooltip>
      ))}
    </YStack>
  )
}

export default LeftSidebar
