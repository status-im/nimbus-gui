import { YStack } from 'tamagui'

import AddCard from './AddCard'
import DashboardCardWrapper from '../../../pages/Dashboard/DashboardCardWrapper'

const AddCardsContainer = () => {
  return (
    <DashboardCardWrapper padding="0">
      <YStack>
        <AddCard padding={'56px'} />
        <AddCard padding={'56px'} />
      </YStack>
    </DashboardCardWrapper>
  )
}

export default AddCardsContainer
