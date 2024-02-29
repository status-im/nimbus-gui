import { Input, Text } from '@status-im/components'
import { AddIcon } from '@status-im/icons'
import { Stack, XStack, YStack, useMedia } from 'tamagui'
import { useSelector } from 'react-redux'

import { CURRENCIES, ETH_PER_VALIDATOR } from '../../constants'
import { RootState } from '../../redux/store'
import ResponsiveStack from './ResponsiveStack'
import CurrencyDropdown from './CurrencyDropdown'

type ValidatorsMenuWithPriceProps = {
  validatorCount: number
  changeValidatorCountHandler: (value: string) => void
  label: string
}

const ValidatorsMenuWithPrice = ({
  validatorCount,
  changeValidatorCountHandler,
  label,
}: ValidatorsMenuWithPriceProps) => {
  const currency = useSelector((state: RootState) => state.currency)
  const media = useMedia()

  const totalETH = validatorCount * ETH_PER_VALIDATOR
  const totalPrice = totalETH * CURRENCIES[currency as keyof typeof CURRENCIES]

  return (
    <ResponsiveStack
      isVerticalAligned={media.sm}
      style={{
        justifyContent: 'space-between',
        width: media.lg ? '100%' : '80%',
      }}
      space={'$2'}
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
              onClick={() =>
                changeValidatorCountHandler((validatorCount + 1).toString())
              }
            />
          }
          style={{ fontWeight: 'bold' }}
          value={validatorCount.toString()}
          onChangeText={changeValidatorCountHandler}
        />
      </Stack>
      <XStack space={'$10'} style={{ justifyContent: 'space-between' }}>
        <YStack space={'$2'}>
          <Text size={15} weight={'semibold'}>
            ETH
          </Text>
          <Stack style={{ marginTop: '2px' }}>
            <Text size={27} weight={'semibold'}>
              {totalETH}
            </Text>
          </Stack>
        </YStack>
        <CurrencyDropdown totalPrice={totalPrice} />
      </XStack>
    </ResponsiveStack>
  )
}

export default ValidatorsMenuWithPrice
