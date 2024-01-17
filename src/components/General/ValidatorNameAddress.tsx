import { Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

import { getFormattedValidatorAddress } from '../../utilities'
import { CopyIcon } from '@status-im/icons'

type ValidatorNameAddressProps = {
  number: number
  address: string
}

const ValidatorNameAddress = ({ number, address }: ValidatorNameAddressProps) => {
  const onCopyAddress = () => {
    navigator.clipboard.writeText(address)
  }

  return (
    <YStack alignItems={'start'}>
      <Text size={15} weight={'semibold'}>
        Validator {number}
      </Text>
      <XStack space={'$1'} style={{ alignItems: 'center' }}>
        <Text size={13} color="#647084">
          {getFormattedValidatorAddress(address)}
        </Text>
        <CopyIcon size={16} color="#647084" style={{ cursor: 'pointer' }} onClick={onCopyAddress} />
      </XStack>
    </YStack>
  )
}

export default ValidatorNameAddress
