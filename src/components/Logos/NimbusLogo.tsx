import { XStack } from 'tamagui'

import BetaTag from './BetaTag'
import NimbusLogoMark from './NimbusLogoMark'
import './NimbusLogo.css'

const NimbusLogo = () => {
  return (
    <XStack
      style={{
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '4.4rem',
      }}
      space={'$3'}
    >
      <NimbusLogoMark />
      <img src={'./icons/nimbus.svg'} alt="marks" />
      <BetaTag />
    </XStack>
  )
}

export default NimbusLogo
