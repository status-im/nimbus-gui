import { Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

import NimbusLogoMark from '../Logos/NimbusLogoMark'
import NimbusText from './NimbusText'

type TitleLogoProps = {
  subtitle?: string
}

const TitleLogo = ({ subtitle }: TitleLogoProps) => {
  return (
    <XStack space={'$2'}>
      <NimbusLogoMark />
      <YStack>
        <NimbusText />
        <Text size={19} color="#647084">
          {subtitle}
        </Text>
      </YStack>
    </XStack>
  )
}

export default TitleLogo
