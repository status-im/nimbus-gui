import { Avatar, Tabs, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
import ValidatorListItem from './ValidatorListItem'
import AddCard from '../../../components/General/AddCards/AddCard'
import ValidatorsList from './ValidatorsList'
import AlertsList from './AlertsList'
import LogsList from './LogsList'

const RightSidebar = () => {
  return (
    <YStack
      space={'$4'}
      minHeight={'100vh'}
      background={'#FFF'}
      style={{ padding: '8px', border: '1px solid #F0F2F5' }}
    >
      <XStack alignItems="center">
        <Avatar type="user" size={32} name="Etherium Mainnet" />
        <YStack pl="8px">
          <Text size={15} weight={'semibold'}>
            Etherium Mainnet
          </Text>
          <Text size={13}>0xb9d...c35</Text>
        </YStack>
      </XStack>

      <XStack alignItems="center" justifyContent="space-between">
        <YStack
          backgroundColor={'#2A4AF5'}
          style={{
            padding: '8px 12px',
            borderRadius: '16px',
            flexGrow: '1',
            marginRight: '8px',
            height: '100%',
          }}
        >
          <Text size={15} weight={'semibold'} color={'#FFF'}>
            Diamond Hands
          </Text>
          <Text size={27} weight={'semibold'} color={'#FFF'}>
            $0.00
          </Text>
        </YStack>
        <AddCard padding={'0 2vw'} />
      </XStack>

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
          <ValidatorListItem name={'Validator 5'} avatarKey={'37880sfsef38fsb'} />
        </Tabs.Content>
        <Tabs.Content value="inactive">
          <ValidatorListItem name={'Validator 6'} avatarKey={'37880sfsef38fsb'} />
        </Tabs.Content>
      </Tabs>

      <AlertsList />

      <LogsList />
    </YStack>
  )
}

export default RightSidebar
