import { XStack, YStack } from 'tamagui'

import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSideBar/RightSidebar'
import BasicInfoCards from './BasicInfoCards/BasicInfoCards'
import AddCardsContainer from '../../components/General/AddCards/AddCardsContainer'
import BalanceChartCard from './BalanceChartCard/BalanceChartCard'
import CPUCard from './CPULoad/CPUCard'
import ConsensusUptimeCard from './ConsensusUptime/ConsensusUptimeCard'
import ExecutionUptime from './ExecutionUptime/ExecutionUptime'
import DeviceUptime from './DeviceUptime/DeviceUptime'
import TitleLogo from './TitleLogo'
import StorageCard from './StorageCard/StorageCard'
import NetworkCard from './NetworkCard/NetworkCard'
import SyncStatusCard from './SyncStatusCards/SyncStatusCards'
import MemoryCard from './MemoryCard/MemoryCard'
import { Stack } from 'tamagui'

const Dashboard = () => {
  return (
    <XStack >
      <LeftSidebar />

      <YStack
        space={'$4'}
        alignItems="start"
        px="24px"
        style={{ flexGrow: '1', marginTop: '16px', width: '50%' }}
        minWidth={'500px'}
      >
        <TitleLogo />
        <XStack space={'$4'} justifyContent={'space-between'} flexWrap='wrap'>
          <XStack space={'$4'} flexWrap="wrap" >
            <SyncStatusCard />
            <AddCardsContainer />
          </XStack>
          <BalanceChartCard />
        </XStack>
        <BasicInfoCards />

        <XStack space="$3"  flexWrap="wrap" >
          <YStack space={'$4'}  flexWrap="wrap">
            <XStack justifyContent="space-between" flexWrap="wrap">
              <ConsensusUptimeCard />
              <ExecutionUptime />
            </XStack>
            <DeviceUptime />
          </YStack>
          <YStack space={'$4'} flexWrap="wrap">
            <XStack space="$4">
              <StorageCard maxStorage={100} storage={82} />
              <CPUCard load={[12, 31, 3, 2, 24, 98]} />
            </XStack>
            <XStack space="$4"  >
              <MemoryCard currentMemory={[21, 33, 3, 42, 35]} maxMemory={50} />
              <NetworkCard
                downloadRate={[12, 31, 22, 12, 23, 23, 90]}
                uploadRate={[31, 22, 32, 132, 32, 45, 65]}
              />
            </XStack>
          </YStack>
        </XStack>
      </YStack>

      <RightSidebar />

    </XStack>
  )
}

export default Dashboard
