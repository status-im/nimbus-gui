import { YStack } from 'tamagui'

import AddCard from './AddCard'
import DashboardCardWrapper from '../../../pages/Dashboard/DashboardCardWrapper'

const AddCardsContainer = () => {
  return (
    <DashboardCardWrapper padding="0">
      <YStack>
        <AddCard />
        <AddCard />
      </YStack>
    </DashboardCardWrapper>
  )
}

export default AddCardsContainer
