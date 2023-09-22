import { Avatar, DividerLine, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

import { getFormattedValidatorAddress } from '../../../utilities'

type ValidatorRequestProps = {
  validator: {
    name: string
    address: string
  }
}

const ValidatorRequest = ({ validator }: ValidatorRequestProps) => {
  return (
    <YStack space={'$3'} style={{ width: '100%' }}>
      <XStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <XStack space={'$2'}>
          <Avatar
            type="user"
            size={32}
            src="/icons/validator-request.svg"
            name={validator.name}
            indicator="online"
          />
          <YStack>
            <Text size={13} weight={'semibold'}>
              Validator {validator.name}
            </Text>
            <Text size={13} color="#647084">
              {getFormattedValidatorAddress(validator.address)}
            </Text>
          </YStack>
        </XStack>
        <Text size={13} color="#647084" weight={'semibold'}>
          Keys Generated
        </Text>
        <Text size={13} color="#2F80ED" weight={'semibold'}>
          Requires Deposit
        </Text>
      </XStack>
      <DividerLine />
    </YStack>
  )
}

export default ValidatorRequest
