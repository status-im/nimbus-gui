import { YStack } from 'tamagui'

import AddCard from './AddCard'
import DashboardCardWrapper from '../../../pages/Dashboard/DashboardCardWrapper'
import { getHeightPercentages } from '../../../utilities'

const AddCardsContainer = () => {
  const cards = 2

  return (
    <DashboardCardWrapper padding="0" minWidth='150px'>
      <YStack height={'100%'}>
        {Array.from({ length: cards }).map(() => (
          <AddCard style={{ padding: '56px', height: getHeightPercentages(cards) }} />
        ))}
      </YStack>
    </DashboardCardWrapper>
  )
}

export default AddCardsContainer
