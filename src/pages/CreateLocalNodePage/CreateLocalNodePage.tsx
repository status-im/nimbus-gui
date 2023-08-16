import { useState } from 'react'
import { Button as StatusButton, Tag, Text, Avatar, Checkbox } from '@status-im/components'
import { Label, Separator, XStack, YStack } from 'tamagui'
import { CirclePicker } from 'react-color'
import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import NimbusLogo from '../../components/Logos/NimbusLogo'
import Titles from '../../components/General/Titles'
import NodeIcon from '../../components/Icons/NodeIcon'
import PairIcon from '../../components/Icons/PairIcon'
import CreateIcon from '../../components/Icons/CreateIcon'
import LabelInputField from '../../components/General/LabelInputField'
import ReactionIcon from '../../components/Icons/ReactionIcon'

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
              <YStack mr={30}>
                <Text size={13} weight="regular" color={'#647084'}>
                  Device Avatar
                </Text>
                <XStack>
                  <Avatar type="account" size={80} name="Device Avatar" />
                  <Avatar type="icon" size={32} icon={<ReactionIcon />} backgroundColor={'white'} />
                </XStack>
              </YStack>
              <YStack>
                <Text size={13} weight="regular" color={'#647084'}>
                  Highlight Color
                </Text>
                <CirclePicker
                  width="80%"
                  circleSize={40}
                  circleSpacing={12}
                  colors={[
                    '#2A4AF5',
                    '#F6B03C',
                    '#7140FD',
                    '#2A799B',
                    '#EC266C',
                    '#1992D7',
                    '#FF7D46',
                    '#216266',
                    '#F66F8F',
                    '#C78F67',
                    '#CB6256',
                  ]}
                />
              </YStack>
            </XStack>
          </YStack>
          <YStack my={16}>
            <Text size={19} weight="semibold">
              Settings
            </Text>
            <XStack my={16} space={'$4'}>
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
