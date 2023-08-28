import { Input, XStack, YStack } from 'tamagui'
import BorderBox from '../../../components/General/BorderBox'
import { Text } from '@status-im/components'

const PasswordFields = () => {
  return (
    <XStack space={'$2'} style={{ justifyContent: 'space-between' }}>
      <YStack space={'$2'}>
        <Input placeholder="Password" />
        <Input placeholder="Confirm Password" />
      </YStack>
      <BorderBox>
        <Text size={15} weight={'semibold'}>
          Download Key Files
        </Text>
      </BorderBox>
    </XStack>
  )
}

export default PasswordFields
