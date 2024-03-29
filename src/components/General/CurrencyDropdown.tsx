import { useState } from 'react'
import { Button, DropdownMenu, Text } from '@status-im/components'
import { useDispatch, useSelector } from 'react-redux'
import { XStack, YStack } from 'tamagui'

import { CURRENCIES } from '../../constants'
import { RootState } from '../../redux/store'
import { formatNumbersWithComa } from '../../utilities'
import ChevronIcon from './ChevronIcon'

type CurrencyDropdownProps = {
  price: number
}

const CurrencyDropdown = ({ price }: CurrencyDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const currency = useSelector((state: RootState) => state.currency)
  const totalPrice = price * CURRENCIES[currency as keyof typeof CURRENCIES]

  const changeIsOpenHandler = (isOpen: boolean) => {
    setIsOpen(isOpen)
  }

  const changeCurrencyHandler = (currency: string) => {
    dispatch({ type: 'currency/setCurrency', payload: currency })
  }

  return (
    <YStack space={'$2'}>
      <XStack style={{ justifyContent: 'space-between' }}>
        <Text size={15} weight={'semibold'}>
          {currency}
        </Text>
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
      </XStack>
      <Text size={27} weight={'semibold'}>
        {formatNumbersWithComa(totalPrice)} {currency}
      </Text>
    </YStack>
  )
}

export default CurrencyDropdown
