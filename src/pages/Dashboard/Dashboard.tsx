import { XStack, YStack } from 'tamagui'

import BasicInfoCards from './BasicInfoCards/BasicInfoCards'
import AddCardsContainer from '../../components/General/AddCards/AddCardsContainer'
import SyncStatusCard from './SyncStatusCard/SyncStatusCard'
import BalanceChardCard from './BalanceLineChart/BalanceChardCard'
import CPUCard from './CPULoad/CPUCard'
import ConsensusUptimeCard from './ConsensusUptime/ConsensusUptimeCard'
import ExecutionUptime from './ExecutionUptime/ExecutionUptime'
import DeviceUptime from './DeviceUptime/DeviceUptime'

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
      <XStack space="$3">
        <ConsensusUptimeCard />
        <ExecutionUptime />
        <DeviceUptime />
      </XStack>
    </YStack >
  )
}

export default Dashboard
