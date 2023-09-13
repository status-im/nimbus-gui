import { Stack, YStack } from 'tamagui'

import BasicInfoCard from './BasicInfoCard'
import AddCard from '../../components/General/AddCard'

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
      <Stack
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '20px',
          width: '100%',
        }}
      >
        <BasicInfoCard title="Active Validators" value="6" />
        <BasicInfoCard title="Connected Peers" value="16" />
        <BasicInfoCard title="At Headslot" value="-6" />
        <BasicInfoCard title="Avg. Effectiveness" value="4" />
        <BasicInfoCard title="Participation Rate" value="6" />
      </Stack>
    </YStack>
  )
}

export default Dashboard
