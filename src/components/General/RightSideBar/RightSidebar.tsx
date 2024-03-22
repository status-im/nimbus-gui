import { Avatar, Popover, Text } from '@status-im/components'
import { Stack, XStack, YStack } from 'tamagui'
import {
  AddSmallIcon,
  CloseIcon,
  CopyIcon,
  OptionsIcon,
} from '@status-im/icons'
import { useState } from 'react'

import AlertsList from '../../../components/General/RightSideBar/AlertsList'
import LogsList from '../../../components/General/RightSideBar/LogsList'
import ValidatorsTabs from '../../../components/General/RightSideBar/ValidatorsTabs/ValidatorsTabs'
import ValidatorsCount from '../../../components/General/RightSideBar/ValidatorsCount'
import NodesList from './NodesList'
import DiamondCard from './DiamondCard'
import { copyFunction, getFormattedWalletAddress } from '../../../utilities'

const RightSidebar = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const address = '0xb9dc35'

  const onCopyWalletAddress = () => {
    copyFunction(address)
  }

  const handlePopoverOpenChange = (open: boolean) => {
    setIsPopoverOpen(open)
  }
  return (
    <YStack
      width={'320px'}
      space={'$3'}
      backgroundColor={'#FFF'}
      className={'transparent-scrollbar'}
      style={{
        padding: '8px',
        border: '1px solid #F0F2F5',
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      <XStack
        justifyContent="space-between"
        alignItems="center"
        alignContent="center"
      >
        <XStack space={'$2'} alignItems="center">
          <Avatar type="user" size={32} name="Ethereum Mainnet" />
          <YStack>
            <Text size={15} weight={'semibold'}>
              Ethereum Mainnet
            </Text>
            <XStack space={'$1'} alignItems="center">
              <Text size={13}>{getFormattedWalletAddress(address)}</Text>
              <CopyIcon
                size={16}
                color="#647084"
                style={{ cursor: 'pointer' }}
                onClick={onCopyWalletAddress}
              />
            </XStack>
          </YStack>
        </XStack>
        <Popover
          side="top"
          align="center"
          onOpenChange={handlePopoverOpenChange}
          children={[
            <Stack
              style={{
                border: '1px solid #C8D0D8',
                borderRadius: '9px',
                marginRight: '10px',
                padding: '3px',
                cursor: 'pointer',
              }}
            >
              {isPopoverOpen ? (
                <CloseIcon size={20} />
              ) : (
                <OptionsIcon size={20} />
              )}
            </Stack>,
            <NodesList />,
          ]}
        />
      </XStack>
      <DiamondCard />
      <ValidatorsCount />
      <XStack
        backgroundColor={'#757e8c'}
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        space="$2"
        style={{
          padding: '8px 12px',
          borderRadius: '16px',
        }}
      >
        <AddSmallIcon size={20} color="#fff" />
        <Text size={19} color={'#FFF'}>
          Add Validator
        </Text>
      </XStack>
      <ValidatorsTabs />
      <AlertsList />
      <LogsList />
    </YStack>
  )
}

export default RightSidebar
