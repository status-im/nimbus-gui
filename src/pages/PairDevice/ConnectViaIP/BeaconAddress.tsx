import { Checkbox, Input, Text } from '@status-im/components'
import { useState } from 'react'
import { Stack, Switch, XStack, YStack } from 'tamagui'

type BeaconAddressProps = {
  addressType: string
  portType: string
}

const BeaconAddress = ({ addressType, portType }: BeaconAddressProps) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false)
  const [address, setAddress] = useState('')
  const [port, setPort] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  return (
    <YStack>
      <XStack justifyContent={'space-between'}>
        <YStack space={'$2'}>
          <YStack>
            <Text size={13} color={'#647084'} weight={'semibold'}>
              Protocol
            </Text>
            <Text size={11} color={'#647084'} weight={'regular'}>
              (HTTP/HTTPS)
            </Text>
          </YStack>

          <Switch
            size="$1"
            style={isSwitchOn ? { backgroundColor: '#2A4AF5' } : { backgroundColor: 'grey' }}
            checked={isSwitchOn}
            onCheckedChange={() => setIsSwitchOn(prev => !prev)}
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
            {addressType} Address
          </Text>
          <Input placeholder={''} value={address} onChangeText={e => setAddress(e)} />
        </YStack>

        <YStack space={'$2'}>
          <Text size={11} color={'#647084'} weight={'regular'}>
            {portType} Port
          </Text>
          <Input value={port} onChangeText={e => setPort(e)} />
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
            selected={isChecked}
            onCheckedChange={() => setIsChecked(prev => !prev)}
            size={20}
          />
        </Stack>
      </XStack>
      <XStack></XStack>
    </YStack>
  )
}

export default BeaconAddress
