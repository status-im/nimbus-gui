import { useState } from 'react'
import { Input, Text } from '@status-im/components'
import { AddIcon } from '@status-im/icons'
import { Stack, XStack, YStack } from 'tamagui'

import { CURRENCIES, ETH_PER_VALIDATOR } from '../../constants'
import CurrencyDropdown from './CurrencyDropdown'

type ValidatorsMenuWithPriceProps = {
  validatorCount: number
  changeValidatorCountHandler: (value: string) => void
  label: string
}

export type CurrencyType = keyof typeof CURRENCIES

const ValidatorsMenuWithPrice = ({
  validatorCount,
  changeValidatorCountHandler,
  label,
}: ValidatorsMenuWithPriceProps) => {
  const [currency, setCurrency] = useState(Object.keys(CURRENCIES)[0] as CurrencyType)

  const changeCurrency = (currency: CurrencyType) => {
    if (CURRENCIES[currency]) {
      setCurrency(currency)
    }
  }

  const totalPrice = validatorCount * CURRENCIES[currency as keyof typeof CURRENCIES]

  return (
    <XStack justifyContent={'space-between'} width={'80%'}>
      <Stack space={'$2'}>
        <Text size={15} weight="regular" color={'#647084'}>
          {label}
        </Text>
        <Input
          icon={
            <AddIcon
              size={16}
              style={{ cursor: 'pointer' }}
              onClick={() => changeValidatorCountHandler((validatorCount + 1).toString())}
            />
          }
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
            {currency}
          </Text>
          <CurrencyDropdown changeCurrency={changeCurrency} />
        </XStack>
        <Text size={27} weight={'semibold'}>
          {totalPrice.toFixed(2)} {currency}
        </Text>
      </YStack>
    </XStack>
  )
}

export default ValidatorsMenuWithPrice
