import { Input } from '@status-im/components'
import { SearchIcon } from '@status-im/icons'

type InputSearchProps = {
  value: string
  changeSearchValue: (value: string) => void
}

const InputSearch = ({ value, changeSearchValue }: InputSearchProps) => {
  return (
    <Input
      placeholder="Search Validators"
      value={value}
      onChangeText={changeSearchValue}
      icon={<SearchIcon size={20} />}
      onClear={() => changeSearchValue('')}
      size={40}
    />
  )
}

export default InputSearch
