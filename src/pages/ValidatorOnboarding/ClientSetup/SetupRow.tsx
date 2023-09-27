import { YStack } from 'tamagui'
import { Text } from '@status-im/components'
import { useState } from 'react'

import ValidatorsMenuWithPrice from '../../../components/General/ValidatorsMenuWithPrice'

type SetupRowProps = {
  title: string
}

const SetupRow = ({ title }: SetupRowProps) => {
  const [validatorCount, setValidatorCount] = useState(0)

  const changeValidatorCountHandler = (value: string) => {
    const numberValue = Number(value)
    if (!isNaN(numberValue)) {
      setValidatorCount(numberValue)
    }
  }

  return (
    <YStack space={'$4'}>
      <Text size={19} weight={'semibold'}>
        {title}
      </Text>
      <ValidatorsMenuWithPrice
        validatorCount={validatorCount}
        changeValidatorCountHandler={changeValidatorCountHandler}
        label="How many Validators would you like to run?"
      />
    </YStack>
  )
}
export default SetupRow
