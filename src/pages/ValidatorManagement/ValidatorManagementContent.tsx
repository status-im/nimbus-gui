import { Text } from '@status-im/components'
import { YStack } from 'tamagui'

import ManagementTabs from './ManagementTabs'
import AddCardsContainer from '../../components/General/AddCards/AddCardsContainer'
import ManagementHeader from './ManagementHeader'

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
      className="transparent-scrollbar"
    >
      <ManagementHeader />
      <AddCardsContainer />
      <Text size={27} weight={'semibold'}>
        Validators
        <ManagementTabs />
      </Text>
    </YStack>
  )
}

export default ValidatorManagementContent
