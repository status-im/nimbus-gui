import { Input } from '@status-im/components'
import { SearchIcon } from '@status-im/icons'

type InputSearchProps = {
  value: string
  setValue: (value: string) => void
}
const InputSearch = ({ value, setValue }: InputSearchProps) => {
  return (
    <>
      <Input
        placeholder="Search Validators"
        value={value}
        onChangeText={setValue}
        icon={<SearchIcon size={20} />}
        onClear={() => setValue('')}
        size={40}
        // button={{
        //     label: 'Confirm',
        //     onPress: () => alert('Confirmed!'),
        // }}
      />
    </>
  )
}
export default InputSearch
