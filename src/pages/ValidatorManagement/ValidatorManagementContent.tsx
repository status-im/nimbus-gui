import { Text } from '@status-im/components'
import { YStack } from 'tamagui'

import TitleLogo from '../../components/General/TitleLogo'
import ManagementTabs from './ManagementTabs'
import AddCardsContainer from '../../components/General/AddCards/AddCardsContainer'

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
      <TitleLogo subtitle="Validator Management" />
      <AddCardsContainer />
      <Text size={27} weight={'semibold'}>
        Validators
        <ManagementTabs />
      </Text>
    </YStack>
  )
}

export default ValidatorManagementContent
