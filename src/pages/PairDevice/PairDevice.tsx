import { NodeIcon, CompleteIdIcon, ConnectionIcon } from '@status-im/icons'
import { Label, Separator, XStack, YStack } from 'tamagui'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Checkbox, Text } from '@status-im/components'

import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import SyncStatus from './SyncStatus'
import Titles from '../../components/General/Titles'
import PairedSuccessfully from './PairedSuccessfully'
import CreateAvatar from '../../components/General/CreateAvatar/CreateAvatar'
import GenerateId from './GenerateId'
import Header from '../../components/General/Header'
import ConnectViaIP from './ConnectViaIP/ConnectViaIP'
import { RootState } from '../../redux/store'
import { isAddressValid, isPortValid } from '../../utilities'

const PairDevice = () => {
  const [isAwaitingPairing, setIsAwaitingPairing] = useState(false)
  const [isConnectingViaIp, setIsConnectingViaIp] = useState(false)
  const [isAutoConnectChecked, setIsAutoConnectChecked] = useState(false)
  const { isAdvanced, nodeAddress, beaconAddress, beaconPort, vcAddress, vcPort } = useSelector(
    (state: RootState) => state.pairDevice,
  )
  const isPaired = false
  const isPairing = false

  const changeSetIsAwaitingPairing = (result: boolean) => {
    setIsAwaitingPairing(result)
  }

  const connectAndPairHandler = () => {
    setIsConnectingViaIp(state => !state)
  }

  const continueHandler = () => {}

  const isDisabledButton = () => {
    if (isConnectingViaIp) {
      if (isAdvanced) {
        return (
          !isAddressValid(beaconAddress) ||
          !isPortValid(beaconPort) ||
          !isAddressValid(vcAddress) ||
          !isPortValid(vcPort)
        )
      } else {
        return !isAddressValid(nodeAddress) || !isPortValid(beaconPort) || !isPortValid(vcPort)
      }
    } else {
      return !isPaired
    }
  }

  return (
    <PageWrapperShadow rightImageSrc="./background-images/day-night-bg.png" rightImageLogo={true}>
      <YStack space={'$3'}>
        <Header selectedTag="Pair" />
        <Titles
          title="Connect to existing Nimbus Instance"
          subtitle="Pair your existing device to the Nimbus Node Manager"
        />
        {isConnectingViaIp ? (
          <ConnectViaIP />
        ) : isPaired ? (
          <PairedSuccessfully />
        ) : (
          <>
            <GenerateId isAwaitingPairing={isAwaitingPairing} />
            <SyncStatus
              isPairing={isPairing}
              isAwaitingPairing={isAwaitingPairing}
              changeSetIsAwaitingPairing={changeSetIsAwaitingPairing}
            />
          </>
        )}
        {isPaired ? (
          <>
            <YStack space={'$3'}>
              <Separator alignSelf="stretch" borderColor={'#F0F2F5'} marginTop={3} />
              <Text size={19} weight="semibold">
                General Settings
              </Text>
              <XStack space={'$4'} alignItems={'center'}>
                <Checkbox
                  id="auto-connect"
                  selected={isAutoConnectChecked}
                  onCheckedChange={e => setIsAutoConnectChecked(e)}
                  variant="outline"
                />
                <Label htmlFor="auto-connect">
                  <Text size={15} weight="regular">
                    Auto Connect Paired Device
                  </Text>
                </Label>
              </XStack>
            </YStack>
            <CreateAvatar />
          </>
        ) : (
          <YStack space={'$3'}>
            <Separator borderColor={'#e3e3e3'} />
            <YStack space={'$1'}>
              <Text size={19} weight={'semibold'} color="#09101C">
                Advanced Settings
              </Text>
              <XStack>
                <Button
                  icon={
                    isConnectingViaIp ? <CompleteIdIcon size={20} /> : <ConnectionIcon size={20} />
                  }
                  variant="outline"
                  onPress={connectAndPairHandler}
                >
                  {isConnectingViaIp ? 'Pair with ID' : 'Connect via IP'}
                </Button>
              </XStack>
            </YStack>
          </YStack>
        )}
        <Separator borderColor={'#e3e3e3'} />
        <div>
          <Button
            icon={<NodeIcon size={20} />}
            disabled={isDisabledButton()}
            onPress={continueHandler}
          >
            {isConnectingViaIp ? 'Connect Device' : 'Continue'}
          </Button>
        </div>
      </YStack>
    </PageWrapperShadow>
  )
}

export default PairDevice
