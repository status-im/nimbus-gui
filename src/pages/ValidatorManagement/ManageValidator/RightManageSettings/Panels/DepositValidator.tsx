import { Input, Text } from '@status-im/components'
import { ClearIcon } from '@status-im/icons'
import { XStack, YStack } from 'tamagui'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import CurrencyDropdown from '../../../../../components/General/CurrencyDropdown'
import { formatNumbersWithComa } from '../../../../../utilities'
import { RootState } from '../../../../../redux/store'

const DepositValidator = () => {
  const [depositAmount, setDepositAmount] = useState('')
  const currency = useSelector((state: RootState) => state.currency)
  const totalPrice = 1594

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
          <CurrencyDropdown />
        </XStack>
        <Text size={27} weight={'semibold'}>
          {formatNumbersWithComa(totalPrice)} {currency}
        </Text>
      </YStack>
    </XStack>
  )
}

export default DepositValidator
