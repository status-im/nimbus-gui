import { Checkbox, Input, Text } from '@status-im/components'
import { useState } from 'react'
import { Stack, Switch, XStack, YStack } from 'tamagui'

const ClientAddressRow = () => {
  const [isBeaconSwitchOn, setIsBeaconSwitchOn] = useState(false)
  const [inputAdress, setInputAdress] = useState('')
  const [vcPort, setVcPort] = useState('')
  const [isClientAddressChecked, setIsClientAddressChecked] = useState(false)

  return (
    <YStack>
      <XStack justifyContent={'space-between'}>
        <YStack space={'$2'}>
          <YStack>
            <Text size={13} color={'#647084'} weight={'semibold'}>
              {' '}
              Protocol{' '}
            </Text>
            <Text size={11} color={'#647084'} weight={'regular'}>
              {' '}
              (HTTP/HTTPS)
            </Text>
          </YStack>
          <Switch
            size="$1"
            style={isBeaconSwitchOn ? { backgroundColor: '#2A4AF5' } : { backgroundColor: 'grey' }}
            checked={isBeaconSwitchOn}
            onCheckedChange={() => setIsBeaconSwitchOn(prev => !prev)}
          >
            <Switch.Thumb
              style={{
                right: 7,
                bottom: 3,
                backgroundColor: '#fff',
                height: '16px',
                width: '16px',
              }}
            />
          </Switch>
        </YStack>
        <YStack space={'$2'}>
          <Text size={11} color={'#647084'} weight={'regular'}>
            Validator Client Address
          </Text>
          <Input
            placeholder={''}
            value={inputAdress}
            onChangeText={e => {
              setInputAdress(e)
            }}
          />
        </YStack>

        <YStack space={'$2'}>
          <Text size={11} color={'#647084'} weight={'regular'}>
            VC Port
          </Text>
          <Input
            placeholder={''}
            value={vcPort}
            onChangeText={e => {
              setVcPort(e)
            }}
          />
        </YStack>
        <Stack
          style={{ alignItems: 'center', justifyContent: 'center' }}
          height={'100%'}
          marginTop={'10px'}
          width={'fit-content'}
        >
          <Checkbox
            id="checkforaddress"
            variant="outline"
            selected={isClientAddressChecked}
            onCheckedChange={() => setIsClientAddressChecked(prev => !prev)}
            size={20}
          />
        </Stack>
      </XStack>
      <XStack></XStack>
    </YStack>
  )
}

export default ClientAddressRow
