import { XStack, YStack } from 'tamagui'

import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

import BasicInfoCards from './BasicInfoCards/BasicInfoCards'
import AddCardsContainer from '../../components/General/AddCards/AddCardsContainer'
import SyncStatusCard from './SyncStatusCard/SyncStatusCard'
import BalanceChartCard from './BalanceChartCard/BalanceChartCard'
import CPUCard from './CPULoad/CPUCard'
import ConsensusUptimeCard from './ConsensusUptime/ConsensusUptimeCard'
import ExecutionUptime from './ExecutionUptime/ExecutionUptime'
import DeviceUptime from './DeviceUptime/DeviceUptime'
import TitleLogo from './TitleLogo'
import StorageCard from './StorageCard/StorageCard'
import NetworkCard from './NetworkCard/NetworkCard'

const Dashboard = () => {
  return (
    <YStack space={'$4'} alignItems="start">
      <XStack space={'$4'} style={{ width: '100%' }}>
        <LeftSidebar />

        <YStack space={'$4'} alignItems="start">
          <TitleLogo />
          <XStack space={'$4'} style={{ width: '100%' }}>
            <XStack space={'$4'}>
              <AddCardsContainer />
              <SyncStatusCard />
            </XStack>
            <BalanceChartCard />
            <CPUCard load={[12, 31, 3, 2, 24, 98]} />
          </XStack>
          <BasicInfoCards />
          <XStack space="$3">
            <ConsensusUptimeCard />
            <ExecutionUptime />
            <DeviceUptime />
            <StorageCard maxStorage={100} storage={82}></StorageCard>
          </XStack>
          <NetworkCard
            downloadRate={[12, 31, 2, 12, 3, 23]}
            uploadRate={[31, 12, 3, 13, 3]}
          ></NetworkCard>
        </YStack>

        <RightSidebar />
      </XStack>
    </YStack>
  )
}

export default Dashboard
