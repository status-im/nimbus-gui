import { IconButton } from '@status-im/components'
import { Stack } from 'tamagui'
import { Link } from 'react-router-dom'

type IconButtonWithDotProps = {
  iconEl: any
  isDotOn: boolean
  isDisabled?: boolean
  path: string
}

const LeftSidebarIconButton = ({
  iconEl,
  isDotOn,
  isDisabled,
  path,
}: IconButtonWithDotProps) => {
  return (
    <Link to={path}>
      <IconButton
        icon={iconEl}
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
