import { Input } from '@status-im/components'
import { SearchIcon } from '@status-im/icons'

type InputSearchProps = {
  searchValue: string
  changeSearchValue: (value: string) => void
}

const SearchValidatorsInput = ({
  searchValue,
  changeSearchValue,
}: InputSearchProps) => {
  return (
    <Input
      placeholder="Search Validators"
      value={searchValue}
      onChangeText={changeSearchValue}
      icon={<SearchIcon size={20} />}
      onClear={() => changeSearchValue('')}
      size={40}
    />
  )
}

export default SearchValidatorsInput
