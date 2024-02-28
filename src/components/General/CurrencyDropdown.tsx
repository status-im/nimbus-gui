import { useState } from 'react'
import { Button, DropdownMenu } from '@status-im/components'
import { useDispatch } from 'react-redux'

import { CURRENCIES } from '../../constants'
import ChevronIcon from './ChevronIcon'

const CurrencyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  const changeIsOpenHandler = (isOpen: boolean) => {
    setIsOpen(isOpen)
  }

  const changeCurrencyHandler = (currency: string) => {
    dispatch({ type: 'currency/setCurrency', payload: currency })
  }

  return (
    <DropdownMenu onOpenChange={changeIsOpenHandler}>
      <Button
        variant="ghost"
        size={24}
        icon={<ChevronIcon isOpen={isOpen} />}
      />
      <DropdownMenu.Content width={63} side="bottom" zIndex={999}>
        {Object.keys(CURRENCIES).map(currency => (
          <DropdownMenu.Item
            key={currency}
            label={currency}
            onSelect={() => changeCurrencyHandler(currency)}
          />
        ))}
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

export default CurrencyDropdown
