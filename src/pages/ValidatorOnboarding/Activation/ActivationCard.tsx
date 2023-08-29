import { YStack } from 'tamagui'
import { Text } from '@status-im/components'

type ActivationCardProps = {
  text: string
  value: string
}

const ActivationCard = ({ text, value }: ActivationCardProps) => {
  return (
    <YStack
      style={{
        borderRadius: '16px',
        border: '1px solid rgba(0, 0, 0, 0.15)',
        padding: '12px 16px',
        backgroundColor: '#FFF',
        width: '100%',
      }}
    >
      <Text size={13} weight={'semibold'}>
        {text}
      </Text>
      <Text size={19} color="blue" weight={'semibold'}>
        {value}
      </Text>
    </YStack>
  )
}

export default ActivationCard
