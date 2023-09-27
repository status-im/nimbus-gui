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

const Dashboard = () => {
  return (
    <YStack minHeight={'100vh'} maxWidth={'100vw'}>
      <XStack justifyContent={'space-between'}>
        <LeftSidebar />

        <YStack
          space={'$4'}
          alignItems="start"
          px="24px"
          style={{ flexGrow: '1', marginTop: '16px' }}
        >
          <TitleLogo />
          <XStack space={'$4'} justifyContent={'space-between'} width={'100%'}>
            <XStack space={'$4'} width={'40%'}>
              <SyncStatusCard />
              <AddCardsContainer />
            </XStack>
            <BalanceChartCard />
          </XStack>
          <BasicInfoCards />

          <XStack space="$3" width={'100%'}>
            <YStack space={'$4'} width={'50%'}>
              <XStack justifyContent="space-between">
                <ConsensusUptimeCard />
                <ExecutionUptime />
              </XStack>
              <DeviceUptime />
            </YStack>
            <YStack space={'$4'} width={'50%'}>
              <XStack space="$4" width={'100%'}>
                <StorageCard maxStorage={100} storage={82} />
                <CPUCard load={[12, 31, 3, 2, 24, 98]} />
              </XStack>
              <XStack space="$4" width={'100%'}>
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
    </YStack>
  )
}

export default Dashboard
