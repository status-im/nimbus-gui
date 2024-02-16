import { Input, Text } from '@status-im/components'
import { useDispatch, useSelector } from 'react-redux'
import { Stack, YStack } from 'tamagui'
import { CheckIcon } from '@status-im/icons'

import PortInput from './PortInput'
import { RootState } from '../../../redux/store'
import { BEACON, VC } from '../../../constants'
import { isAddressValid, isPortValid } from '../../../utilities'
import styles from './index.module.css'
import TamaguiSwitch from '../../../components/General/TamaguiSwitch'

type InputsRowProps = {
  addressType: string
  portType: string
  address: string
  port: string
  isSwitchOn?: boolean
  isChecked?: boolean
}

const InputsRow = ({
  addressType,
  portType,
  address,
  port,
  isSwitchOn,
}: InputsRowProps) => {
  const { isAdvanced, beaconPort, vcPort, isNodeSwitchOn } = useSelector(
    (state: RootState) => state.pairDevice,
  )
  const dispatch = useDispatch()
  const isSwitchOnResult = isAdvanced ? isSwitchOn : isNodeSwitchOn

  const onSwitchChange = (value: boolean) => {
    dispatch({
      type: 'pairDevice/setIsSwitchOn',
      payload: { value, switchType: addressType },
    })
  }

  const onAddressChange = (value: string) => {
    dispatch({ type: 'pairDevice/setAddress', payload: { value, addressType } })
  }

  const isValidRow = () => {
    if (isAdvanced) {
      return isAddressValid(address) && isPortValid(port)
    } else {
      return (
        isAddressValid(address) &&
        isPortValid(vcPort) &&
        isPortValid(beaconPort)
      )
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
        <TamaguiSwitch
          isSwitchOn={isSwitchOnResult}
          onSwitchChange={onSwitchChange}
        />
      </YStack>
      <YStack space={'$2'} flexBasis={0} flexGrow={isAdvanced ? 5 : 4}>
        <Text size={13} color={'#647084'} weight={'semibold'}>
          {addressType} Address
        </Text>
        <Input value={address} onChangeText={onAddressChange} />
      </YStack>
      {isAdvanced === true && <PortInput port={port} portType={portType} />}
      {isAdvanced === false && <PortInput port={vcPort} portType={VC} />}
      {isAdvanced === false && (
        <PortInput port={beaconPort} portType={BEACON} />
      )}
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
