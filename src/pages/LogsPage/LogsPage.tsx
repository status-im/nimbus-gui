import { Stack, XStack, YStack } from 'tamagui'

import LeftSidebar from '../../components/General/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/General/RightSideBar/RightSidebar'
import LogsTerminal from './LogsTerminal'
import LogsSumCard from './LogsSumCard'
import SupportCard from './SupportCard'
import { useState } from 'react'
import HeaderBtns from './HeaderBtns'
import TitleLogo from '../../components/General/TitleLogo'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const LogsPage = () => {
  const windowSize = useWindowSize()
  const [highLightSearched, setHighLightSearched] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [timestamps, setTimestamps] = useState(true)
  const [indexesVisible, setIndexesVisible] = useState(true)
  const logsCount = useSelector((state: RootState) => state.logsTerminal)
  const [dropdownMenuItem, setDropdownMenuItem] = useState('')
  const triggerSearch = (isTriggered: boolean) => {
    setHighLightSearched(isTriggered)
  }

  return (
    <XStack style={{ height: '100vh' }}>
      <LeftSidebar />
      <YStack
        space="$4"
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
        <XStack justifyContent="space-between" width={'100%'} flexWrap="wrap">
          <TitleLogo />
          <HeaderBtns
            dropdownMenuItem={dropdownMenuItem}
            setDropdownMenuItem={setDropdownMenuItem}
            setTimestamps={setTimestamps}
            timestamps={timestamps}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            triggerSearch={triggerSearch}
            indexesVisible={indexesVisible}
            setIndexesVisible={setIndexesVisible}
          />
        </XStack>
        <Stack
          style={{ width: '100%', alignItems: 'center', flexWrap: 'wrap' }}
        >
          <LogsTerminal
            windowWidth={windowSize.width}
            dropdownMenuItem={dropdownMenuItem}
            timestamps={timestamps}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            highLightSearched={highLightSearched}
            indexesVisible={indexesVisible}
          />
          <Stack
            space="$4"
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '1vw',
              width: '100%',
            }}
            width={'90%'}
          >
            <LogsSumCard
              type={'Notice'}
              count={logsCount.noticeLogs}
              countActive={2}
              countInactive={3}
            />
            <LogsSumCard
              type={'Warning'}
              count={logsCount.warningLogs}
              countActive={2}
              countInactive={7}
            />
            <LogsSumCard
              type={'Error'}
              count={logsCount.errorLogs || 0}
              countActive={2}
              countInactive={0}
            />
            <SupportCard />
          </Stack>
        </Stack>
      </YStack>
      <RightSidebar />
    </XStack>
  )
}

export default LogsPage
