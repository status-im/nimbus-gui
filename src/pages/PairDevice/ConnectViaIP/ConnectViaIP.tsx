import { Separator, XStack, YStack } from 'tamagui'
import { useState } from 'react'
import { Button, Input, Text } from '@status-im/components'
import { SettingsIcon, ClearIcon } from '@status-im/icons'
import { useSelector } from 'react-redux'

import AddressPortInputs from './AddressAndPortInputs'
import { RootState } from '../../../redux/store'

const ConnectViaIP = () => {
  const [apiToken, setApiToken] = useState('')
  const [isAdvanced, setIsAdvanced] = useState(false)
  const { beaconPort, vcPort, nodeAddress, beaconAddress, vcAddress } = useSelector(
    (state: RootState) => state.pairDevice,
  )

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
          <AddressPortInputs
            addressType={'Validator Client'}
            portType={'VC'}
            address={vcAddress}
            port={vcPort}
            isAdvanced={isAdvanced}
          />
          <AddressPortInputs
            addressType={'Beacon'}
            portType={'Beacon'}
            address={beaconAddress}
            port={beaconPort}
            isAdvanced={isAdvanced}
          />
        </YStack>
      ) : (
        <AddressPortInputs addressType={'Node'} address={nodeAddress} />
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
