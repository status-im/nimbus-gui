import { Input, Text } from '@status-im/components'
import { ClearIcon } from '@status-im/icons'
import { XStack, YStack } from 'tamagui'
import { useState } from 'react'

import CurrencyDropdown from '../../../../../components/General/CurrencyDropdown'
import { CurrencyType } from '../../../../../components/General/ValidatorsMenuWithPrice'
import { CURRENCIES } from '../../../../../constants'
import { formatNumbersWithComa } from '../../../../../utilities'

const DepositValidator = () => {
  const [depositAmount, setDepositAmount] = useState('')
  const [currency, setCurrency] = useState(
    Object.keys(CURRENCIES)[0] as CurrencyType,
  )
  const totalPrice = 1594

  const changeCurrency = (currency: CurrencyType) => {
    if (CURRENCIES[currency]) {
      setCurrency(currency)
    }
  }

  const changeDepositAmountHandler = (value: string) => {
    const numberValue = Number(value)
    if (isNaN(numberValue) === false) {
      setDepositAmount(value)
    }
  }

  const removeDepositAmountHandler = () => {
    setDepositAmount('')
  }

  return (
    <XStack
      space={'$3'}
      style={{
        width: '100%',
      }}
    >
      <YStack space={'$2'}>
        <Text size={15} weight="regular" color={'#647084'}>
          Deposit validator
        </Text>
        <Input
          icon={
            <ClearIcon
              size={20}
              style={{ cursor: 'pointer' }}
              onClick={removeDepositAmountHandler}
            />
          }
          placeholder="Deposit Amount"
          value={depositAmount}
          onChangeText={changeDepositAmountHandler}
        />
      </YStack>
      <YStack space={'$2'}>
        <XStack style={{ justifyContent: 'space-between' }}>
          <Text size={15} weight={'semibold'}>
            {currency}
          </Text>
          <CurrencyDropdown changeCurrency={changeCurrency} />
        </XStack>
        <Text size={27} weight={'semibold'}>
          {formatNumbersWithComa(totalPrice)} {currency}
        </Text>
      </YStack>
    </XStack>
  )
}

export default DepositValidator
