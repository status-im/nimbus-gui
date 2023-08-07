import { Paragraph, XStack } from 'tamagui'
import { Icon } from '../Icon/Icon'

const IconText = ({ icon, text, ...props }) => {
  return (
    <XStack
      style={{
        alignItems: 'center',
      }}
      space={'$2'}
    >
      <Icon source={icon} width={16} height={16} />
      <Paragraph {...props} color={'#000000'}>
        {text}
      </Paragraph>
    </XStack>
  )
}

export default IconText
