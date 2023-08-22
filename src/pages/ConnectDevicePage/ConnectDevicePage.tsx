import { useState } from 'react'
import BreadcrumbBar from '../../components/General/BreadcrumbBar/BreadcrumbBar'
import { Button as StatusButton, Text, Avatar, Checkbox } from '@status-im/components'
import { Label, Separator, XStack, YStack } from 'tamagui'
import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import Titles from '../../components/General/Titles'
import LabelInputField from '../../components/General/LabelInputField'
import Header from '../../components/General/Header'
import { NodeIcon } from '@status-im/icons'

const ConnectDevicePage = () => {
  const [autoConnectChecked, setAutoConnectChecked] = useState(false)
  const [portChecked, setPortChecked] = useState(false)

  return (
    <PageWrapperShadow
      breadcrumbBar={<BreadcrumbBar breadcrumbList={['Nodes', 'Nimbus', 'Connect Device']} />}
      rightImageSrc="./background-images/day-night-bg.png"
      rightImageLogo={true}
    >
      <YStack space={'$3'}>
        <Header selectedTag="connect" />

        <article className="content">
          <Titles
            title="Connect Device"
            subtitle="Configure your device to connect to the Nimbus Node Manager"
          />
          <YStack my={16}>
            <XStack
              width={'100%'}
              alignItems="center"
              justifyContent="space-between"
              // media query
              $lg={{
                flexDirection: 'column',
                flexWrap: 'nowrap',
              }}
            >
              <XStack width={'40%'}>
                <LabelInputField labelText="Beacon Address" placeholderText="something" />
              </XStack>
              <XStack width={'25%'}>
                <LabelInputField labelText="Beacon Node Port" placeholderText="5052" />
              </XStack>
              <XStack width={'25%'}>
                <LabelInputField labelText="Client Validator Port" placeholderText="5052" />
              </XStack>
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
        </article>
      </YStack>
    </PageWrapperShadow>
  )
}

export default ConnectDevicePage
