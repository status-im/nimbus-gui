import { XStack } from 'tamagui'
import NimbusLogo from '../Logos/NimbusLogo'
import TagContainer from './TagContainer'

const Header = () => {
  return (
    <XStack style={{ justifyContent: 'space-between' }} py={'25px'}>
      <NimbusLogo />
      <TagContainer />
    </XStack>
  )
}

export default Header
