import { Text } from '@status-im/components'
import { DisconnectIcon, AdvancedIcon, ExternalIcon } from '@status-im/icons'
import { Stack, YStack } from 'tamagui'

type IconKey = 'Exit Validator' | 'Migrate Validator' | 'Advanced'

type ValidatorSettingCardProps = {
  title: IconKey
}

const ValidatorSettingCard = ({ title }: ValidatorSettingCardProps) => {
  const getIcon = {
    'Exit Validator': <DisconnectIcon size={20} />,
    'Migrate Validator': <ExternalIcon size={20} />,
    Advanced: <AdvancedIcon size={20} />,
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
        {getIcon[title]}
      </Stack>
      <Text size={15} weight="semibold" color="#647084">
        {title}
      </Text>
    </YStack>
  )
}

export default ValidatorSettingCard
