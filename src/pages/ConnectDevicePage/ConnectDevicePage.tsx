import { useState } from 'react'
import BreadcrumbBar from '../../components/General/BreadcrumbBar/BreadcrumbBar'
import { Button as StatusButton, Tag, Text, Avatar, Checkbox } from '@status-im/components'
import { Label, Separator, XStack, YStack } from 'tamagui'
import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import NimbusLogo from '../../components/Logos/NimbusLogo'
import Titles from '../../components/General/Titles'
import NodeIcon from '../../components/Icons/NodeIcon'
import ConnectIcon from '../../components/Icons/ConnectIcon'
import PairIcon from '../../components/Icons/PairIcon'
import CreateIcon from '../../components/Icons/CreateIcon'
import LabelInputField from '../../components/General/LabelInputField'

const ConnectDevicePage = () => {
  const [autoConnectChecked, setAutoConnectChecked] = useState(false)
  const [portChecked, setPortChecked] = useState(false)

  return (
    <PageWrapperShadow
      breadcrumbBar={<BreadcrumbBar breadcrumbList={['Nodes', 'Nimbus', 'Connect Device']} />}
      rightImageSrc="/background-images/day-night-bg.png"
    >
      <div className="connection-page">
        <XStack justifyContent={'space-between'}>
          <NimbusLogo />
          <XStack space={'$2'} alignItems="center">
            <Tag icon={ConnectIcon} label="Connect" size={32} selected />
            <Tag icon={PairIcon} label="Pair" size={32} />
            <Tag icon={CreateIcon} label="Create" size={32} />
          </XStack>
        </XStack>
        <article className="content">
          <section className="mb-1">
            <Titles
              title="Connect Device"
              subtitle="Configure your device to connect to the Nimbus Node Manager"
            />
          </section>
          <section className="mb-1">
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
          </section>
          <section className="mb-1">
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
          </section>
          <Separator alignSelf="stretch" borderColor={'#F0F2F5'} />
          <section className="my-1">
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
          </section>
          <StatusButton icon={<NodeIcon />}>Connect Device</StatusButton>
        </article>
      </div>
    </PageWrapperShadow>
  )
}

export default ConnectDevicePage
