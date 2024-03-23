import { Text } from '@status-im/components'
import { DisconnectIcon, AdvancedIcon, ExternalIcon } from '@status-im/icons'
import { Stack, XStack, YStack } from 'tamagui'
type IconKey = 'Exit Validator' | 'Migrate Validator' | 'Advanced'

type ValidatorSettingCardProps = {
  title: IconKey
}

const ValidatorSettingCard = ({ title }: ValidatorSettingCardProps) => {
  const getIcon = {
    'Exit Validator': () => <DisconnectIcon size={20}></DisconnectIcon>,
    'Migrate Validator': () => <ExternalIcon size={20}></ExternalIcon>,

    Advanced: () => <AdvancedIcon size={20}></AdvancedIcon>,
  }
  return (
    <YStack alignItems="center">
      <Stack
        style={{
          border: '0.5px solid #DCE0E5',
          borderRadius: '16px',
          padding: '10px',
          width: 'fit-content',
        }}
      >
        <XStack>{getIcon[title]()}</XStack>
      </Stack>
      <Text size={15} weight="semibold" color="#647084">
        {title}
      </Text>
    </YStack>
  )
}

export default ValidatorSettingCard
