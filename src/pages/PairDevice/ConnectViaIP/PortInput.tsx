import { Input, Text } from '@status-im/components'
import { useDispatch } from 'react-redux'
import { YStack } from 'tamagui'

type PortInputProps = {
  portType: string
  port: string
}

const PortInput = ({ portType, port }: PortInputProps) => {
  const dispatch = useDispatch()

  const onPortChange = (value: string) => {
    if (isNaN(Number(value))) {
      return
    }

    dispatch({ type: 'pairDevice/setPort', payload: { value, portType } })
  }

  return (
    <YStack space={'$2'} flexBasis={0} flexGrow={3}>
      <Text size={13} color={'#647084'} weight={'semibold'}>
        {portType} Port
      </Text>
      <Input value={port} onChangeText={onPortChange} />
    </YStack>
  )
}

export default PortInput
