import { YStack } from 'tamagui'

import BasicInfoCards from './BasicInfoCards/BasicInfoCards'
import AddCardsContainer from '../../components/General/AddCards/AddCardsContainer'
import BalanceChardCard from './BalanceLineChart/BalanceChardCard'

const Dashboard = () => {
  return (
    <YStack space={'$2'} alignItems="start">
      <AddCardsContainer />
      <BasicInfoCards />
      <BalanceChardCard/>
    </YStack>
  )
}

export default Dashboard
