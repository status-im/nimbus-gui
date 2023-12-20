import { NodeIcon } from '@status-im/icons'
import { useEffect, useState } from 'react'
import { Button as StatusButton, Text, Checkbox } from '@status-im/components'
import { Article, Label, Separator, Stack, XStack, YStack } from 'tamagui'

import BreadcrumbBar from '../../components/General/BreadcrumbBar/BreadcrumbBar'
import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import Titles from '../../components/General/Titles'
import LabelInputField from '../../components/General/LabelInputField'
import Header from '../../components/General/Header'
import CreateAvatar from '../../components/General/CreateAvatar/CreateAvatar'

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

  const breakpoint = 268

  const responsiveXStackStyle = {
    space: '$4',
    alignItems: 'center',
    flexDirection: windowWidth <= breakpoint ? 'column' : 'row',
    width: '55%',
  }
  const checkboxStackStyle = {
    marginTop: '20px',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const responsiveInputStyle = {
    marginBottom: windowWidth <= breakpoint ? '0.5rem' : '0',
    width: '100%',
  }

  return (
    <PageWrapperShadow
      breadcrumbBar={<BreadcrumbBar breadcrumbList={['Nodes', 'Nimbus', 'Connect Device']} />}
      rightImageSrc="./background-images/day-night-bg.png"
      rightImageLogo={true}
    >
      <YStack space={'$3'}>
        <Header selectedTag="connect" />

        <Article className="content">
          <Titles
            title="Connect Device"
            subtitle="Configure your device to connect to the Nimbus Node Manager"
          />
          <YStack my={16} width={'50%'}>
            <XStack style={responsiveXStackStyle} space={'$3'}>
              <Stack style={responsiveInputStyle}>
                <LabelInputField
                  labelText="Beacon Address"
                  placeholderText="something"
                  width="100%"
                />
              </Stack>
              <Stack style={responsiveInputStyle}>
                <LabelInputField labelText="Beacon Node Port" placeholderText="5052" width="100%" />
              </Stack>
              <Stack style={responsiveInputStyle}>
                <LabelInputField
                  labelText="Client Validator Port"
                  placeholderText="5052"
                  width="100%"
                />
              </Stack>

              <YStack width={20} style={checkboxStackStyle}>
                <Checkbox
                  id="port-checkbox"
                  variant="outline"
                  selected={portChecked}
                  onCheckedChange={v => setPortChecked(v)}
                />
              </YStack>
            </XStack>
            <XStack alignItems="center" width="100%">
              <LabelInputField
                labelText="API Token"
                placeholderText="****_*****_*****"
                width="180%"
              />
            </XStack>
          </YStack>
          <YStack my={16}>
            <CreateAvatar></CreateAvatar>
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
          <div>
            <StatusButton icon={<NodeIcon size={20} />}>Connect Device</StatusButton>
          </div>
        </Article>
      </YStack>
    </PageWrapperShadow>
  )
}

export default ConnectDevicePage
