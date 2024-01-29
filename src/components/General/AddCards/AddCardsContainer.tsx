import { YStack } from 'tamagui'

import AddCard from './AddCard'
import DashboardCardWrapper from '../../../pages/Dashboard/DashboardCardWrapper'
import { getHeightPercentages } from '../../../utilities'

type AddCardsContainerProps = {
  cardsAmount: number
}

const AddCardsContainer = ({ cardsAmount }: AddCardsContainerProps) => {
  return (
    <DashboardCardWrapper padding="0" minWidth="50px">
      <YStack height={'100%'}>
        {Array.from({ length: cardsAmount }).map((_, index) => (
          <AddCard
            key={index}
            style={{
              padding: '40px',
              height: getHeightPercentages(cardsAmount),
            }}
          />
        ))}
      </YStack>
    </DashboardCardWrapper>
  )
}

export default AddCardsContainer
