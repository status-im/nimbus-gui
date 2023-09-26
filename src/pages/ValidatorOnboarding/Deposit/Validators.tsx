import { useState } from 'react'
import { Input, Text } from '@status-im/components'
import { AddIcon } from '@status-im/icons'
import { Stack, XStack, YStack } from 'tamagui'

import DepositSubtitle from './DepositSubtitle'
import { CURRENCIES, ETH_PER_VALIDATOR } from '../../../constants'
import CurrencyDropdown from '../../../components/General/CurrencyDropdown'

type ValidatorsProps = {
  validatorCount: number
  addValidatorHandler: () => void
  changeValidatorCountHandler: (value: string) => void
}

const Validators = ({
  validatorCount,
  addValidatorHandler,
  changeValidatorCountHandler,
}: ValidatorsProps) => {
  const [currency, setCurrency] = useState(CURRENCIES[0])

  const totalPrice = (validatorCount * currency.price).toFixed(2)

  const changeCurrency = (currency: (typeof CURRENCIES)[0]) => {
    setCurrency(currency)
  }

  return (
    <XStack justifyContent={'space-between'} width={'80%'}>
      <Stack space={'$2'}>
        <DepositSubtitle />
        <Input
          icon={<AddIcon size={16} style={{ cursor: 'pointer' }} onClick={addValidatorHandler} />}
          style={{ fontWeight: 'bold' }}
          value={validatorCount.toString()}
          onChangeText={changeValidatorCountHandler}
        />
      </Stack>
      <YStack space={'$2'}>
        <Text size={15} weight={'semibold'}>
          ETH
        </Text>
        <Text size={27} weight={'semibold'}>
          {validatorCount * ETH_PER_VALIDATOR}
        </Text>
      </YStack>
      <YStack space={'$2'}>
        <XStack style={{ justifyContent: 'space-between' }}>
          <Text size={15} weight={'semibold'}>
            {currency.name}
          </Text>
          <CurrencyDropdown changeCurrency={changeCurrency} />
        </XStack>
        <Text size={27} weight={'semibold'}>
          {currency.symbol}
          {totalPrice} {currency.name}
        </Text>
      </YStack>
    </XStack>
  )
}

export default Validators
