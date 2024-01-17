import { Avatar, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

import { getFormattedValidatorAddress } from '../../utilities'
import { CopyIcon } from '@status-im/icons'

type ValidatorProfileProps = {
  number: number
  address: string
}

const ValidatorProfile = ({ number, address }: ValidatorProfileProps) => {
  const onCopyAddress = () => {
    navigator.clipboard.writeText(address)
  }

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
        <XStack space={'$1'} style={{ alignItems: 'center' }}>
          <Text size={13} color="#647084">
            {getFormattedValidatorAddress(address)}
          </Text>
          <CopyIcon
            size={16}
            color="#647084"
            style={{ cursor: 'pointer' }}
            onClick={onCopyAddress}
          />
        </XStack>
      </YStack>
    </XStack>
  )
}

export default ValidatorProfile
