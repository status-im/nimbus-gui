import { DropdownMenu } from '@status-im/components'

import { VALIDATOR_SETTINGS_CARDS_TITLES } from '../../../../constants'
import ValidatorSettingCard from './ValidatorSettingCard'

type CardTitle = (typeof VALIDATOR_SETTINGS_CARDS_TITLES)[number]

type AdvancedDropdownMenuProps = {
  title: CardTitle
}

const AdvancedDropdownMenu = ({ title }: AdvancedDropdownMenuProps) => {
  return (
    <DropdownMenu>
      <ValidatorSettingCard title={title} />
      <DropdownMenu.Content>
        <DropdownMenu.Item label="Deposit" onSelect={() => {}} />
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

export default AdvancedDropdownMenu
