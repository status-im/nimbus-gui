import { Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
import { Link } from 'react-router-dom'

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
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <XStack space={'$3'}>
            <NimbusText />
            {!subtitle && <BetaTag />}
          </XStack>
        </Link>
        <Text size={19} color="#647084">
          {subtitle}
        </Text>
      </YStack>
    </XStack>
  )
}

export default NimbusLogo
