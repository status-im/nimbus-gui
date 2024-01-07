import { Checkbox, Input, Text } from '@status-im/components'
import { useDispatch, useSelector } from 'react-redux'
import { Stack, Switch, XStack, YStack } from 'tamagui'

import { RootState } from '../../../redux/store'
import PortInput from './PortInput'
import { BEACON, VC } from '../../../constants'

type InputsRowProps = {
  addressType: string
  portType: string
  isAdvanced?: boolean
  address: string
  port: string
  isSwitchOn?: boolean
  isChecked?: boolean
}

const InputsRow = ({
  isAdvanced,
  addressType,
  portType,
  address,
  port,
  isSwitchOn,
  isChecked,
}: InputsRowProps) => {
  const { beaconPort, vcPort, isNodeChecked, isNodeSwitchOn } = useSelector(
    (state: RootState) => state.pairDevice,
  )
  const dispatch = useDispatch()
  const isSwitchOnResult = isAdvanced ? isSwitchOn : isNodeSwitchOn
  const switchStyle = isSwitchOnResult
    ? { backgroundColor: '#2A4AF5' }
    : { backgroundColor: 'grey' }

  const onSwitchChange = (value: boolean) => {
    dispatch({ type: 'pairDevice/setIsSwitchOn', payload: { value, switchType: addressType } })
  }

  const onCheckboxChange = (value: boolean) => {
    dispatch({ type: 'pairDevice/setIsChecked', payload: { value, checkType: addressType } })
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
          style={switchStyle}
          checked={isSwitchOnResult}
          onCheckedChange={onSwitchChange}
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
      {isAdvanced === true && <PortInput port={port} portType={portType} />}
      {isAdvanced === false && <PortInput port={vcPort} portType={VC} />}
      {isAdvanced === false && <PortInput port={beaconPort} portType={BEACON} />}
      <div style={{ display: 'flex', alignItems: 'end', height: '100%' }}>
        <Stack height={'46%'} flexBasis={0} flexGrow={0.5}>
          <Checkbox
            id="AddressAndPortInputs"
            variant="outline"
            selected={isAdvanced ? isChecked : isNodeChecked}
            onCheckedChange={onCheckboxChange}
            size={20}
          />
        </Stack>
      </div>
    </XStack>
  )
}

export default InputsRow
