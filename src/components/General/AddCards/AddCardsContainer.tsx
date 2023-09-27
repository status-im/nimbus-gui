import { YStack } from 'tamagui'

import AddCard from './AddCard'
import DashboardCardWrapper from '../../../pages/Dashboard/DashboardCardWrapper'

const AddCardsContainer = () => {
  return (
    <DashboardCardWrapper padding="0">
      <YStack>
        <AddCard padding={'0 7vw'} />
        <AddCard padding={'0 7vw'} />
      </YStack>
    </DashboardCardWrapper>
  )
}

export default AddCardsContainer
