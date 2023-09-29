import { Stack, YStack } from 'tamagui'
import ValidatorListItem from './ValidatorListItem'
import InputSearch from './SearchInput'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCountOfValidators } from '../../../redux/RightSidebar/slice'

const ValidatorsList = () => {
  const dispatch = useDispatch()

  const [searchValue, setSearchValue] = useState('')
  const validators = [
    {
      name: 'Validator 1',
      avatarKey: '37880sfsef38fsb',
      selected: true,
      isAvatarChipIncluded: true,
      isVerified: true,
    },
    { name: 'Validator 2', avatarKey: 'hs880sfsef38fsb', isVerified: true },
    { name: 'Validator 3', avatarKey: '3nh880sfsef38fsb', isAvatarChipIncluded: true },
    { name: 'Validator 4', avatarKey: 'fh7880sfsef38fsb' },
    { name: 'Validator 5', avatarKey: 'j77880s..fsef38fsb', isVerified: true },
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
