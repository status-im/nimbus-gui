import { Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

import NimbusLogoMark from './NimbusLogoMark'
import NimbusText from '../General/NimbusText'
import BetaTag from './BetaTag'

type NimbusLogoProps = {
  subtitle?: string
}

const NimbusLogo = ({ subtitle }: NimbusLogoProps) => {
  return (
    <XStack space={'$3'} className={subtitle ? '' : 'nimbus-logo'}>
      <NimbusLogoMark />
      <YStack style={{ paddingTop: '2px' }}>
        <XStack space={'$2'} alignItems="flex-end">
          <NimbusText />
          {!subtitle && <BetaTag />}
        </XStack>
        <Text size={19} color="#647084">
          {subtitle}
        </Text>
      </YStack>
    </XStack>
  )
}

export default NimbusLogo
