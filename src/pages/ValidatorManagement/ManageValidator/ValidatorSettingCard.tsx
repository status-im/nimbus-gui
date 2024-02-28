import { Text } from '@status-im/components'
import { AddIcon } from '@status-im/icons'
import { Stack, XStack, YStack } from 'tamagui'
type IconKey =
  | 'Exit Validator'
  | 'Migrate Validator'
  | 'Top up Validator'
  | 'Advanced'

type ValidatorSettingCardProps = {
  title: IconKey
}

const ValidatorSettingCard = ({ title }: ValidatorSettingCardProps) => {
  const getIcon = {
    'Exit Validator': () => (
      <AddIcon
        size={20}
        style={{
          padding: '5px',
        }}
      ></AddIcon>
    ),
    'Migrate Validator': () => (
      <AddIcon
        size={20}
        style={{
          padding: '5px',
        }}
      ></AddIcon>
    ),
    'Top up Validator': () => (
      <AddIcon
        size={20}
        style={{
          padding: '5px',
        }}
      ></AddIcon>
    ),
    Advanced: () => (
      <AddIcon
        size={20}
        style={{
          padding: '5px',
        }}
      ></AddIcon>
    ),
  }
  return (
    <Stack
      style={{
        border: '0.5px solid #DCE0E5',
        flexGrow: '1',
        borderRadius: '16px',
        padding: '10px',
      }}
    >
      <XStack space="$2" justifyContent="space-between" padding={'12px'}>
        <Text size={19} weight={'semibold'}>
          {title}
        </Text>
        {getIcon[title]()}
      </XStack>
    </Stack>
  )
}

export default ValidatorSettingCard
