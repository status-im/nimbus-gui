import { Text } from '@status-im/components'
import { DisconnectIcon, AdvancedIcon, ExternalIcon } from '@status-im/icons'
import { Stack, YStack } from 'tamagui'

import { VALIDATOR_SETTINGS_CARDS_TITLES } from '../../../../constants'

export type CardTitle = (typeof VALIDATOR_SETTINGS_CARDS_TITLES)[number]

type ValidatorSettingCardProps = {
  title: CardTitle
}

const ValidatorSettingCard = ({ title }: ValidatorSettingCardProps) => {
  const getIcon = {
    Exit: <DisconnectIcon size={20} />,
    Migrate: <ExternalIcon size={20} />,
    Advanced: <AdvancedIcon size={20} />,
  }

  return (
    <YStack alignItems="center" cursor="pointer">
      <Stack
        style={{
          border: '0.5px solid #DCE0E5',
          borderRadius: '16px',
          padding: '10px',
          width: 'fit-content',
        }}
      >
        {getIcon[title as keyof typeof getIcon]}
      </Stack>
      <Text size={15} weight="semibold" color="#647084">
        {title}
      </Text>
    </YStack>
  )
}

export default ValidatorSettingCard
