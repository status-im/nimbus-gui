import { Text } from '@status-im/components'

type TitleProps = {
  color?: string
  children: string
}

const Title = ({ color, children }: TitleProps) => {
  return (
    <Text size={27} weight={'medium'} color={color}>
      {children}
    </Text>
  )
}

export default Title
