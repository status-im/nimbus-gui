import { YStack } from 'tamagui'
import Icon from '../../../components/General/Icon'
import { Text } from '@status-im/components'

// make func component

type ExecClientCardProps = {
  name: string
  icon: string
  isComingSoon?: boolean
}
const ExecClientCard = ({ name, icon, isComingSoon }: ExecClientCardProps) => {
  const disabledCardStyle = {
    backgroundColor: '#F5F5F5',
    border: '1px solid #DCE0E5',
    borderRadius: '16px',
    padding: '2px 6px',
  }
  return (
    <YStack
      style={{
        backgroundColor: isComingSoon ? '#F5F5F5' : 'none',
        border: '1px solid #DCE0E5',
        borderRadius: '16px',
        padding: '12px 16px',
        width: '19%',
      }}
      space={'$12'}
    >
      <Text size={27} weight={'semibold'}>
        {name}
      </Text>
      <Icon src={icon} width={100} height={100} />
    </YStack>
  )
}
export default ExecClientCard
