import { useState } from 'react'
import { Button, DropdownMenu, Input, Text } from '@status-im/components'
import { AddIcon, ChevronDownIcon } from '@status-im/icons'
import { Stack, XStack, YStack } from 'tamagui'

import DepositSubtitle from './DepositSubtitle'
import { CURRENCIES, ETH_PER_VALIDATOR } from '../../../constants'

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
            USD
          </Text>
          <DropdownMenu>
            <Button
              variant="ghost"
              size={24}
              icon={<ChevronDownIcon size={16} color={'#919191'} />}
            />
            <DropdownMenu.Content sideOffset={10} position="absolute" zIndex={999}>
              {CURRENCIES.map(currency => (
                <DropdownMenu.Item
                  key={currency.name}
                  label={currency.name}
                  onSelect={() => setCurrency(currency)}
                />
              ))}
            </DropdownMenu.Content>
          </DropdownMenu>
        </XStack>
        <Text size={27} weight={'semibold'}>
          {currency.symbol}
          {validatorCount * currency.price} {currency.name}
        </Text>
      </YStack>
    </XStack>
  )
}

export default Validators
