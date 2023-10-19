import { YStack } from 'tamagui'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setCountOfValidators } from '../../../../redux/RightSidebar/slice'
import ValidatorListItem from './ValidatorListItem'
import InputSearch from './SearchInput'
import { Text } from '@status-im/components'

type Validator = {
  name: string
  validatorAddress: string
  isAvatarChipIncluded?: boolean
  isVerified?: boolean
  selected?: boolean
}

const ValidatorsList = () => {
  const [validators, setValidators] = useState([] as Validator[])
  const [filteredValidators, setFilteredValidators] = useState([] as Validator[])
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    setValidators([
      {
        name: '1',
        validatorAddress: 'zQ3asdf9d4Gs0',
        selected: true,
        isAvatarChipIncluded: true,
        isVerified: true,
      },
      { name: '2', validatorAddress: 'zQ3asdf9d4Gs0', isVerified: true },
      { name: '3', validatorAddress: 'zQ3asdf9d4Gs0', isAvatarChipIncluded: true },
      { name: '4', validatorAddress: 'zQ3asdf9d4Gs0' },
      { name: '5', validatorAddress: 'zQ3asdf9d4Gs0', isVerified: true },
    ])
  }, [])

  useEffect(() => {
    const filtered = validators.filter(validator =>
      validator.name.toLowerCase().includes(searchValue.toLowerCase()),
    )
    setFilteredValidators(filtered)

    const filteredCount = filtered.length
    dispatch(setCountOfValidators(filteredCount))
  }, [searchValue, validators])


  return (
    <YStack>
      <InputSearch value={searchValue} setValue={setSearchValue} />
      <YStack space={'$1'} mt={'16px'}>
        {filteredValidators.map(validator => (
          <ValidatorListItem {...validator} />
        ))}
        {filteredValidators.length === 0 && (
          <Text size={13} weight={'semibold'}>
            No validators found
          </Text>
        )}
      </YStack>
    </YStack>
  )
}

export default ValidatorsList
