import NimbusLogo from '../Logos/NimbusLogo'
import TagContainer, { SelectedTag } from './TagContainer'

type HeaderProps = {
  selectedTag: SelectedTag
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
      className="header-container"
    >
      <NimbusLogo />
      <TagContainer selectedTag={selectedTag} />
    </div>
  )
}

export default Header
