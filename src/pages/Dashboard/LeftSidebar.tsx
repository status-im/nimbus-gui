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
import { useSelector } from 'react-redux'

const LeftSidebar = () => {
  const buttons = useSelector((state: any) => state.leftSidebar.buttons)

  const renderIcon = (id: string) => {
    switch (id) {
      case 'dashboard': return <DashboardIcon size={20} />;
      case 'speed': return <SpeedIcon size={20} />;
      case 'chart': return <ChartIcon size={20} />;
      case 'heart': return <HeartIcon size={20} />;
      case 'codeBlock': return <CodeBlockIcon size={20} />;
      case 'communities': return <CommunitiesIcon size={20} />;
      case 'activityCenter': return <ActivityCenterIcon size={20} />;
      case 'settings': return <SettingsIcon size={20} />;
      default: return null;
    }
    
  }; return (
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
      {buttons.map((button: any) => (
        <IconButtonWithDot
          key={button.id}
          iconEl={renderIcon(button.id)}
          variant={button.isDisabled ? "outline" : "ghost"}
          isDotOn={button.isDotOn}
          selected={button.isSelected}
          disabled={button.isDisabled}
          id={button.id}
        />
      ))}
    </YStack>
  );
}

export default LeftSidebar
