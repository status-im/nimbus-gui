import { Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
import { AddSmallIcon } from '@status-im/icons'
const AddValidatorButton = () => {
  return (
    <YStack
      backgroundColor={'#757e8c'}
      style={{
        padding: '8px 12px',
        borderRadius: '16px',
        flexGrow: '1',
        height: 'max-fit',
      }}
    >
      <XStack
        style={{ marginBottom: '8px' }}
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        space="$2"
      >
        <AddSmallIcon size={20} color="#fff"></AddSmallIcon>
        <Text size={19} color={'#FFF'}>
          Add Validator
        </Text>
      </XStack>
    </YStack>
  )
}

export default AddValidatorButton
