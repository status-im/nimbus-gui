import { Stack, XStack, YStack } from 'tamagui'
import { Input as StatusInput, Text } from '@status-im/components'
import { AddIcon, ChevronDownIcon } from '@status-im/icons'
import { useState } from 'react'

type SetupRowProps = {
  title: string
}

const SetupRow = ({ title }: SetupRowProps) => {
  const [validatorCount, setValidatorCount] = useState(0)

  const addValidatorHandler = () => {
    setValidatorCount((state: number) => state + 1)
  }

  const changeValidatorCountHandler = (e: any) => {
    if (!isNaN(e.target.value)) {
      setValidatorCount(Number(e.target.value))
    }
  }

  return (
    <YStack space={'$4'}>
      <Text size={27} weight={'semibold'}>
        {title}
      </Text>
      <XStack justifyContent={'space-between'} width={'80%'}>
        <Stack space={'$2'}>
          <Text size={15} weight="regular" color={'#647084'}>
            How many Validators would you like to run?
          </Text>
          <StatusInput
            icon={<AddIcon size={16} style={{ cursor: 'pointer' }} onClick={addValidatorHandler} />}
            value={validatorCount.toString()}
            onChange={changeValidatorCountHandler}
            style={{ fontWeight: 'bold' }}
          />
        </Stack>
        <YStack space={'$2'}>
          <Text size={19} weight={'semibold'} color="#09101C">
            ETH
          </Text>
          <Text size={27} weight={'semibold'} color="#09101C">
            64
          </Text>
        </YStack>
        <YStack space={'$2'}>
          <XStack style={{ justifyContent: 'space-between' }}>
            <Text size={19} weight={'semibold'} color="#09101C">
              USD
            </Text>
            <ChevronDownIcon size={16} color={'#919191'} />
          </XStack>
          <Text size={27} weight={'semibold'} color="#09101C">
            $4,273 USD
          </Text>
        </YStack>
      </XStack>
    </YStack>
  )
}
export default SetupRow
