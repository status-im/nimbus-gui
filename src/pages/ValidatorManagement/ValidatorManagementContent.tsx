import { Text } from '@status-im/components'
import { YStack } from 'tamagui'

import TitleLogo from '../../components/General/TitleLogo'
import ManagementTabs from './ManagementTabs'

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
      <TitleLogo subtitle="Validator Management" />
      <Text size={27} weight={'semibold'}>
        Validators
        <ManagementTabs />
      </Text>
    </YStack>
  )
}

export default ValidatorManagementContent
