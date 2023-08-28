import { XStack, YStack } from 'tamagui'
import BorderBox from '../../../components/General/BorderBox'
import { Button, Text } from '@status-im/components'
import LabelInputField from '../../../components/General/LabelInputField'

const PasswordFields = () => {
  const generateKeyFilesHandler = () => {}

  return (
    <YStack space={'$2'}>
      <XStack space={'$2'} style={{ justifyContent: 'space-between' }}>
        <YStack space={'$1'}>
          <LabelInputField labelText="Encryption Password" placeholderText="******************" />
          <LabelInputField
            labelText="Confirm Encryption Password"
            placeholderText="******************"
          />
        </YStack>
        <BorderBox>
          <Text size={15} weight={'semibold'}>
            Download Key Files
          </Text>
        </BorderBox>
      </XStack>
      <Button onPress={generateKeyFilesHandler}>Generate Key files</Button>
    </YStack>
  )
}

export default PasswordFields
