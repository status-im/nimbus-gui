import { useEffect, useState } from 'react'
import BreadcrumbBar from '../../components/General/BreadcrumbBar/BreadcrumbBar'
import { Button as StatusButton, Text, Avatar, Checkbox } from '@status-im/components'
import { Article, Label, Separator, Stack, XStack, YStack } from 'tamagui'
import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import Titles from '../../components/General/Titles'
import LabelInputField from '../../components/General/LabelInputField'
import Header from '../../components/General/Header'
import { NodeIcon } from '@status-im/icons'

const ConnectDevicePage = () => {
  const [autoConnectChecked, setAutoConnectChecked] = useState(false)
  const [portChecked, setPortChecked] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const breakpoint = 768

  const responsiveXStackStyle = {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: windowWidth <= breakpoint ? 'column' : 'row',
    flexWrap: windowWidth <= breakpoint ? 'wrap' : 'nowrap',
  }

  const responsiveInputStyle = {
    width: windowWidth <= breakpoint ? '100%' : '40%',
    marginBottom: windowWidth <= breakpoint ? '1rem' : '0',
  }

  return (
    <PageWrapperShadow
      breadcrumbBar={<BreadcrumbBar breadcrumbList={['Nodes', 'Nimbus', 'Connect Device']} />}
      rightImageSrc="./background-images/day-night-bg.png"
      rightImageLogo={true}
    >
      <YStack space={'$3'}>
        <Header selectedTag="Pair" />
        <Article className="content">
          <Titles
            title="Connect Device"
            subtitle="Configure your device to connect to the Nimbus Node Manager"
          />
          <YStack my={16}>
            <XStack style={responsiveXStackStyle}>
              <Stack style={responsiveInputStyle}>
                <LabelInputField labelText="Beacon Address" placeholderText="something" />
              </Stack>
              <Stack style={responsiveInputStyle}>
                <LabelInputField labelText="Beacon Node Port" placeholderText="5052" />
              </Stack>
              <Stack style={responsiveInputStyle}>
                <LabelInputField labelText="Client Validator Port" placeholderText="5052" />
              </Stack>

              <YStack width={20}>
                <Checkbox
                  id="port-checkbox"
                  variant="outline"
                  selected={portChecked}
                  onCheckedChange={v => setPortChecked(v)}
                />
              </YStack>
            </XStack>
            <XStack width={'100%'} alignItems="center">
              <LabelInputField labelText="API Token" placeholderText="****_*****_*****" />
            </XStack>
          </YStack>
          <YStack my={16}>
            <YStack>
              <Text size={13} weight="regular" color={'#647084'}>
                Device Avatar
              </Text>
              <XStack my={10}>
                <Avatar type="user" size={80} name="Device Avatar" />
              </XStack>
              <XStack space>
                <LabelInputField labelText="Device Name" placeholderText="Stake and chips" />
                <LabelInputField labelText="Device Color" placeholderText="#011892" />
              </XStack>
            </YStack>
          </YStack>
          <Separator alignSelf="stretch" borderColor={'#F0F2F5'} />
          <YStack my={16}>
            <YStack>
              <Text size={19} weight="semibold">
                Settings
              </Text>
            </YStack>
            <XStack my={8} space={'$2'}>
              <Checkbox
                id="auto-connect"
                selected={autoConnectChecked}
                onCheckedChange={v => setAutoConnectChecked(v)}
                variant="outline"
              />
              <Label htmlFor="auto-connect">
                <Text size={15} weight="regular">
                  Auto Connect Device
                </Text>
              </Label>
            </XStack>
            <Separator alignSelf="stretch" borderColor={'#F0F2F5'} />
          </YStack>
          <StatusButton icon={<NodeIcon size={20} />}>Connect Device</StatusButton>
        </Article>
      </YStack>
    </PageWrapperShadow>
  )
}

export default ConnectDevicePage
