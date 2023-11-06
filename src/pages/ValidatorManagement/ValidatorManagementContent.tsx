import { Text } from '@status-im/components'
import { YStack } from 'tamagui'

import ManagementTable from './ManagementTable/ManagementTable'

const ValidatorManagementContent = () => {
  return (
    <YStack
      space="$4"
      alignItems="start"
      px="24px"
      minWidth="500px"
      width="50vh"
      style={{
        flexGrow: '1',
        overflowY: 'auto',
      }}
    >
      <ManagementTable />
      <Text size={27} weight={'semibold'}>
        Validators
      </Text>
    </YStack>
  )
}

export default ValidatorManagementContent
