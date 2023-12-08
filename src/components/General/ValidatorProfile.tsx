import { Avatar, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

import { getFormattedValidatorAddress } from '../../utilities'

type ValidatorProfileProps = {
  number: number
  address: string
}

const ValidatorProfile = ({ number, address }: ValidatorProfileProps) => {
  return (
    <XStack space={'$2'}>
      <Avatar
        type="user"
        size={32}
        src="/icons/validator-request.svg"
        name={number.toString()}
        indicator="online"
      />
      <YStack>
        <Text size={15} weight={'semibold'}>
          Validator {number}
        </Text>
        <Text size={13} color="#647084">
          {getFormattedValidatorAddress(address)}
        </Text>
      </YStack>
    </XStack>
  )
}

export default ValidatorProfile
