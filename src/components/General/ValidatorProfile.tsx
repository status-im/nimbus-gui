import { Avatar } from '@status-im/components'
import { XStack } from 'tamagui'

import ValidatorNameAddress from './ValidatorNameAddress'

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
      <ValidatorNameAddress number={number} address={address} />
    </XStack>
  )
}

export default ValidatorProfile
