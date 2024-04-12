import { Avatar, Text } from '@status-im/components'
import { Stack, XStack, YStack } from 'tamagui'
import NimbusLogoMark from '../Logos/NimbusLogoMark'

type TitleLogoProps = {
  subtitle?: string
}

const TitleLogo = ({ subtitle }: TitleLogoProps) => {
  return (
    <XStack space={'$2'}>
      <Stack style={{ marginTop: '3px' }}>
        <Avatar
          type="icon"
          size={48}
          backgroundColor="white"
          icon={<NimbusLogoMark />}
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
