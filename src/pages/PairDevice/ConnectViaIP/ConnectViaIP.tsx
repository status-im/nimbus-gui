import { Separator, XStack, YStack } from 'tamagui'
import { useState } from 'react'
import { Button, Input, Text } from '@status-im/components'
import { SettingsIcon, ClearIcon } from '@status-im/icons'

import AddressPortInputs from './AddressAndPortInputs'

const ConnectViaIP = () => {
  const [apiToken, setApiToken] = useState('')
  const [isAdvanced, setIsAdvanced] = useState(false)

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
            isAdvanced={isAdvanced}
          />
          <AddressPortInputs addressType={'Beacon'} portType={'Beacon'} isAdvanced={isAdvanced} />
        </YStack>
      ) : (
        <AddressPortInputs addressType={'Node'} portType={''} isAdvanced={isAdvanced} />
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
