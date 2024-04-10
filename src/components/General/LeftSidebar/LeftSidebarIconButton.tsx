import { IconButton } from '@status-im/components'
import { useDispatch } from 'react-redux'
import { Stack } from 'tamagui'
import { Link } from 'react-router-dom'

import { toggleButtonSelection } from '../../../redux/LeftSidebar/slice'

type IconButtonWithDotProps = {
  iconEl: any
  isDotOn: boolean
  isSelected: boolean
  isDisabled?: boolean
  id: string
  path: string
}

const LeftSidebarIconButton = ({
  iconEl,
  isDotOn,
  isSelected,
  isDisabled,
  id,
  path,
}: IconButtonWithDotProps) => {
  const dispatch = useDispatch()

  const onClickHandler = () => {
    isDisabled ? null : dispatch(toggleButtonSelection(id))
  }

  return (
    <Link to={path} onClick={onClickHandler}>
      <Stack style={{ position: 'relative', display: 'inline-block' }}>
        <IconButton
          icon={iconEl}
          variant={isDisabled ? 'outline' : 'ghost'}
          selected={isSelected}
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
      </Stack>
    </Link>
  )
}

export default LeftSidebarIconButton
