import { Stack, XStack, YStack } from 'tamagui'
import { Input as StatusInput, Text } from '@status-im/components'
import { AddIcon } from '@status-im/icons'

type SetupRowProps = {
  title: string
}
const SetupRow = ({ title }: SetupRowProps) => {
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
          <StatusInput icon={<AddIcon size={16} />} />
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
          <Text size={19} weight={'semibold'} color="#09101C">
            USD
          </Text>
          <Text size={27} weight={'semibold'} color="#09101C">
            $4,273 USD
          </Text>
        </YStack>
      </XStack>
    </YStack>
  )
}
export default SetupRow
