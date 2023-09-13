import { XStack, YStack } from 'tamagui'

import BasicInfoCards from './BasicInfoCards/BasicInfoCards'
import AddCardsContainer from '../../components/General/AddCards/AddCardsContainer'
import SyncStatusCard from './SyncStatusCard'
import BalanceChardCard from './BalanceLineChart/BalanceChardCard'

const Dashboard = () => {
  return (
    <YStack space={'$2'} alignItems="start">
      <XStack space={'$2'}>
        <XStack space={'$4'}>
          <SyncStatusCard />
          <AddCardsContainer />
        </XStack>
        <XStack space={'$2'}></XStack>
      </XStack>
      <BasicInfoCards />
      <BalanceChardCard/>
    </YStack>
  )
}

export default Dashboard
