import { Stack, YStack } from 'tamagui'
import { useEffect, useState } from 'react'

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
import { XStack } from 'tamagui'

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
      minWidth="500px"
      width="50vh"
      style={{
        flexGrow: '1',
        marginTop: '16px',
        overflowY: 'auto',
      }}
      className={'transparent-scrollbar'}
    >
      <TitleLogo />
      <Stack style={{
        display: 'grid',
        gridTemplateColumns: windowWidth < 1375 ? '1fr 1fr' : '1fr 1fr 2fr',
        gap: '8px',
        gridAutoFlow: 'row',
      }}>
        <SyncStatusCard />
        <AddCardsContainer />
        {windowWidth < 1375 ? (
          <Stack style={{ gridColumn: '1 / span 2' }} width={'101%'}>
            <BalanceChartCard />
          </Stack>
        ) :
          <Stack width={'101%'}>
            <BalanceChartCard />
          </Stack>
        }
      </Stack>
      <BasicInfoCards />
      {/* SECOND ROW ENDS HERE! */}
      {/* <Stack
        style={{
          display: 'grid',
          gridTemplateColumns: windowWidth < 1300 ? '1fr' : '1.5fr 1fr',
          gap: '16px',
        }}
      >
        <Stack
          style={{
            display: 'grid',
            gridTemplateColumns: windowWidth < 1300 ? '1fr' : '1fr 1fr',
            gridAutoFlow: 'row',
            gap: '16px',
          }}
        >
          <ConsensusUptimeCard />
          <ExecutionUptime />
          <Stack style={{ gridColumn: '1 / span 2', marginTop: windowWidth < 1300 ? '50px' : 0 }}>
            <DeviceUptime />
          </Stack>
        </Stack>

        <Stack
          style={{
            display: 'grid',
            gridTemplateColumns: windowWidth < 1750 ? '1fr' : '1fr 1fr',
            gap: '16px',
            marginTop: windowWidth < 1300 ? '50px' : 0,
            maxHeight: '200px',
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
      </Stack> */}

    </YStack >
  )
}

export default DashboardContent
