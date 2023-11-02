import { Stack, YStack } from 'tamagui'
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
    <YStack
      style={{
        backgroundColor: isSelected ? '#2A4AF50D' : 'none',
        border: isSelected ? '1px solid #2A4AF566' : '1px solid rgba(0, 0, 0, 0.15);',
        borderRadius: '16px',
        padding: '12px 16px',
        width: '32%',
        cursor: 'pointer',
      }}
      space={'$8'}
      onPress={onClick}
    >
      <Stack>
        <Text size={19} weight={'semibold'}>
          {name}
        </Text>
      </Stack>
      <Icon src={icon} width={42} height={52} />
    </YStack>
  )
}

export default OSCard
