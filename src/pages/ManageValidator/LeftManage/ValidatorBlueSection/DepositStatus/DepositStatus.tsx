import { Stack, XStack, YStack } from 'tamagui'
import { Text } from '@status-im/components'

import DepositStatusPieChart from './DepositStatusPieChart'
import DepositStepper from './DepositStepper'

const depositStatusData = [
  {
    id: 'steps-done',
    label: 'Used',
    value: 10,
    color: '#2A4AF5',
  },
  {
    id: 'steps-remaining',
    label: 'Free',
    value: 100,
    color: '#E7EAEE',
  },
]

const DepositStatus = () => {
  return (
    <XStack
      borderWidth="1px"
      borderStyle="solid"
      borderColor={'#DCE0E5'}
      space={'$2'}
      backgroundColor="#fff"
      borderRadius="$10"
      marginTop="0px"
      padding="10px"
      paddingBottom="0px"
      justifyContent="space-between"
    >
      <XStack space="$3">
        <Stack width={'50px'} height={'50px'}>
          <DepositStatusPieChart
            data={depositStatusData}
            isInteractive={false}
          />
        </Stack>
        <YStack space={'$2'}>
          <Text size={13} color="#647084">
            Status
          </Text>
          <Text size={13} color="#E95460" weight={'semibold'}>
            Requires Deposit
          </Text>
        </YStack>
      </XStack>
      <DepositStepper activeStep={1} />
    </XStack>
  )
}

export default DepositStatus
