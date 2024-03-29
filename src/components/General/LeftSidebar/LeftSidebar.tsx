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
import { XStack, YStack } from 'tamagui'
import { useSelector } from 'react-redux'
import { Text, Tooltip } from '@status-im/components'
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
        <Tooltip
          side="right"
          content={
            <XStack alignItems="center" space="$1">
              <Text size={15} weight="semibold">
                {button.path
                  .replace(/-/g, ' ')
                  .slice(1)
                  .replace(/^\w/, (c: any) => c.toUpperCase())}
              </Text>
            </XStack>
          }
        >
          <div style={{ padding: '3px', cursor: 'pointer' }}>
            <LeftSidebarIconButton
              key={button.id}
              iconEl={renderIcon(button.id)}
              isDotOn={button.isDotOn}
              isSelected={button.isSelected}
              isDisabled={button.isDisabled}
              id={button.id}
              path={button.path}
            />
          </div>
        </Tooltip>
      ))}
    </YStack>
  )
}

export default LeftSidebar
