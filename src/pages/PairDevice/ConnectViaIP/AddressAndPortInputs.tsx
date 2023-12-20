import { Checkbox, Input, Text } from '@status-im/components'
import { useState } from 'react'
import { Stack, Switch, XStack, YStack } from 'tamagui'

type AddressAndPortInputsProps = {
  addressType: string
  portType: string
  isAdvanced?: boolean
}

const AddressAndPortInputs = ({ addressType, portType, isAdvanced }: AddressAndPortInputsProps) => {
  const [isSwitchOn, setIsSwitchOn] = useState(true)
  const [address, setAddress] = useState('http://124.0.0.1')
  const [port, setPort] = useState('5052')
  const [isChecked, setIsChecked] = useState(true)

  const onSwitchChangeHandler = () => {
    setIsSwitchOn(state => !state)
  }

  const onAddressChangeHandler = (value: string) => {
    setAddress(value)
  }

  const onPortChangeHandler = (value: string) => {
    setPort(value)
  }

  const onCheckboxChangeHandler = () => {
    setIsChecked(state => !state)
  }

  return (
    <YStack>
      <XStack justifyContent={'space-between'}>
        <YStack space={'$2'}>
          <YStack>
            <Text size={13} color={'#647084'} weight={'semibold'}>
              Protocol
            </Text>
            <Text size={11} color={'#647084'}>
              (HTTP/HTTPS)
            </Text>
          </YStack>
          <Switch
            size="$1"
            style={isSwitchOn ? { backgroundColor: '#2A4AF5' } : { backgroundColor: 'grey' }}
            checked={isSwitchOn}
            onCheckedChange={onSwitchChangeHandler}
          >
            <Switch.Thumb
              style={{
                right: 7,
                bottom: 3,
                backgroundColor: '#fff',
                height: '16px',
                width: '16px',
              }}
            />
          </Switch>
        </YStack>
        <YStack space={'$2'}>
          <Text size={13} color={'#647084'} weight={'semibold'}>
            {addressType || 'Node'} Address
          </Text>
          <Input placeholder={''} value={address} onChangeText={onAddressChangeHandler} />
        </YStack>
        {isAdvanced === false ? (
          <></>
        ) : (
          <YStack space={'$2'}>
            <Text size={13} color={'#647084'} weight={'semibold'}>
              {portType} Port
            </Text>
            <Input value={port} onChangeText={onPortChangeHandler} />
          </YStack>
        )}
        <Stack
          style={{ alignItems: 'center', justifyContent: 'center' }}
          height={'100%'}
          marginTop={'10px'}
          width={'fit-content'}
        >
          <Checkbox
            id="AddressAndPortInputs"
            variant="outline"
            selected={isChecked}
            onCheckedChange={onCheckboxChangeHandler}
            size={20}
          />
        </Stack>
      </XStack>
    </YStack>
  )
}

export default AddressAndPortInputs
