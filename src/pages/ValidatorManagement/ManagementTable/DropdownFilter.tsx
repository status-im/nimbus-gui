import { DropdownMenu } from '@status-im/components'
import { SortIcon } from '@status-im/icons'
import { Stack } from 'tamagui'

const DropdownFilter = () => {
  return (
    <DropdownMenu>
      <Stack
        style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
      >
        <SortIcon
          size={20}
          color="#647084"
          style={{
            border: '1px solid #DCE0E5',
            borderRadius: '10px',
            padding: '8px',
            cursor: 'pointer',
          }}
        />
        <Stack
          style={{
            position: 'absolute',
            right: -2,
            top: -1.5,
            width: '9px',
            height: '9px',
            borderRadius: '50%',
            backgroundColor: '#1992D7',
            border: '1.5px solid #fff',
          }}
        />
      </Stack>
      <DropdownMenu.Content sideOffset={5} position="absolute" zIndex={999} />
    </DropdownMenu>
  )
}

export default DropdownFilter
