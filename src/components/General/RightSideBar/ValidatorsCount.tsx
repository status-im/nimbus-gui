import { Text } from '@status-im/components'
import { useSelector } from 'react-redux'
import { XStack } from 'tamagui'

const ValidatorsCount = () => {
  const countOfValidators = useSelector((state: any) => state.rightSidebar.countOfValidators)

  return (
    <XStack justifyContent={'space-between'} width={'85%'}>
      <Text size={19} weight={'semibold'}>
        Validators
      </Text>
      <Text size={19} weight={'semibold'}>
        {countOfValidators}
      </Text>
    </XStack>
  )
}

export default ValidatorsCount
