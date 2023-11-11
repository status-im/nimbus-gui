import { Input } from '@status-im/components'
import { SearchIcon } from '@status-im/icons'

type SearchManagementProps = {
  searchValue: string
  changeSearchValue: (value: string) => void
}

const SearchManagement = ({ searchValue, changeSearchValue }: SearchManagementProps) => {
  return (
    <div style={{ width: '100%' }}>
      <Input
        placeholder="Filter Validators"
        value={searchValue}
        onChangeText={changeSearchValue}
        icon={<SearchIcon size={20} />}
        onClear={() => changeSearchValue('')}
        size={40}
      />
    </div>
  )
}

export default SearchManagement
