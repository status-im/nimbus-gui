import { Stack, YStack, XStack } from 'tamagui'

import BasicInfoCards from './BasicInfoCards/BasicInfoCards'
import AddCardsContainer from '../../components/General/AddCards/AddCardsContainer'
import BalanceChartCard from './BalanceChartCard/BalanceChartCard'
import CPUCard from './CPULoad/CPUCard'
import ConsensusUptimeCard from './ConsensusUptime/ConsensusUptimeCard'
import ExecutionUptime from './ExecutionUptime/ExecutionUptime'
import DeviceUptime from './DeviceUptime/DeviceUptime'
import TitleLogo from '../../components/General/TitleLogo'
import StorageCard from './StorageCard/StorageCard'
import NetworkCard from './NetworkCard/NetworkCard'
import SyncStatusCard from './SyncStatusCards/SyncStatusCards'
import MemoryCard from './MemoryCard/MemoryCard'

type DashboardContentProps = {
  windowWidth: number
}

const DashboardContent = ({ windowWidth }: DashboardContentProps) => {
  return (
    <YStack
      space="$4"
      alignItems="start"
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
          gridTemplateColumns: windowWidth < 1375 ? '1fr 1fr' : '1fr 1fr 2fr',
          gap: '8px',
          gridAutoFlow: 'row',
        }}
      >
        <SyncStatusCard />
        <AddCardsContainer />
        {windowWidth < 1375 ? (
          <Stack style={{ gridColumn: '1 / span 2' }} width={'101%'}>
            <BalanceChartCard />
          </Stack>
        ) : (
          <Stack width={'101%'}>
            <BalanceChartCard />
          </Stack>
        )}
      </Stack>
      <BasicInfoCards />

      {windowWidth < 1400 ? (
        DashboardContentLayout(windowWidth)
      ) : (
        <Stack
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
            width: '100%',
          }}
        >
          <YStack>
            <Stack
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px',
              }}
            >
              <ConsensusUptimeCard />
              <ExecutionUptime />
            </Stack>
            <DeviceUptime />
          </YStack>
          <YStack space={'$4'}>
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
const DashboardContentLayout = (windowWidth: number) => {
  return (
    <Stack width={'100%'}>
      <YStack>
        <Stack
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
          }}
        >
          <ConsensusUptimeCard />
          <ExecutionUptime />
        </Stack>
        <DeviceUptime />
      </YStack>
      <Stack
        style={{
          display: 'grid',
          gridTemplateColumns: windowWidth < 1240 ? '1fr 1fr' : '1fr 1fr 1fr 1fr',
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
