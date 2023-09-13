import { YStack } from 'tamagui'

import BasicInfoCards from './BasicInfoCards/BasicInfoCards'
import AddCardsContainer from '../../components/General/AddCards/AddCardsContainer'

const Dashboard = () => {
  return (
    <YStack space={'$2'} alignItems="start">
      <AddCardsContainer />
      <BasicInfoCards />
    </YStack>
  )
}

export default Dashboard
