import { useState } from 'react'
import { Button as StatusButton, Text, Avatar, Checkbox } from '@status-im/components'
import { NodeIcon, ReactionIcon } from '@status-im/icons'
import { Label, Separator, XStack, YStack } from 'tamagui'
import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import Header from '../../components/General/Header'
import Titles from '../../components/General/Titles'
import LabelInputField from '../../components/General/LabelInputField'
import ColorPicker from '../../components/General/ColorPicker/ColorPicker'
import EmojiPickerDialog from '../../components/General/EmojiPickerDialog'

const CreateLocalNodePage = () => {
  const [autoConnectChecked, setAutoConnectChecked] = useState(false)
  const [isEmojiDialogOpen, setIsEmojiDialogOpen] = useState(false)

  return (
    <PageWrapperShadow rightImageSrc="./background-images/day-night-bg.png" rightImageLogo={true}>
      <YStack space={'$3'}>
        <Header selectedTag="create" />
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
                <XStack my={10}>
                  <Avatar type="account" size={80} name="Device Avatar" />
                  <Avatar
                    type="icon"
                    size={32}
                    icon={
                      <ReactionIcon
                        size={20}
                        onClick={() => setIsEmojiDialogOpen(prev => !prev)}
                        style={{ cursor: 'pointer' }}
                      />
                    }
                  />
                  {isEmojiDialogOpen && <EmojiPickerDialog emojiStyle="TWITTER" />}
                </XStack>
              </YStack>
              <YStack>
                <Text size={13} weight="regular" color={'#647084'}>
                  Highlight Color
                </Text>
                <ColorPicker />
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
          <StatusButton icon={<NodeIcon size={20} />}>Continue</StatusButton>
        </article>
      </YStack>
    </PageWrapperShadow>
  )
}

export default CreateLocalNodePage
