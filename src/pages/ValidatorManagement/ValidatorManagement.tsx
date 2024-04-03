import { Text } from '@status-im/components'
import { YStack } from 'tamagui'

import ManagementTabs from './ManagementTabs'
import AddCardsContainer from '../../components/General/AddCards/AddCardsContainer'
import ManagementHeader from './ManagementHeader'
import ManagementCard from './ManagementCard'
import styles from './validatorManagement.module.css'
import SidebarsWrapper from '../../components/PageWrappers/SidebarsWrapper'

const ValidatorManagement = () => {
  return (
    <SidebarsWrapper isNotBottomPadding={true}>
      <YStack
        space="$4"
        alignItems="flex-start"
        style={{
          flexGrow: '1',
          overflowY: 'auto',
        }}
        className={'transparent-scrollbar'}
      >
        <ManagementHeader />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            width: '100%',
            gap: '16px',
          }}
          className={styles['cards']}
        >
          <ManagementCard />
          <ManagementCard />
          <AddCardsContainer cardsAmount={2} />
        </div>
        <Text size={27} weight={'semibold'}>
          Validators
        </Text>
        <ManagementTabs />
      </YStack>
    </SidebarsWrapper>
  )
}

export default ValidatorManagement
