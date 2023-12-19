import { Input as StatusInput, Text } from '@status-im/components'
import { Label } from 'tamagui'
import './LabelInputField.css'

type LabelInputProps = {
  labelText: string
  placeholderText: string
  width?: string
}

const LabelInputField = ({ labelText, placeholderText, width }: LabelInputProps) => {
  return (
    <Label flexDirection="column" alignItems="flex-start" my={10} style={{ width: width }}>
      <Text size={13} weight="semibold" color={'#647084'}>
        {labelText}
      </Text>
      <div className="input-container" style={{ width: width }}>
        <StatusInput placeholder={placeholderText} />
      </div>
    </Label>
  )
}

export default LabelInputField
