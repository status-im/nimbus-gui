import { Checkbox, Input, Text } from '@status-im/components'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Stack, Switch, XStack, YStack } from 'tamagui'

import { RootState } from '../../../redux/store'

type AddressAndPortInputsProps = {
  addressType: string
  portType?: string
  isAdvanced?: boolean
  address: string
  port?: string
}

const AddressAndPortInputs = ({
  isAdvanced,
  addressType,
  portType,
  address,
  port,
}: AddressAndPortInputsProps) => {
  const [isProtocolSwitchOn, setIsProtocolSwitchOn] = useState(true)
  const [isChecked, setIsChecked] = useState(true)
  const { beaconPort, vcPort } = useSelector((state: RootState) => state.pairDevice)
  const dispatch = useDispatch()

  const onProtocolSwitchChangeHandler = () => {
    setIsProtocolSwitchOn(state => !state)
  }

  const onCheckboxChangeHandler = () => {
    setIsChecked(state => !state)
  }

  const onPortChange = (value: string, portType: string) => {
    if (isNaN(Number(value))) {
      return
    }

    dispatch({ type: 'pairDevice/setPort', payload: { value, portType } })
  }

  const onAddressChange = (value: string) => {
    dispatch({ type: 'pairDevice/setAddress', payload: { value, addressType } })
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
      <YStack space={'$2'} flexBasis={0} flexGrow={isAdvanced ? 5 : 4}>
        <Text size={13} color={'#647084'} weight={'semibold'}>
          {addressType} Address
        </Text>
        <Input value={address} onChangeText={onAddressChange} />
      </YStack>
      {isAdvanced ? (
        <YStack space={'$2'} flexBasis={0} flexGrow={3}>
          <Text size={13} color={'#647084'} weight={'semibold'}>
            {portType} Port
          </Text>
          <Input
            value={port}
            onChangeText={value => onPortChange(value, portType ? portType : '')}
          />
        </YStack>
      ) : (
        <XStack space={'$3'} flexGrow={4} flexBasis={0}>
          <YStack space={'$2'} flexBasis={0} flexGrow={2}>
            <Text size={13} color={'#647084'} weight={'semibold'}>
              VC Port
            </Text>
            <Input value={vcPort} onChangeText={value => onPortChange(value, 'VC')} />
          </YStack>
          <YStack space={'$2'} flexBasis={0} flexGrow={2}>
            <Text size={13} color={'#647084'} weight={'semibold'}>
              Beacon Port
            </Text>
            <Input value={beaconPort} onChangeText={value => onPortChange(value, 'Beacon')} />
          </YStack>
        </XStack>
      )}
      <div style={{ display: 'flex', alignItems: 'end', height: '100%' }}>
        <Stack height={'46%'} flexBasis={0} flexGrow={0.5}>
          <Checkbox
            id="AddressAndPortInputs"
            variant="outline"
            selected={isChecked}
            onCheckedChange={onCheckboxChangeHandler}
            size={20}
          />
        </Stack>
      </div>
    </XStack>
  )
}

export default AddressAndPortInputs
