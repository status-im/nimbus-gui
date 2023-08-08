import { Text } from 'tamagui'

export type TextElement = {
  text: string
  bold?: boolean
  italic?: boolean
}

type FormattedTextProps = {
  textElements: TextElement[]
  color?: string
  fontSize?: string
}

const FormattedText = ({ textElements, color, fontSize }: FormattedTextProps) => {
  const calculateStyle = (textElement: TextElement) => {
    const isBold = textElement.bold ?? false
    const isItalic = textElement.italic ?? false

    return { fontWeight: isBold ? 'bold' : '', fontStyle: isItalic ? 'italic' : '' }
  }

  return (
    <Text color={color} fontSize={fontSize}>
      {textElements.map((textElement, index) => {
        return (
          <span style={calculateStyle(textElement)} key={index}>
            {textElement.text}
          </span>
        )
      })}
    </Text>
  )
}

export default FormattedText
