import { IconAvatarProps, IconButton } from '@status-im/components'
import { Link } from 'react-router-dom'

type IconButtonWithDotProps = {
  icon: IconAvatarProps['icon']
  path: string
}

const LeftSidebarIconButton = ({ icon, path }: IconButtonWithDotProps) => {
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
    </Link>
  )
}

export default LeftSidebarIconButton
