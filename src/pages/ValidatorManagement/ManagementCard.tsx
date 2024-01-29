import { Text } from '@status-im/components'
import { Separator, Stack, YStack } from 'tamagui'

const ManagementCard = () => {
  return (
    <YStack
      space={'$3'}
      style={{
        border: '1px solid #F0F2F5',
        borderRadius: '16px',
        minWidth: '33%',
      }}
    >
      <Stack style={{ padding: '12px 16px' }}>
        <Text size={15} weight={'semibold'}>
          Validators
        </Text>
      </Stack>
      <Separator borderColor={'#F0F2F5'} />
      <Stack style={{ padding: '12px 16px' }}>
        <Text size={15} weight={'semibold'} color="#647084">
          Total Balance
        </Text>
      </Stack>
      <Separator borderColor={'#F0F2F5'} />
      <Stack style={{ padding: '12px 16px', marginBottom: '16px' }}>
        <Text size={15} weight={'semibold'} color="#647084">
          Total Income
        </Text>
      </Stack>
    </YStack>
  )
}

export default ManagementCard
