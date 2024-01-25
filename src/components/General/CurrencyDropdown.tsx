import { Button, DropdownMenu } from '@status-im/components'
import { ChevronDownIcon } from '@status-im/icons'

import { CURRENCIES } from '../../constants'
import { CurrencyType } from './ValidatorsMenuWithPrice'

type CurrencyDropdownProps = {
  changeCurrency: (currency: CurrencyType) => void
}

const CurrencyDropdown = ({ changeCurrency }: CurrencyDropdownProps) => {
  return (
    <DropdownMenu>
      <Button variant="ghost" size={24} icon={<ChevronDownIcon size={16} color={'#919191'} />} />
      <DropdownMenu.Content width={63} side="bottom" zIndex={999}>
        {Object.keys(CURRENCIES).map(currency => (
          <DropdownMenu.Item
            key={currency}
            label={currency}
            onSelect={() => changeCurrency(currency as CurrencyType)}
          />
        ))}
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

export default CurrencyDropdown
