import { XStack } from 'tamagui'
import Icon from './Icon'
import { Text } from '@status-im/components'

type IconTextProps = {
  icon: string
  children: string
  weight?: 'regular' | 'medium' | 'semibold'
}

const IconText = ({ icon, children, weight }: IconTextProps) => {
  return (
    <XStack
      style={{
        alignItems: 'center',
      }}
      space={'$2'}
    >
      <Icon src={icon} />
      <Text size={13} color={'#000000'} weight={weight}>
        {children}
      </Text>
    </XStack>
  )
}

export default IconText
