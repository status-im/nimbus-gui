import { XStack } from 'tamagui'
import BetaTag from './BetaTag'
import './NimbusLogo.css'
import NimbusLogoMark from './NimbusLogoMark'

const NimbusLogo = () => {
  return (
    <XStack
      style={{
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
      space={'$3'}
    >
      <NimbusLogoMark />
      <img src={'/icons/nimbus.svg'} alt="marks" />
      <BetaTag />
    </XStack>
  )
}

export default NimbusLogo
