import { Separator, XStack, YStack } from 'tamagui'
import { useState } from 'react'
import { Button, Input, Text } from '@status-im/components'
import { SettingsIcon, ClearIcon } from '@status-im/icons'
import { useSelector } from 'react-redux'

import InputsRow from './InputsRow'
import { RootState } from '../../../redux/store'
import { BEACON, NODE, VALIDATOR_CLIENT, VC } from '../../../constants'

const ConnectViaIP = () => {
  const [apiToken, setApiToken] = useState('')
  const [isAdvanced, setIsAdvanced] = useState(false)
  const {
    beaconPort,
    vcPort,
    nodeAddress,
    beaconAddress,
    vcAddress,
    isBeaconSwitchOn,
    isVcSwitchOn,
    isBeaconChecked,
    isVcChecked,
  } = useSelector((state: RootState) => state.pairDevice)

  const changeApiToken = (value: string) => {
    setApiToken(value)
  }

  const onAdvancedClickHandler = () => {
    setIsAdvanced(state => !state)
  }

  return (
    <YStack space={'$3'} maxWidth={'100%'}>
      <XStack style={{ justifyContent: 'space-between' }}>
        <Text size={19} weight={'semibold'} color="#09101C">
          Connect via IP
        </Text>
        <Button
          variant={isAdvanced ? 'darkGrey' : 'grey'}
          size={32}
          icon={<SettingsIcon size={20} />}
          onPress={onAdvancedClickHandler}
        >
          Advanced
        </Button>
      </XStack>
      {isAdvanced ? (
        <YStack space={'$3'}>
          <InputsRow
            addressType={VALIDATOR_CLIENT}
            portType={VC}
            address={vcAddress}
            port={vcPort}
            isAdvanced={isAdvanced}
            isSwitchOn={isVcSwitchOn}
            isChecked={isVcChecked}
          />
          <InputsRow
            addressType={BEACON}
            portType={BEACON}
            address={beaconAddress}
            port={beaconPort}
            isAdvanced={isAdvanced}
            isSwitchOn={isBeaconSwitchOn}
            isChecked={isBeaconChecked}
          />
        </YStack>
      ) : (
        <InputsRow
          addressType={NODE}
          address={nodeAddress}
          port={''}
          portType={''}
          isAdvanced={isAdvanced}
        />
      )}
      <Separator borderColor={'#e3e3e3'} />
      <YStack space={'$2'}>
        <Text size={13} color={'#647084'} weight={'semibold'}>
          API Token
        </Text>
        <Input
          placeholder={'*****_*******_******'}
          icon={
            <ClearIcon
              size={16}
              color="#A1ABBD"
              onClick={() => changeApiToken('')}
              style={{ cursor: 'pointer' }}
            />
          }
          value={apiToken}
          onChangeText={changeApiToken}
        />
      </YStack>
    </YStack>
  )
}

export default ConnectViaIP
