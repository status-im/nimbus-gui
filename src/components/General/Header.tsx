import NimbusLogo from '../Logos/NimbusLogo'
import TagContainer from './TagContainer'

type HeaderProps = {
  selectedTag: 'pair' | 'create' | 'connect'
}

const Header = ({ selectedTag }: HeaderProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '25px',
        marginTop: '4.4rem',
      }}
    >
      <NimbusLogo />
      <TagContainer selectedTag={selectedTag} />
    </div>
  )
}

export default Header
