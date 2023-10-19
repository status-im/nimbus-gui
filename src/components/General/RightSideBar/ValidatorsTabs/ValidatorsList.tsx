import { Stack, YStack } from 'tamagui'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setCountOfValidators } from '../../../../redux/RightSidebar/slice'
import ValidatorListItem from './ValidatorListItem'
import InputSearch from './SearchInput'

type Validator = {
  name: string
  validatorAddress: string
  isAvatarChipIncluded?: boolean
  isVerified?: boolean
  selected?: boolean
}

const ValidatorsList = () => {
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()
  const [filteredValidators, setFilteredValidators] = useState([] as Validator[])

  const validators = [
    {
      name: 'Validator 1',
      validatorAddress: 'zQ3asdf9d4Gs0',
      selected: true,
      isAvatarChipIncluded: true,
      isVerified: true,
    },
    { name: 'Validator 2', validatorAddress: 'zQ3asdf9d4Gs0', isVerified: true },
    { name: 'Validator 3', validatorAddress: 'zQ3asdf9d4Gs0', isAvatarChipIncluded: true },
    { name: 'Validator 4', validatorAddress: 'zQ3asdf9d4Gs0' },
    { name: 'Validator 5', validatorAddress: 'zQ3asdf9d4Gs0', isVerified: true },
  ]

  useEffect(() => {
    if (searchValue) {
      const filtered = validators.filter(validator =>
        validator.name.toLowerCase().includes(searchValue.toLowerCase()),
      )
      const filteredCount = filtered.length
      dispatch(setCountOfValidators(filteredCount))
      setFilteredValidators(filtered)
    } else {
      dispatch(setCountOfValidators(validators.length))
      setFilteredValidators(validators)
    }
  }, [searchValue, validators])

  return (
    <Stack>
      <InputSearch value={searchValue} setValue={setSearchValue} />
      <YStack space={'$1'} mt={'16px'}>
        {filteredValidators.map(validator => (
          <ValidatorListItem {...validator} />
        ))}
      </YStack>
    </Stack>
  )
}

export default ValidatorsList
