import { useState } from 'react'
import { Button as StatusButton, Text, Checkbox } from '@status-im/components'
import { NodeIcon } from '@status-im/icons'
import { Label, Separator, Stack, XStack, YStack } from 'tamagui'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import Header from '../../components/General/Header'
import Titles from '../../components/General/Titles'
import CreateAvatar from '../../components/General/CreateAvatar/CreateAvatar'
import { setNavigationFlow } from '../../redux/NavigationFlow/slice'
import { PATHS } from '../../constants'

const CreateLocalNode = () => {
  const [autoConnectChecked, setAutoConnectChecked] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleContinue = () => {
    dispatch(setNavigationFlow('createNode'))
    navigate(PATHS.DEVICE_HEALTH_CHECK_ONBOARDING)
  }
  return (
    <PageWrapperShadow
      rightImageSrc="./background-images/day-night-bg.png"
      rightImageLogo={true}
    >
      <YStack space={'$3'}>
        <Header selectedTag="Create" />
        <article className="content">
          <Titles
            title="Create Local Node"
            subtitle="Configure your device to start Staking on Nimbus"
          />
          <CreateAvatar />
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
          <Stack cursor="pointer" width={'fit-content'}>
            <StatusButton
              icon={<NodeIcon size={20} />}
              onPress={handleContinue}
            >
              Continue
            </StatusButton>
          </Stack>
        </article>
      </YStack>
    </PageWrapperShadow>
  )
}

export default CreateLocalNode
