import { DropdownMenu, Text } from '@status-im/components'
import { Stack, YStack } from 'tamagui'
import { AdvancedIcon } from '@status-im/icons'
import { Link } from 'react-router-dom'

import { CardTitle } from './ValidatorSettingCard'
import { VALIDATOR_SETTING_ADVANCED_OPTIONS } from '../../../../constants'

type AdvancedDropdownMenuProps = {
  title: CardTitle
}

const AdvancedDropdownMenu = ({ title }: AdvancedDropdownMenuProps) => {
  const onSelectDropdownItem = () => {}

  return (
    <DropdownMenu>
      <YStack alignItems="center" cursor="pointer">
        <Stack
          style={{
            border: '0.5px solid #DCE0E5',
            borderRadius: '16px',
            padding: '10px',
            width: 'fit-content',
          }}
        >
          <AdvancedIcon size={20} />
        </Stack>
        <Text size={15} weight="semibold" color="#647084">
          {title}
        </Text>
      </YStack>
      <DropdownMenu.Content>
        {VALIDATOR_SETTING_ADVANCED_OPTIONS.map(option => (
          <Link to={option.toLowerCase()}>
            <DropdownMenu.Item label={option} onSelect={onSelectDropdownItem} />
          </Link>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

export default AdvancedDropdownMenu
