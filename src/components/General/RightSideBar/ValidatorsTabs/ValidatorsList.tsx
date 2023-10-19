import { Stack, YStack } from 'tamagui'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import ValidatorListItem from './ValidatorListItem'
import { setCountOfValidators } from '../../../../redux/RightSidebar/slice'
import InputSearch from './SearchInput'

const ValidatorsList = () => {
  const dispatch = useDispatch()

  const [searchValue, setSearchValue] = useState('')
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
  const [filteredValidators, setFilteredValidators] = useState(validators)

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
