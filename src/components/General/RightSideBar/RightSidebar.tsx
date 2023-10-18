import { Avatar, Tabs, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

import AddCard from '../AddCards/AddCard'
import ValidatorsList from './ValidatorsList'
import AlertsList from './AlertsList'
import LogsList from './LogsList'
import DiamondCard from './DiamondCard'
import { getFormattedWalletAddress } from '../../../utilities'
import styles from './RightSidebar.module.css'
import ValidatorsCount from './ValidatorsCount'

const RightSidebar = () => {
  return (
    <YStack
      width={'320px'}
      space={'$4'}
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
        <Avatar type="user" size={32} name="Etherium Mainnet" />
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
      <Tabs defaultValue="active">
        <Tabs.List size={32}>
          <Tabs.Trigger type="default" value="active">
            Active
          </Tabs.Trigger>
          <Tabs.Trigger type="default" value="pending">
            Pending
          </Tabs.Trigger>
          <Tabs.Trigger type="default" value="inactive">
            Inactive
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="active">
          <ValidatorsList />
        </Tabs.Content>
        <Tabs.Content value="pending">
          <ValidatorsList />
        </Tabs.Content>
        <Tabs.Content value="inactive">
          <ValidatorsList />
        </Tabs.Content>
      </Tabs>
      <AlertsList />
      <LogsList />
    </YStack>
  )
}

export default RightSidebar
