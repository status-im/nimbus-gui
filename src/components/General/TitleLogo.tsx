import { Avatar, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

import NimbusLogoMark from '../Logos/NimbusLogoMark'
import NimbusText from './NimbusText'

type TitleLogoProps = {
  subtitle?: string
}

const TitleLogo = ({ subtitle }: TitleLogoProps) => {
  return (
    <XStack space={'$2'}>
      <Avatar
        type="icon"
        size={48}
        backgroundColor="white"
        icon={<NimbusLogoMark />}
      />
      <YStack>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <NimbusText />
        </div>
        <Text size={19} color="#647084">
          {subtitle}
        </Text>
      </YStack>
    </XStack>
  )
}

export default TitleLogo
