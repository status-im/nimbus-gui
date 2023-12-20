import { Separator, XStack, YStack } from 'tamagui'
import { useState } from 'react'
import { Button, Input, Text } from '@status-im/components'
import { SettingsIcon, ClearIcon } from '@status-im/icons'

import AddressPortInputs from './AddressAndPortInputs'

const ConnectViaIP = () => {
  const [encryptedPassword, setEncryptedPassword] = useState('')

  const changeEncryptedPasswordHandler = (value: string) => {
    setEncryptedPassword(value)
  }

  return (
    <YStack space={'$3'} maxWidth={'100%'}>
      <XStack style={{ justifyContent: 'space-between' }}>
        <Text size={19} weight={'semibold'} color="#09101C">
          Connect via IP
        </Text>
        <Button variant="grey" size={24} icon={<SettingsIcon size={20} />}>
          Advanced
        </Button>
      </XStack>
      <AddressPortInputs addressType="Validator Client" portType="VC" />
      <AddressPortInputs addressType="Beacon" portType="Beacon" />
      <Separator borderColor={'#e3e3e3'} />
      <YStack space={'$2'}>
        <Text size={11} color={'#647084'}>
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
