import { IconAvatarProps, IconButton } from '@status-im/components'
import { Stack } from 'tamagui'
import { Link } from 'react-router-dom'

type IconButtonWithDotProps = {
  icon: IconAvatarProps['icon']
  path: string
}

const LeftSidebarIconButton = ({ icon, path }: IconButtonWithDotProps) => {
  const isDotOn = path === '/notifications'
  const isDisabled =
    path === '/advanced-analytics' ||
    path === '/community' ||
    path === '/notifications' ||
    path === '/settings'

  return (
    <Link to={path}>
      <IconButton
        icon={icon}
        variant={isDisabled ? 'outline' : 'ghost'}
        selected={path === window.location.pathname}
        disabled={isDisabled}
      />
      {isDotOn && (
        <Stack
          style={{
            position: 'absolute',
            right: 7,
            top: 5,
            width: '9px',
            height: '9px',
            borderRadius: '50%',
            backgroundColor: '#1992D7',
            border: '1.5px solid #fff',
          }}
        />
      )}
    </Link>
  )
}

export default LeftSidebarIconButton
