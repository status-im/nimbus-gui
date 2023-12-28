import { Separator, XStack, YStack } from 'tamagui'
import { useState } from 'react'
import { Button, Input, Text } from '@status-im/components'
import { SettingsIcon, ClearIcon } from '@status-im/icons'

import AddressPortInputs from './AddressAndPortInputs'

const ConnectViaIP = () => {
  const [encryptedPassword, setEncryptedPassword] = useState('')
  const [isAdvanced, setIsAdvanced] = useState(false)
  const [beaconPort, setBeaconPort] = useState('5052')
  const [vcPort, setVcPort] = useState('9000')
  const [nodeAddress, setNodeAddress] = useState('http://')
  const [beaconAddress, setBeaconAddress] = useState('http://')
  const [vcAddress, setVcAddress] = useState('http://')

  const changeEncryptedPasswordHandler = (value: string) => {
    setEncryptedPassword(value)
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
        <>
          <AddressPortInputs addressType="Beacon" portType="Beacon" />
          <AddressPortInputs addressType="Validator Client" portType="VC" />
        </>
      ) : (
        <AddressPortInputs addressType="Node" portType="VC" isAdvanced={isAdvanced} />
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
              onClick={() => setEncryptedPassword('')}
              style={{ cursor: 'pointer' }}
            />
          }
          value={encryptedPassword}
          onChangeText={changeEncryptedPasswordHandler}
        />
      </YStack>
    </YStack>
  )
}

export default ConnectViaIP
