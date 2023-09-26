import { Button, DropdownMenu } from '@status-im/components'
import { ChevronDownIcon } from '@status-im/icons'

import { CURRENCIES } from '../../constants'

type CurrencyDropdownProps = {
  changeCurrency: (currency: (typeof CURRENCIES)[0]) => void
}

const CurrencyDropdown = ({ changeCurrency }: CurrencyDropdownProps) => {
  return (
    <DropdownMenu>
      <Button variant="ghost" size={24} icon={<ChevronDownIcon size={16} color={'#919191'} />} />
      <DropdownMenu.Content sideOffset={10} position="absolute" zIndex={999}>
        {CURRENCIES.map(currency => (
          <DropdownMenu.Item
            key={currency.name}
            label={currency.name}
            onSelect={() => changeCurrency(currency)}
          />
        ))}
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

export default CurrencyDropdown
