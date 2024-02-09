import { Stack, YStack } from 'tamagui'
import {
  InformationBox,
  Input as StatusInput,
  Text,
} from '@status-im/components'
import { ClearIcon, CloseCircleIcon } from '@status-im/icons'
import { useState } from 'react'
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native'
import { isAddress } from 'web3-validator'

type WithdrawalAddressProps = {
  title: string
}

const WithdrawalAddress = ({ title }: WithdrawalAddressProps) => {
  const [withdrawalAddress, setWithdrawalAddress] = useState('')
  const [isValidAddress, setIsValidAddress] = useState(true)
  const changeWithdrawalAddressHandler = (value: string) => {
    setWithdrawalAddress(value)
  }

  const removeWithdrawalAddressHandler = () => {
    setWithdrawalAddress('')
  }
  const checkAddress = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (e.nativeEvent.text.length !== 0) {
      setIsValidAddress(isAddress(e.nativeEvent.text))
    }
  }

  return (
    <YStack space={'$4'}>
      <Text size={19} weight={'semibold'}>
        {title}
      </Text>
      <YStack space={'$3'}>
        <Text size={13} weight="regular" color={'#647084'}>
          Ethereum Address
        </Text>
        <Stack width={'100%'}>
          <StatusInput
            placeholder={'******************'}
            width={'100%'}
            icon={
              <ClearIcon
                size={16}
                style={{ cursor: 'pointer' }}
                onClick={removeWithdrawalAddressHandler}
              />
            }
            value={withdrawalAddress}
            onChangeText={changeWithdrawalAddressHandler}
            onBlur={e => checkAddress(e)}
          />
        </Stack>
        <InformationBox
          message="If withdrawal address is not provided at this step, your deposited funds will remain locked on the Beacon Chain until an address is provided. Unlocking will require signing a message with your withdrawal keys, generated from your mnemonic seed phrase (so keep it safe)."
          variant="error"
          icon={<CloseCircleIcon size={20} />}
        />
        {!isValidAddress && (
          <InformationBox
            message="Not valid ethereum address"
            variant="error"
            icon={<CloseCircleIcon size={20} />}
          />
        )}
      </YStack>
    </YStack>
  )
}

export default WithdrawalAddress
