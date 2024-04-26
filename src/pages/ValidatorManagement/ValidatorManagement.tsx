import { Text } from '@status-im/components'
import { YStack } from 'tamagui'

import ManagementTabs from './ManagementTabs'
import AddCardsContainer from '../../components/General/AddCards/AddCardsContainer'
import ManagementHeader from './ManagementHeader'
import ManagementCard from './ManagementCard'
import SidebarsWrapper from '../../components/PageWrappers/SidebarsWrapper'
import styles from './validatorManagement.module.css'
import Breadcrumb from '../../components/General/Breadcrumb/Breadcrumb'

const ValidatorManagement = () => {
  return (
    <SidebarsWrapper isNotBottomPadding={true}>
      <Breadcrumb />
      <YStack
        space="$4"
        style={{
          width: '100%',
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
