import { Stack, YStack } from 'tamagui'
import Icon from '../../../components/General/Icon'
import { Text } from '@status-im/components'

 
type OsCardProps = {
  name: string
  icon: string
  onClick?: () => void
  isSelected?: boolean
}
const OsCard = ({ name, icon, onClick, isSelected }: OsCardProps) => {
  return (
    <YStack
      style={{
        backgroundColor: isSelected ? '#2A4AF50D' : 'none',
        border: isSelected ? '1px solid #2A4AF566' : '1px solid rgba(0, 0, 0, 0.15);',
        borderRadius: '16px',
        padding: '12px 16px',
        width: '33%',
      }}
      space={'$12'}
      onPress={onClick}
    >
      <Stack>
        <Text size={27} weight={'semibold'}>
          {name}
        </Text>
      </Stack>
      <Icon src={icon} width={100} height={100} />
    </YStack>
  )
}
export default OsCard
