import { IconButton } from '@status-im/components'
import { useDispatch } from 'react-redux'
import { Stack } from 'tamagui'

import { toggleButtonSelection } from '../../../redux/Sidebars/slice'

type IconButtonWithDotProps = {
  iconEl: any
  variant: 'ghost' | 'outline'
  isDotOn: boolean
  selected?: boolean
  disabled?: boolean
  id: string
}

const LeftSidebarIconButton = ({
  iconEl,
  variant,
  isDotOn,
  selected,
  disabled,
  id,
}: IconButtonWithDotProps) => {
  const dispatch = useDispatch()

  const onClickHandler = () => (disabled ? null : dispatch(toggleButtonSelection(id)))

  return (
    <Stack style={{ position: 'relative', display: 'inline-block' }}>
      <IconButton
        icon={iconEl}
        variant={variant}
        selected={selected}
        disabled={disabled}
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
