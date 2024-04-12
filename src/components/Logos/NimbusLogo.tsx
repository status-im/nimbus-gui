import { XStack } from 'tamagui'

import BetaTag from './BetaTag'
import NimbusLogoMark from './NimbusLogoMark'
import NimbusText from '../General/NimbusText'
import './NimbusLogo.css'

const NimbusLogo = () => {
  return (
    <XStack
      style={{
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
      className="nimbus-logo"
      space={'$3'}
    >
      <NimbusLogoMark />
      <NimbusText />
      <BetaTag />
    </XStack>
  )
}

export default NimbusLogo
