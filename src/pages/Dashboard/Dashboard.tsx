import { Stack, YStack, XStack } from 'tamagui'

import BasicInfoCards from './BasicInfoCards'
import BalanceChartCard from './BalanceChartCard/BalanceChartCard'
import CPUCard from './CPULoad/CPUCard'
import ConsensusUptimeCard from '../../components/Charts/ConsensusUptime/ConsensusUptimeCard'
import ExecutionUptime from '../../components/Charts/ExecutionUptime/ExecutionUptime'
import DeviceUptime from '../../components/Charts/DeviceUptime/DeviceUptime'
import NimbusLogo from '../../components/Logos/NimbusLogo'
import StorageCard from './StorageCard/StorageCard'
import NetworkCard from './NetworkCard/NetworkCard'
import SyncStatusCards from './SyncStatusCards/SyncStatusCards'
import MemoryCard from './MemoryCard/MemoryCard'
import ConnectedPeers from './ConnectedPeers/ConnectedPeers'
import ActiveValidators from './ActiveValidators/ActiveValidators'
import SidebarsWrapper from '../../components/PageWrappers/SidebarsWrapper'
import { useWindowSize } from '../../hooks/useWindowSize'

const Dashboard = () => {
  const { width } = useWindowSize()

  return (
    <SidebarsWrapper>
      <YStack
        space="$3"
        alignItems="flex-start"
        minWidth="500px"
        width="50vh"
        style={{
          flexGrow: '1',
          overflowY: 'auto',
        }}
        className={'transparent-scrollbar'}
      >
        <NimbusLogo subtitle="Node Management Dashboard" />
        <Stack
          style={{
            display: 'grid',
            gridTemplateColumns: width < 1400 ? '1fr' : '1fr 1fr',
            gap: '14px',
            gridAutoFlow: 'row',
            width: '100%',
          }}
        >
          {width >= 1400 && <BalanceChartCard />}
          <XStack space="$3">
            <SyncStatusCards />
            <YStack space="$3" flexWrap="wrap">
              <ActiveValidators count={6} />
              <ConnectedPeers />
            </YStack>
          </XStack>
          {width < 1400 && <BalanceChartCard />}
        </Stack>
        <BasicInfoCards />
        {width < 1400 ? (
          DashboardLayout(width)
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '14px',
              width: '100%',
            }}
          >
            <ConsensusUptimeCard />
            <ExecutionUptime />
            <StorageCard maxStorage={100} storage={182} />
            <CPUCard load={[12, 31, 3, 2, 24, 98]} />
            <DeviceUptime style={{ gridColumn: 'span 2' }} />
            <MemoryCard currentMemory={[21, 33, 3, 42, 35]} maxMemory={50} />
            <NetworkCard
              downloadRate={[12, 31, 22, 12, 23, 23, 90]}
              uploadRate={[31, 22, 32, 132, 32, 45, 65]}
            />
          </div>
        )}
      </YStack>
    </SidebarsWrapper>
  )
}

const DashboardLayout = (width: number) => {
  return (
    <Stack width={'100%'} space="$3">
      <YStack space="$3">
        <Stack space="$3" width={'100%'}>
          <ConsensusUptimeCard />
          <ExecutionUptime />
        </Stack>
        <DeviceUptime />
      </YStack>
      <Stack
        style={{
          display: 'grid',
          gridTemplateColumns: width < 1240 ? '1fr 1fr' : '1fr 1fr 1fr 1fr',
          gap: '14px',
        }}
      >
        <StorageCard maxStorage={100} storage={82} />
        <CPUCard load={[12, 31, 3, 2, 24, 98]} />
        <MemoryCard currentMemory={[21, 33, 3, 42, 35]} maxMemory={50} />
        <NetworkCard
          downloadRate={[12, 31, 22, 12, 23, 23, 90]}
          uploadRate={[31, 22, 32, 132, 32, 45, 65]}
        />
      </Stack>
    </Stack>
  )
}

export default Dashboard
