import { XStack } from 'tamagui'
import Icon from './Icon'
import { Text } from '@status-im/components'

type IconTextProps = {
  icon: string
  children: string
}

const IconText = ({ icon, children }: IconTextProps) => {
  return (
    <XStack
      style={{
        alignItems: 'center',
      }}
      space={'$2'}
    >
      <Icon src={icon} />
      <Text size={11} color={'#000000'} weight={"medium"} >
        {children}
      </Text>
    </XStack>
  )
}

export default IconText
