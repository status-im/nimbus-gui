import { Avatar, DividerLine, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

import { getFormattedValidatorAddress } from '../../../utilities'

type ValidatorRequestProps = {
  number: number
}

const ValidatorRequest = ({ number }: ValidatorRequestProps) => {
  return (
    <YStack space={'$3'} style={{ width: '100%' }}>
      <XStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <XStack space={'$2'}>
          <Avatar
            type="user"
            size={32}
            src="/icons/validator-request.svg"
            name={number.toString()}
            indicator="online"
          />
          <YStack>
            <Text size={13} weight={'semibold'}>
              Validator {number}
            </Text>
            <Text size={13} color="#647084">
              {getFormattedValidatorAddress('zQ3asdf9d4Gs0')}
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
