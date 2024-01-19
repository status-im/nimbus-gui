import { Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import Icon from '../../../../components/General/Icon'
import './InstallLayout.css'

type OSCardProps = {
  name: string
  icon: string
  onClick?: () => void
  isSelected?: boolean
}
const OSCard = ({ name, icon, onClick, isSelected }: OSCardProps) => {
  return (
    <Stack className={`osCard ${isSelected ? 'selected' : ''}`} onPress={onClick}>
      <Text size={19} weight={'semibold'}>
        {name}
      </Text>
      <Icon src={icon} width={90} height={110} />
    </Stack>
  )
}

export default OSCard
