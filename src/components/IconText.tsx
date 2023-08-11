import { Paragraph, XStack } from 'tamagui'
import Icon from './Icon'

type IconTextProps = {
  icon: string
  children: string
}

const IconText = ({ icon, children, ...props }: IconTextProps) => {
  return (
    <XStack
      style={{
        alignItems: 'center',
      }}
      space={'$2'}
    >
      <Icon src={icon} />
      <Paragraph {...props} color={'#000000'} fontWeight={'bold'}>
        {children}
      </Paragraph>
    </XStack>
  )
}

export default IconText
