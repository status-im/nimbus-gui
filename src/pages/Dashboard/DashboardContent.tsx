import { Stack, XStack, YStack } from 'tamagui'

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
import { useEffect, useState } from 'react'
const DashboardContent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <YStack
      space="$4"
      alignItems="start"
      px="24px"
      style={{
        flexGrow: '1',
        marginTop: '16px',
        overflowY: 'auto',
      }}
      minWidth="500px"
      width="50vh"
    >
      <TitleLogo />

      <Stack
        style={{
          display: 'grid',
          gridTemplateColumns: windowWidth < 1300 ? '0.5fr' : '25fr 25fr 90fr',
          gap: '16px',
        }}
      >
        <SyncStatusCard />
        <AddCardsContainer />

        <BalanceChartCard />
      </Stack>

      <BasicInfoCards />

      <XStack space="$3" flexWrap="wrap">
        <YStack space="$4">
          <XStack justifyContent="space-between">
            <ConsensusUptimeCard />
            <ExecutionUptime />
          </XStack>
          <DeviceUptime />
        </YStack>

        <YStack space="$4" flexWrap="wrap">
          <XStack space="$4">
            <StorageCard maxStorage={100} storage={82} />
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
      </XStack>
    </YStack>
  )
}

export default DashboardContent
