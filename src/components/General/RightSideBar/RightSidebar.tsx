import { Avatar, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

import AddCard from '../AddCards/AddCard'
import AlertsList from './AlertsList'
import LogsList from './LogsList'
import DiamondCard from './DiamondCard'
import ValidatorsCount from './ValidatorsCount'
import ValidatorsTabs from './ValidatorsTabs'
import { getFormattedWalletAddress } from '../../../utilities'
import styles from './RightSidebar.module.css'

const RightSidebar = () => {
  return (
    <YStack
      width={'320px'}
      space={'$3'}
      backgroundColor={'#FFF'}
      className={styles['transparent-scrollbar']}
      style={{
        padding: '8px',
        border: '1px solid #F0F2F5',
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      <XStack alignItems="center">
        <Avatar type="user" size={32} name="Ethereum Mainnet" />
        <YStack pl="8px">
          <Text size={15} weight={'semibold'}>
            Ethereum Mainnet
          </Text>
          <Text size={13}>{getFormattedWalletAddress('0xb9dc35')}</Text>
        </YStack>
      </XStack>
      <XStack space={'$2'} alignItems="center" justifyContent="space-between">
        <DiamondCard />
        <AddCard style={{ padding: '0 2vw' }} />
      </XStack>
      <ValidatorsCount />
      <ValidatorsTabs />
      <AlertsList />
      <LogsList />
    </YStack>
  )
}

export default RightSidebar
