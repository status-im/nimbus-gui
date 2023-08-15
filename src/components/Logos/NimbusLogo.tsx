import { XStack } from 'tamagui'
import BetaTag from './BetaTag'

const NimbusLogo = () => {
  return (
    <XStack
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      space={'$2'}
    >
      <img src={'/icons/marks.svg'} alt="marks" />
      <img src={'/icons/nimbus.svg'} alt="marks" />
      <BetaTag />
    </XStack>
  )
}

export default NimbusLogo
