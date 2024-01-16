import { useState } from 'react'
import { Input, Text } from '@status-im/components'
import { AddIcon } from '@status-im/icons'
import { Stack, XStack, YStack, useMedia } from 'tamagui'

import { CURRENCIES, ETH_PER_VALIDATOR } from '../../constants'
import CurrencyDropdown from './CurrencyDropdown'
import ResponsiveStack from './ResponsiveStack'

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
  const media = useMedia()

  const changeCurrency = (currency: CurrencyType) => {
    if (CURRENCIES[currency]) {
      setCurrency(currency)
    }
  }

  const totalETH = validatorCount * ETH_PER_VALIDATOR
  const totalPrice = totalETH * CURRENCIES[currency as keyof typeof CURRENCIES]

  return (
    <ResponsiveStack
      isVerticalAligned={media.sm}
      style={{ justifyContent: 'space-between', width: media.md ? '100%' : '80%' }}
      space={'$3'}
    >
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
      <XStack style={{ justifyContent: 'space-between' }}>
        <YStack space={'$2'}>
          <Text size={15} weight={'semibold'}>
            ETH
          </Text>
          <Text size={27} weight={'semibold'}>
            {totalETH}
          </Text>
        </YStack>
        <YStack space={'$2'}>
          <XStack style={{ justifyContent: 'space-between', width: '115%' }}>
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
    </ResponsiveStack>
  )
}

export default ValidatorsMenuWithPrice
