import { Stack, XStack, YStack } from 'tamagui'
import Icon from '../../../components/General/Icon'
import { Text } from '@status-im/components'

// make func component

type ExecClientCardProps = {
  name: string
  icon: string
  isSelected?: boolean
  isComingSoon?: boolean
}
const ExecClientCard = ({ name, icon, isSelected, isComingSoon }: ExecClientCardProps) => {
  return (
    <YStack
      style={{
        backgroundColor: isComingSoon ? '#F5F5F5' : isSelected ? '#2A4AF50D' : 'none',
        border: isComingSoon
          ? '1px solid #F5F6F8'
          : isSelected
          ? '1px solid #2A4AF5'
          : '1px solid #DCE0E5',
        borderRadius: '16px',
        padding: '12px 16px',
        width: '19%',
      }}
      space={'$12'}
    >
      <Stack>
        <Text size={27} weight={'semibold'} color={isComingSoon ? '#DCE0E5' : ''}>
          {name}
        </Text>
        {isComingSoon && (
          <XStack
            style={{
              backgroundColor: '#2A4AF5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '3px',
              borderRadius: '67px',
              width: '50%',
            }}
          >
            <Text size={11} color="#fff">
              COMING SOON
            </Text>
          </XStack>
        )}
      </Stack>
      <Icon src={icon} width={100} height={100}  />
    </YStack>
  )
}
export default ExecClientCard
