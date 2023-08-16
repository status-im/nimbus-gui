import { useState } from 'react'
import { Button as StatusButton, Tag, Text, Avatar, Checkbox } from '@status-im/components'
import { Label, Separator, XStack, YStack } from 'tamagui'
import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import NimbusLogo from '../../components/Logos/NimbusLogo'
import Titles from '../../components/General/Titles'
import NodeIcon from '../../components/Icons/NodeIcon'
import PairIcon from '../../components/Icons/PairIcon'
import CreateIcon from '../../components/Icons/CreateIcon'
import LabelInputField from '../../components/General/LabelInputField'

const CreateLocalNodePage = () => {
  const [autoConnectChecked, setAutoConnectChecked] = useState(false)

  return (
    <PageWrapperShadow rightImageSrc="/background-images/day-night-bg.png">
      <div className="connection-page">
        <XStack justifyContent={'space-between'}>
          <NimbusLogo />
          <XStack space={'$2'} alignItems="center">
            <Tag icon={PairIcon} label="Pair" size={32} />
            <Tag selected icon={CreateIcon} label="Create" size={32} />
          </XStack>
        </XStack>
        <article className="content">
          <Titles
            title="Create Local Node"
            subtitle="Configure your device to start Staking on Nimbus"
          />
          <YStack my={16}>
            <XStack space>
              <LabelInputField labelText="Device Name" placeholderText="Stake and chips" />
            </XStack>
            <XStack my={10} justifyContent={'space-between'}>
              <YStack>
                <Text size={13} weight="regular" color={'#647084'}>
                  Device Avatar
                </Text>
                <Avatar type="user" size={80} name="Device Avatar" />
              </YStack>
              <YStack>
                <Text size={13} weight="regular" color={'#647084'}>
                  Highlight Color
                </Text>
                {/* <Avatar type="user" size={80} name="Device Avatar" /> */}
              </YStack>
            </XStack>
          </YStack>
          <YStack my={16}>
            <Text size={19} weight="semibold">
              Settings
            </Text>
            <XStack my={8} space={'$2'}>
              <Checkbox
                id="auto-connect"
                selected={autoConnectChecked}
                onCheckedChange={v => setAutoConnectChecked(v)}
                variant="outline"
              />
              <Label htmlFor="auto-connect">
                <Text size={15} weight="regular">
                  Auto Connect Paired Device
                </Text>
              </Label>
            </XStack>
            <Separator alignSelf="stretch" borderColor={'#F0F2F5'} />
          </YStack>
          <StatusButton icon={<NodeIcon />}>Continue</StatusButton>
        </article>
      </div>
    </PageWrapperShadow>
  )
}

export default CreateLocalNodePage
