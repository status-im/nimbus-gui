import { useEffect, useState } from 'react'
import { Button, DropdownMenu, Text } from '@status-im/components'
import { useDispatch, useSelector } from 'react-redux'
import { XStack, YStack } from 'tamagui'

import { RootState } from '../../redux/store'
import { formatNumbersWithComa } from '../../utilities'
import ChevronIcon from './ChevronIcon'
import { LOADING } from '../../constants'

type CurrencyDropdownProps = {
  depositAmount: number
}

const CurrencyDropdown = ({ depositAmount }: CurrencyDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [supportedCurrencies, setSupportedCurrencies] = useState([])
  const [currentCurrencyAmount, setCurrentCurrencyAmount] = useState(0)
  const [isCurrencyLoading, setIsCurrencyLoading] = useState(false)
  const [isSupportedCurrenciesLoading, setIsSupportedCurrenciesLoading] =
    useState(false)
  const currency = useSelector((state: RootState) => state.currency)
  const dispatch = useDispatch()

  const totalPrice = depositAmount * currentCurrencyAmount

  useEffect(() => {
    fetchSupportedCurrencies()
  }, [])

  useEffect(() => {
    fetchCurrencyPrice()
  }, [currency])

  const fetchCurrencyPrice = async () => {
    try {
      setIsCurrencyLoading(true)
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=${currency}`,
        {
          headers: {
            accept: 'application/json',
            'x-cg-demo-api-key': 'CG-FPQgFNTF26FzyCA7vtbaSh5U',
          },
        },
      )
      const data = await response.json()
      setCurrentCurrencyAmount(data.ethereum[currency])
    } catch (error) {
      console.error(error)
    } finally {
      setIsCurrencyLoading(false)
    }
  }

  const fetchSupportedCurrencies = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/supported_vs_currencies',
        {
          headers: {
            accept: 'application/json',
            'x-cg-demo-api-key': 'CG-FPQgFNTF26FzyCA7vtbaSh5U',
          },
        },
      )

      const newSupportedCurrencies = await response.json()
      setSupportedCurrencies(newSupportedCurrencies)
    } catch (error) {
      console.error(error)
    } finally {
      setIsSupportedCurrenciesLoading(false)
    }
  }

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
          {isCurrencyLoading ? LOADING : currency}
        </Text>
        <DropdownMenu onOpenChange={changeIsOpenHandler}>
          <Button
            variant="ghost"
            size={24}
            icon={<ChevronIcon isOpen={isOpen} />}
          />
          <DropdownMenu.Content width={63} side="bottom" zIndex={999}>
            {isSupportedCurrenciesLoading ? (
              <DropdownMenu.Item label={LOADING} onSelect={() => {}} />
            ) : (
              supportedCurrencies.map(currency => (
                <DropdownMenu.Item
                  key={currency}
                  label={currency}
                  onSelect={() => changeCurrencyHandler(currency)}
                />
              ))
            )}
          </DropdownMenu.Content>
        </DropdownMenu>
      </XStack>
      <Text size={27} weight={'semibold'}>
        {isCurrencyLoading
          ? LOADING
          : `${formatNumbersWithComa(totalPrice)} ${currency}`}
      </Text>
    </YStack>
  )
}

export default CurrencyDropdown
