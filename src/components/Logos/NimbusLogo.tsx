import { XStack } from 'tamagui'
import BetaTag from './BetaTag'
import './NimbusLogo.css'

const NimbusLogo = () => {
  return (
    <XStack
      style={{
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
      space={'$3'}
    >
      <img src={'/icons/marks.svg'} alt="marks" className="nimbus-logomark" />
      <img src={'/icons/nimbus.svg'} alt="marks" />
      <BetaTag />
    </XStack>
  )
}

export default NimbusLogo
