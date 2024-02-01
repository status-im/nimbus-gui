import { Text } from '@status-im/components'
import { Stack, YStack } from 'tamagui'

type ValidatorDataCardProps = {
  title: string
  value: string
}

const ValidatorDataCard = ({ title, value }: ValidatorDataCardProps) => {
  return (
    <Stack
      style={{
        border: '0.5px solid #DCE0E5',
        flexGrow: '1',
        borderRadius: '16px',
        padding: '10px',
      }}
    >
      <YStack>
        <Text size={15} weight={'semibold'}>
          {title}
        </Text>
        <Text size={27} weight={'semibold'}>
          {value}
        </Text>
      </YStack>
    </Stack>
  )
}

export default ValidatorDataCard
