import { YStack } from 'tamagui'
import { Text } from '@status-im/components'
import Icon from '../../../../components/General/Icon'

type OSCardProps = {
  name: string
  icon: string
  onClick?: () => void
  isSelected?: boolean
}

const OSCard = ({ name, icon, onClick, isSelected }: OSCardProps) => {
  return (
    <YStack className={`osCard ${isSelected ? 'selected' : ''}`} onPress={onClick}>
      <Text size={19} weight={'semibold'}>
        {name}
      </Text>
      <Icon src={icon} width={90} height={110} />
    </YStack>
  )
}

export default OSCard
