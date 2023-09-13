import { YStack } from 'tamagui'

import BasicInfoCards from './BasicInfoCards/BasicInfoCards'
import AddCardsContainer from './AddCardsContainer'

const Dashboard = () => {
  return (
    <YStack space={'$2'}>
      <AddCardsContainer />
      <BasicInfoCards />
    </YStack>
  )
}

export default Dashboard
