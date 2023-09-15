import { XStack, YStack } from 'tamagui'

import BasicInfoCards from './BasicInfoCards/BasicInfoCards'
import AddCardsContainer from '../../components/General/AddCards/AddCardsContainer'
import SyncStatusCard from './SyncStatusCard/SyncStatusCard'
import BalanceChardCard from './BalanceLineChart/BalanceChardCard'
import CPUCard from './CPULoad/CPUCard'
import ConsensusUptimeCard from './ConsensusUptime/ConsensusUptimeCard'
import ExecutionUptime from './ExecutionUptime/ExecutionUptime'

const Dashboard = () => {
  return (
    <YStack space={'$4'} alignItems="start">
      <XStack space={'$4'} style={{ width: '100%' }}>
        <XStack space={'$4'}>
          <AddCardsContainer />
          <SyncStatusCard />
        </XStack>
        <BalanceChardCard />
        <CPUCard load={[12, 31, 3, 2, 24,]} />
      </XStack>
      <BasicInfoCards />
      <ConsensusUptimeCard />
      <ExecutionUptime />
    </YStack>
  )
}

export default Dashboard
