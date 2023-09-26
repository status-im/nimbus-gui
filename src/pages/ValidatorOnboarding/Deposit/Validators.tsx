import { Input, Text } from '@status-im/components'
import { AddIcon, ChevronDownIcon } from '@status-im/icons'
import { Stack, XStack, YStack } from 'tamagui'

import DepositSubtitle from './DepositSubtitle'
import { ETH_PER_VALIDATOR } from '../../../constants'

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
          <ChevronDownIcon size={16} color={'#919191'} style={{ cursor: 'pointer' }} />
        </XStack>
        <Text size={27} weight={'semibold'}>
          $4,273 USD
        </Text>
      </YStack>
    </XStack>
  )
}

export default Validators
