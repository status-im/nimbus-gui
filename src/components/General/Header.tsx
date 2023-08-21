import { XStack } from 'tamagui'
import NimbusLogo from '../Logos/NimbusLogo'
import TagContainer from './TagContainer'

type HeaderProps = {
  selectedTag: 'pair' | 'create' | 'connect'
}

const Header = ({ selectedTag }: HeaderProps) => {
  return (
    <XStack justifyContent="space-between" py={'25px'} mt={'70px'}>
      <NimbusLogo />
      <TagContainer selectedTag={selectedTag} />
    </XStack>
  )
}

export default Header
