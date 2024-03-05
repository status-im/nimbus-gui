import { Text } from '@status-im/components'
import { useSelector } from 'react-redux'
import { XStack } from 'tamagui'

import { RootState } from '../../../redux/store'

const ValidatorsCount = () => {
  const countOfValidators = useSelector(
    (state: RootState) => state.rightSidebar.countOfValidators,
  )

  return (
    <XStack justifyContent={'space-between'}>
      <Text size={15} weight={'semibold'}>
        Validators
      </Text>
      <Text size={15} weight={'semibold'}>
        {countOfValidators}
      </Text>
    </XStack>
  )
}

export default ValidatorsCount
