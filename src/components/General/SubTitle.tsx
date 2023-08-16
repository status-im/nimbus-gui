import { Text } from '@status-im/components'

type SubTitleProps = {
  color?: string
  children: string
}

const SubTitle = ({ color, children }: SubTitleProps) => {
  return (
    <Text size={15} color={color}>
      {children}
    </Text>
  )
}

export default SubTitle
