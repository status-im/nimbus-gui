import { Input, Text } from '@status-im/components'
import { ClearIcon } from '@status-im/icons'
import { XStack, YStack } from 'tamagui'
import { useState } from 'react'

import CurrencyDropdown from '../../../../components/General/CurrencyDropdown'

const DepositValidator = () => {
  const [depositAmount, setDepositAmount] = useState('')

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
        justifyContent: 'space-between',
      }}
    >
      <YStack space={'$2'} width={'60%'}>
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
          placeholder="Deposit ETH Amount"
          value={depositAmount}
          onChangeText={changeDepositAmountHandler}
        />
      </YStack>
      <CurrencyDropdown price={Number(depositAmount)} />
    </XStack>
  )
}

export default DepositValidator
