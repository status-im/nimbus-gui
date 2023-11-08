import { Stack, XStack, YStack } from 'tamagui'
import TitleLogo from '../Dashboard/TitleLogo'

import LeftSidebar from '../../components/General/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/General/RightSideBar/RightSidebar'
import LogsTerminal from './LogsTerminal'
import LogsSumCard from './LogsSumCard'

const LogsPage = () => {
  return (
    <XStack style={{ height: '100vh' }}>
      <LeftSidebar />
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
        <Stack style={{ width: '100%', alignItems: 'center' }}>
          <LogsTerminal />
          <XStack space="$8">
            <LogsSumCard />
            <LogsSumCard />
            <LogsSumCard />
            <LogsSumCard />
          </XStack>
        </Stack>
      </YStack>
      <RightSidebar />
    </XStack>
  )
}

export default LogsPage
