import { Stack, YStack, XStack } from 'tamagui'

import BasicInfoCards from './BasicInfoCards/BasicInfoCards'

import BalanceChartCard from './BalanceChartCard/BalanceChartCard'
import CPUCard from './CPULoad/CPUCard'
import ConsensusUptimeCard from './ConsensusUptime/ConsensusUptimeCard'
import ExecutionUptime from './ExecutionUptime/ExecutionUptime'
import DeviceUptime from './DeviceUptime/DeviceUptime'
import TitleLogo from '../../components/General/TitleLogo'
import StorageCard from './StorageCard/StorageCard'
import NetworkCard from './NetworkCard/NetworkCard'
import SyncStatusCards from './SyncStatusCards/SyncStatusCards'
import MemoryCard from './MemoryCard/MemoryCard'
import { useWindowSize } from '../../hooks/useWindowSize'

import ConnectedPeers from './ConnectedPeers/ConnectedPeers'
import ActiveValidators from './ActiveValidators/ActiveValidators'

const DashboardContent = () => {
  const { width } = useWindowSize()
  return (
    <YStack
      space="$3"
      alignItems="flex-start"
      px="24px"
      minWidth="500px"
      width="50vh"
      style={{
        flexGrow: '1',
        marginTop: '16px',
        overflowY: 'auto',
      }}
      className={'transparent-scrollbar'}
    >
      <TitleLogo subtitle="Node Management Dashboard" />
      <Stack
        style={{
          display: 'grid',
          gridTemplateColumns: width < 1400 ? '1fr' : '1fr 1fr',
          gap: '8px',
          gridAutoFlow: 'row',
          width: '100%',
        }}
      >
        {width >= 1400 && <BalanceChartCard />}
        <XStack space="$3">
          <SyncStatusCards />
          <YStack space="$3" flexWrap="wrap">
            <ActiveValidators count={6} />
            <ConnectedPeers></ConnectedPeers>
          </YStack>
        </XStack>
        {width < 1400 && <BalanceChartCard />}
      </Stack>
      <BasicInfoCards />

      {width < 1400 ? (
        DashboardContentLayout(width)
      ) : (
        <Stack
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
            width: '100%',
          }}
        >
          <YStack space="$3">
            <XStack space="$2" width={'100%'}>
              <ConsensusUptimeCard />
              <ExecutionUptime />
            </XStack>
            <DeviceUptime />
          </YStack>
          <YStack space={'$3'}>
            <XStack space={'$4'}>
              <StorageCard maxStorage={100} storage={182} />
              <CPUCard load={[12, 31, 3, 2, 24, 98]} />
            </XStack>
            <XStack space="$4">
              <MemoryCard currentMemory={[21, 33, 3, 42, 35]} maxMemory={50} />

              <NetworkCard
                downloadRate={[12, 31, 22, 12, 23, 23, 90]}
                uploadRate={[31, 22, 32, 132, 32, 45, 65]}
              />
            </XStack>
          </YStack>
        </Stack>
      )}
    </YStack>
  )
}
const DashboardContentLayout = (width: number) => {
  return (
    <Stack width={'100%'} space="$3">
      <YStack space="$3">
        <Stack space="$2" width={'100%'}>
          <ConsensusUptimeCard />
          <ExecutionUptime />
        </Stack>

        <DeviceUptime />
      </YStack>

      <Stack
        style={{
          display: 'grid',
          gridTemplateColumns: width < 1240 ? '1fr 1fr' : '1fr 1fr 1fr 1fr',
          gap: '8px',
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

export default DashboardContent
