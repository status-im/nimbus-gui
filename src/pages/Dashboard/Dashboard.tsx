import { XStack, YStack } from 'tamagui'

import BasicInfoCards from './BasicInfoCards/BasicInfoCards'
import AddCardsContainer from '../../components/General/AddCards/AddCardsContainer'
import SyncStatusCard from './SyncStatusCard/SyncStatusCard'
import BalanceChardCard from './BalanceLineChart/BalanceChardCard'

const Dashboard = () => {
  return (
    <YStack space={'$4'} alignItems="start">
      <XStack space={'$4'} style={{ width: '100%' }}>
        <XStack space={'$4'}>
          <AddCardsContainer />
          <SyncStatusCard />
        </XStack>
        <BalanceChardCard />
      </XStack>
      <BasicInfoCards />
    </YStack>
  )
}

export default Dashboard
