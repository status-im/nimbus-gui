import { Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

import LeftSidebar from '../../components/General/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/General/RightSideBar/RightSidebar'
import ManagementTabs from './ManagementTabs'
import AddCardsContainer from '../../components/General/AddCards/AddCardsContainer'
import ManagementHeader from './ManagementHeader'
import ManagementCard from './ManagementCard'
import styles from './validatorManagement.module.css'

const ValidatorManagement = () => {
  return (
    <XStack style={{ height: '100vh' }}>
      <LeftSidebar />
      <YStack
        space="$4"
        alignItems="flex-start"
        style={{
          flexGrow: '1',
          overflowY: 'auto',
          padding: '0 24px 24px 24px',
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
      <div className={styles['right-sidebar-wrapper']}>
        <RightSidebar />
      </div>
    </XStack>
  )
}

export default ValidatorManagement
