import { YStack } from 'tamagui'

import AddCard from '../../components/General/AddCard'
import BasicInfoCards from './BasicInfoCards/BasicInfoCards'

const Dashboard = () => {
  return (
    <YStack>
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
      <BasicInfoCards />
    </YStack>
  )
}

export default Dashboard
