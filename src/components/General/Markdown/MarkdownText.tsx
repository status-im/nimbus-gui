import { Text } from '@status-im/components'
import { Stack } from 'tamagui'

const MarkdownText = (props: any) => {
  return (
    <Stack style={{ marginTop: '10px' }}>
      <Text size={15} color="#647084">
        {props.children}
      </Text>
    </Stack>
  )
}

export default MarkdownText
