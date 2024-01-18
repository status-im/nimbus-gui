import { Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
import { CopyIcon, VerifiedIcon, ContactIcon } from '@status-im/icons'

import { getFormattedValidatorAddress } from '../../utilities'

type ValidatorNameAddressProps = {
  name: string
  address: string
  isVerified?: boolean
  isAvatarChipIncluded?: boolean
}

const ValidatorNameAddress = ({
  name,
  address,
  isVerified,
  isAvatarChipIncluded,
}: ValidatorNameAddressProps) => {
  const onCopyAddress = () => {
    navigator.clipboard.writeText(address)
  }

  return (
    <YStack alignItems={'start'}>
      <XStack space={'$1'} alignItems="center">
        <Text size={13} weight={'semibold'}>
          Validator {name}
        </Text>
        {isVerified && <VerifiedIcon size={20} />}
        {isAvatarChipIncluded && <ContactIcon size={20} />}
      </XStack>
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
