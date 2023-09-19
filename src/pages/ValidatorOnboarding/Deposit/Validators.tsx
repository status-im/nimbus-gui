import { Input, Text } from '@status-im/components'
import { AddIcon, ChevronDownIcon } from '@status-im/icons'
import { Stack, XStack, YStack } from 'tamagui'

type ValidatorsProps = {
  validatorCount: number
  addValidatorHandler: () => void
  changeValidatorCountHandler: (e: any) => void
}

const Validators = ({
  validatorCount,
  addValidatorHandler,
  changeValidatorCountHandler,
}: ValidatorsProps) => {
  return (
    <XStack justifyContent={'space-between'} width={'80%'}>
      <Stack space={'$2'}>
        <Text size={15} weight="regular" color={'#647084'}>
          Connect you Wallet to stake required ETH for new validators
        </Text>
        <Input
          icon={<AddIcon size={16} style={{ cursor: 'pointer' }} onClick={addValidatorHandler} />}
          style={{ fontWeight: 'bold' }}
          value={validatorCount.toString()}
          onChange={changeValidatorCountHandler}
        />
      </Stack>
      <YStack space={'$2'}>
        <Text size={15} weight={'semibold'} color="#09101C">
          ETH
        </Text>
        <Text size={27} weight={'semibold'} color="#09101C">
          64
        </Text>
      </YStack>
      <YStack space={'$2'}>
        <XStack style={{ justifyContent: 'space-between' }}>
          <Text size={15} weight={'semibold'} color="#09101C">
            USD
          </Text>
          <ChevronDownIcon size={16} color={'#919191'} />
        </XStack>
        <Text size={27} weight={'semibold'} color="#09101C">
          $4,273 USD
        </Text>
      </YStack>
    </XStack>
  )
}

export default Validators
