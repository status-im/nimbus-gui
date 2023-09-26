import { Input } from "@status-im/components"
import { SearchIcon } from "@status-im/icons"
import { useState } from "react"

const InputSearch = () => {
    const [value, setValue] = useState('')

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