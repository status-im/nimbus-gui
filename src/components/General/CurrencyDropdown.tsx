import { useState } from 'react'
import { Button, DropdownMenu } from '@status-im/components'
import { ChevronDownIcon, ChevronTopIcon } from '@status-im/icons'

import { CURRENCIES } from '../../constants'
import { CurrencyType } from './ValidatorsMenuWithPrice'

type CurrencyDropdownProps = {
  changeCurrency: (currency: CurrencyType) => void
}

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => {
  if (isOpen) {
    return <ChevronTopIcon size={16} color={'#919191'} />
  } else {
    return <ChevronDownIcon size={16} color={'#919191'} />
  }
}

const CurrencyDropdown = ({ changeCurrency }: CurrencyDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const changeIsOpenHandler = (isOpen: boolean) => {
    setIsOpen(isOpen)
  }

  return (
    <DropdownMenu onOpenChange={changeIsOpenHandler}>
      <Button variant="ghost" size={24} icon={<ChevronIcon isOpen={isOpen} />} />
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
