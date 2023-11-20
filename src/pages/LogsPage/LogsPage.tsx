import { Stack, Switch, XStack, YStack } from 'tamagui'
import TitleLogo from '../Dashboard/TitleLogo'

import LeftSidebar from '../../components/General/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/General/RightSideBar/RightSidebar'
import LogsTerminal from './LogsTerminal'
import LogsSumCard from './LogsSumCard'
import SupportCard from './SupportCard'
import { useEffect, useState } from 'react'
import { Button, Input } from '@status-im/components'
import { SearchIcon, DropdownIcon } from '@status-im/icons'
import SwitchComponent from './SwitchComponent'
const LogsPage = () => {
  const [timestamps, setTimestamps] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(+window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
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
        <XStack justifyContent="space-between" width={'100%'}>
          <TitleLogo />
          <XStack space={'$4'}>
            <Input variant="retractable" color={'black'} icon={<SearchIcon size={16} />}></Input>

            <Button variant="outline" icon={<DropdownIcon size={16} />}>
              Validator
            </Button>
            <Button
              variant="outline"
              icon={<SwitchComponent timestamps={timestamps} setTimestamps={setTimestamps} />}
            >
              Timestamps
            </Button>
          </XStack>
        </XStack>
        <Stack style={{ width: '100%', alignItems: 'center' }}>
          <LogsTerminal windowWidth={windowWidth} />
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
            <LogsSumCard type={'Critical'} count={16} countActive={2} countInactive={3} />
            <LogsSumCard type={'Warning'} count={9} countActive={2} countInactive={7} />
            <LogsSumCard type={'Critical'} count={6} countActive={2} countInactive={0} />
            <SupportCard />
          </Stack>
        </Stack>
      </YStack>
      <RightSidebar />
    </XStack>
  )
}

export default LogsPage
