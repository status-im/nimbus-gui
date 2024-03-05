import { Avatar, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
import { CopyIcon } from '@status-im/icons'

import AlertsList from '../../../components/General/RightSideBar/AlertsList'
import LogsList from '../../../components/General/RightSideBar/LogsList'

import { copyFunction, getFormattedWalletAddress } from '../../../utilities'
import ValidatorsTabs from '../../../components/General/RightSideBar/ValidatorsTabs/ValidatorsTabs'
import ValidatorsCount from '../../../components/General/RightSideBar/ValidatorsCount'
import DashboardDiamondCard from './DashboardDiamondCard'
import AddValidatorButton from './AddValidatorButton'

const DashboardSidebar = () => {
  const onCopyWalletAddress = () => {
    copyFunction('0xb9dc35')
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
      <XStack alignItems="center" space={'$2'}>
        <Avatar type="user" size={32} name="Ethereum Mainnet" />
        <YStack>
          <Text size={15} weight={'semibold'}>
            Ethereum Mainnet
          </Text>
          <XStack space={'$1'} alignItems="center">
            <Text size={13}>{getFormattedWalletAddress('0xb9dc35')}</Text>
            <CopyIcon
              size={16}
              color="#647084"
              style={{ cursor: 'pointer' }}
              onClick={onCopyWalletAddress}
            />
          </XStack>
        </YStack>
      </XStack>
      <XStack space={'$2'} alignItems="center" justifyContent="space-between">
        <DashboardDiamondCard />
      </XStack>
      <ValidatorsCount />
      <AddValidatorButton></AddValidatorButton>
      <ValidatorsTabs />
      <AlertsList />
      <LogsList />
    </YStack>
  )
}

export default DashboardSidebar
