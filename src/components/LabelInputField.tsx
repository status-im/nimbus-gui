import { Input as StatusInput, Text } from '@status-im/components'
import { Label } from 'tamagui'

type LabelInputProps = {
  labelText: string
  placeholderText: string
}

function LabelInputField({ labelText, placeholderText }: LabelInputProps) {
  return (
    <Label flexDirection="column" alignItems="flex-start" my={10} width={'100%'}>
      <Text size={13} weight="regular" color={'#647084'}>
        {labelText}
      </Text>
      <StatusInput placeholder={placeholderText} width={'100%'} />
    </Label>
  )
}

export default LabelInputField
