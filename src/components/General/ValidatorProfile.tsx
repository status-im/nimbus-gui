import { Avatar } from '@status-im/components'
import { XStack } from 'tamagui'

import ValidatorNameAddress from './ValidatorNameAddress'

type ValidatorProfileProps = {
  name: string
  address: string
}

const ValidatorProfile = ({ name, address }: ValidatorProfileProps) => {
  return (
    <XStack space={'$2'}>
      <Avatar
        type="user"
        size={32}
        src="/icons/validator-request.svg"
        name={name}
        indicator="online"
      />
      <ValidatorNameAddress name={name} address={address} />
    </XStack>
  )
}

export default ValidatorProfile
