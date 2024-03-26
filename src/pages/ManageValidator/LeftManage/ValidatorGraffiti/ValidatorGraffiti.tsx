import { Text } from '@status-im/components'
import { Stack, XStack } from 'tamagui'

const ValidatorGraffiti = () => {
  return (
    <Stack
      style={{
        border: '0.5px solid #DCE0E5',
        borderRadius: '16px',
        padding: '20px',
      }}
    >
      <XStack space="$4">
        <Text size={15} weight={'semibold'} color="#647084">
          Validator Graffiti
        </Text>
        <Text size={15} color="#647084">
          No Graffiti has been set yet.
        </Text>
      </XStack>
    </Stack>
  )
}

export default ValidatorGraffiti
