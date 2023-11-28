import { Button, DropdownMenu, Input } from '@status-im/components'
import { Stack, XStack } from 'tamagui'
import { SearchIcon, DropdownIcon } from '@status-im/icons'

import SwitchComponent from './SwitchComponent'

type HeaderBtnsProps = {
  setDropdownMenuItem: (dropdownMenuItem: string) => void
  dropdownMenuItem: string
  timestamps: boolean
  setTimestamps: (timestamps: boolean) => void
  searchInput: string
  setSearchInput: (searchInput: string) => void
  triggerSearch: (isTriggered: boolean) => void
}

const HeaderBtns = ({
  setDropdownMenuItem,
  dropdownMenuItem,
  timestamps,
  setTimestamps,
  searchInput,
  setSearchInput,
  triggerSearch,
}: HeaderBtnsProps) => {
  return (
    <XStack space={'$4'}>
      <Input
        variant="retractable"
        color={'black'}
        icon={<SearchIcon size={16} />}
        onChange={e => setSearchInput(e.target.value)}
        value={searchInput}
        onBlur={() => triggerSearch(true)}
      ></Input>
      <Stack>
        <DropdownMenu>
          <Button variant="outline" icon={<DropdownIcon size={16} />}>
            {dropdownMenuItem}
          </Button>
          <DropdownMenu.Content>
            <DropdownMenu.Item
              label="Validator"
              onSelect={() => setDropdownMenuItem('Validator')}
            />
            <DropdownMenu.Item label="Critical" onSelect={() => setDropdownMenuItem('Critical')} />
            <DropdownMenu.Item label="Warnings" onSelect={() => setDropdownMenuItem('Warnings')} />
          </DropdownMenu.Content>
        </DropdownMenu>
      </Stack>
      <Button
        variant="outline"
        icon={<SwitchComponent timestamps={timestamps} setTimestamps={setTimestamps} />}
      >
        Timestamps
      </Button>
    </XStack>
  )
}

export default HeaderBtns
