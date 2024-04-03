import { Text } from '@status-im/components'
import { Stack, XStack, YStack } from 'tamagui'

const DiamondCard = () => {
  return (
    <YStack
      backgroundColor={'#2A4AF5'}
      style={{
        padding: '8px 12px',
        borderRadius: '16px',
        height: 'auto',
      }}
    >
      <Stack style={{ marginBottom: '8px' }}>
        <Text size={15} weight={'semibold'} color={'#FFF'}>
          💎 Diamond Hands
        </Text>
      </Stack>
      <Text size={27} weight={'semibold'} color={'#FFF'}>
        $0.00
      </Text>
      <XStack space={'$1.5'} alignItems={'center'}>
        <Text size={13} color={'#bac7fb'}>
          0%
        </Text>
        <Text size={13} color={'#bac7fb'}>
          |
        </Text>
        <Text size={13} color={'#bac7fb'}>
          $0
        </Text>
      </XStack>
    </YStack>
  )
}

export default DiamondCard
