import { Input, Text } from '@status-im/components'
import { useDispatch, useSelector } from 'react-redux'
import { Stack, Switch, YStack } from 'tamagui'
import { CheckIcon } from '@status-im/icons'

import { RootState } from '../../../redux/store'
import PortInput from './PortInput'
import { BEACON, VC } from '../../../constants'
import styles from './index.module.css'

type InputsRowProps = {
  addressType: string
  portType: string
  isAdvanced: boolean
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
}: InputsRowProps) => {
  const { beaconPort, vcPort, isNodeSwitchOn } = useSelector((state: RootState) => state.pairDevice)
  const dispatch = useDispatch()
  const isSwitchOnResult = isAdvanced ? isSwitchOn : isNodeSwitchOn
  const switchStyle = isSwitchOnResult
    ? { backgroundColor: '#2A4AF5' }
    : { backgroundColor: 'grey' }

  const onSwitchChange = (value: boolean) => {
    dispatch({ type: 'pairDevice/setIsSwitchOn', payload: { value, switchType: addressType } })
  }

  const onAddressChange = (value: string) => {
    dispatch({ type: 'pairDevice/setAddress', payload: { value, addressType } })
  }

  const isAddressValid = (address: string) => {
    return address.length > 0
  }

  const isPortValid = (port: string) => {
    if (port.length === 0) {
      return false
    }

    return !isNaN(Number(port))
  }

  const isValidRow = () => {
    if (isAdvanced) {
      return isAddressValid(address) && isPortValid(port)
    } else {
      return isAddressValid(address) && isPortValid(vcPort) && isPortValid(beaconPort)
    }
  }

  return (
    <div className={styles['row-container']}>
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
      <div style={{ display: 'flex', alignItems: 'end', marginBottom: '11px' }}>
        <Stack flexBasis={0} flexGrow={0.5}>
          <CheckIcon
            size={16}
            style={{
              borderRadius: '50%',
              backgroundColor: isValidRow() ? '#2A4AF5' : '#1B273D1A',
              padding: '1px',
            }}
            color={'white'}
          />
        </Stack>
      </div>
    </div>
  )
}

export default InputsRow
