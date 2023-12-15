import { Avatar, Text } from '@status-im/components'
import { Stack, XStack, YStack } from 'tamagui'

type TitleLogoProps = {
  subtitle?: string
}

const TitleLogo = ({ subtitle }: TitleLogoProps) => {
  return (
    <XStack space={'$2'}>
      <Stack style={{ marginTop: '3px' }}>
        <Avatar
          type="icon"
          size={32}
          icon={
            <img src={'/icons/dashboard-logo.png'} alt="dashboard-logo" style={{ width: '100%' }} />
          }
        />
      </Stack>
      <YStack>
        <Text size={27} color="#09101C" weight={'semibold'}>
          Nimbus
        </Text>
        <Text size={19} color="#647084">
          {subtitle}
        </Text>
      </YStack>
    </XStack>
  )
}

export default TitleLogo
