// create component for this file

import { Stack, YStack } from "tamagui"
import ValidatorListItem from "./ValidatorListItem"
import InputSearch from "./SearchInput"
import { useState } from "react"

const ValidatorsList = () => {
    const [searchValue, setSearchValue] = useState('')

    return (

        <Stack>
            <InputSearch value={searchValue} setValue={setSearchValue} />
            <YStack space={'$1'}>
                <ValidatorListItem name={'Validator 1'} avatarKey={'37880sfsef38fsb'} selected={true} isAvatarChipIncluded isVerified />
                <ValidatorListItem name={'Validator 2'} avatarKey={'hs880sfsef38fsb'} isVerified />
                <ValidatorListItem name={'Validator 3'} avatarKey={'3nh880sfsef38fsb'} isAvatarChipIncluded />
                <ValidatorListItem name={'Validator 4'} avatarKey={'fh7880sfsef38fsb'} />
            </YStack>
        </Stack>
    )
}

export default ValidatorsList