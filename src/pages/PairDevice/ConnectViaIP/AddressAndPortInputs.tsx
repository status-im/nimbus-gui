import { Checkbox, Input, Text } from '@status-im/components'
import { useState } from 'react'
import { Stack, Switch, XStack, YStack } from 'tamagui'

type AddressAndPortInputsProps = {
  isAdvanced: boolean
}

const AddressAndPortInputs = ({ isAdvanced }: AddressAndPortInputsProps) => {
  const [isProtocolSwitchOn, setIsProtocolSwitchOn] = useState(true)
  const [address, setAddress] = useState('http://124.0.0.1')
  const [port, setPort] = useState('5052')
  const [isChecked, setIsChecked] = useState(true)

  const onProtocolSwitchChangeHandler = () => {
    setIsProtocolSwitchOn(state => !state)
  }

  const onAddressChangeHandler = (value: string) => {
    setAddress(value)
  }

  const onPortChangeHandler = (value: string) => {
    if (isNaN(Number(value))) {
      return
    }

    setPort(value)
  }

  const onCheckboxChangeHandler = () => {
    setIsChecked(state => !state)
  }

  return (
    <XStack space={'$3'}>
      <YStack space={'$2'} flexBasis={0} flexGrow={2}>
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
          style={isProtocolSwitchOn ? { backgroundColor: '#2A4AF5' } : { backgroundColor: 'grey' }}
          checked={isProtocolSwitchOn}
          onCheckedChange={onProtocolSwitchChangeHandler}
        >
          <Switch.Thumb
            style={{
              right: 7.6,
              bottom: 2.4,
              backgroundColor: '#fff',
              height: '16px',
              width: '16px',
            }}
          />
        </Switch>
      </YStack>
      <YStack space={'$2'} flexBasis={0} flexGrow={4}>
        <Text size={13} color={'#647084'} weight={'semibold'}>
          Node Address
        </Text>
        <Input value={address} onChangeText={onAddressChangeHandler} />
      </YStack>
      <YStack space={'$2'} flexBasis={0} flexGrow={2}>
        <Text size={13} color={'#647084'} weight={'semibold'}>
          VC Port
        </Text>
        <Input value={port} onChangeText={onPortChangeHandler} />
      </YStack>
      <YStack space={'$2'} flexBasis={0} flexGrow={2}>
        <Text size={13} color={'#647084'} weight={'semibold'}>
          Beacon Port
        </Text>
        <Input value={port} onChangeText={onPortChangeHandler} />
      </YStack>
      <Stack
        style={{ alignItems: 'center', justifyContent: 'center' }}
        // height={'100%'}
        marginTop={'25px'}
        flexBasis={0}
        flexGrow={0.5}
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
  )
}

export default AddressAndPortInputs
