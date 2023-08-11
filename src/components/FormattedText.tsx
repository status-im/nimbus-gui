import { Text } from '@status-im/components'

export type TextElement = {
  text: string
  bold?: boolean
  italic?: boolean
  weight?: 'regular' | 'medium' | 'bold'
}

type FormattedTextProps = {
  textElements: TextElement[]
  color?: string
  size: 27 | 19 | 15 | 13 | 11
}

const FormattedText = ({ textElements, color, size }: FormattedTextProps) => {
  return (
    <>
      {textElements.map((textElement, index) => (
        <Text key={index} size={size} color={color} weight={textElement.weight}>
          {textElement.text}
        </Text>
      ))}
    </>
  )
}

export default FormattedText
