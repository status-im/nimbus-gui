import { DropdownMenu } from '@status-im/components'
import { SortIcon } from '@status-im/icons'
import { Stack } from 'tamagui'

import NotificationBadge from '../../../components/General/NotificationBadge'

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
        <NotificationBadge />
      </Stack>
      <DropdownMenu.Content sideOffset={5} position="absolute" zIndex={999} />
    </DropdownMenu>
  )
}

export default DropdownFilter
