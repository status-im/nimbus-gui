import { YStack } from 'tamagui'
import AddCard from '../../components/General/AddCard'

const AddCardsContainer = () => {
  return (
    <YStack
      style={{
        borderRadius: '16px',
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
        width: 'fit-content',
      }}
    >
      <AddCard />
      <AddCard />
    </YStack>
  )
}

export default AddCardsContainer
