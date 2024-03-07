import { IconButton } from '@status-im/components'
import { useDispatch } from 'react-redux'
import { Stack } from 'tamagui'
import { useNavigate } from 'react-router'

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
  const navigate = useNavigate()

  const onClickHandler = () => {
    isDisabled ? null : dispatch(toggleButtonSelection(id))
    navigate(path)
  }

  return (
    <Stack style={{ position: 'relative', display: 'inline-block' }}>
      <IconButton
        icon={iconEl}
        variant={isDisabled ? 'outline' : 'ghost'}
        selected={isSelected}
        disabled={isDisabled}
        onPress={onClickHandler}
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
  )
}

export default LeftSidebarIconButton
