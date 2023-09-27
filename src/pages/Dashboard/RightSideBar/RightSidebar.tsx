import { Avatar, InformationBox, Tabs, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
import ValidatorListItem from './ValidatorListItem'
import { CloseCircleIcon, ChevronRightIcon } from '@status-im/icons'
import AddCard from '../../../components/General/AddCards/AddCard'
import ValidatorsList from './ValidatorsList'

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
        <YStack backgroundColor={'#2A4AF5'} style={{ padding: '8px 12px', borderRadius: '16px' }}>
          <Text size={15} weight={'semibold'} color={'#FFF'}>
            Diamond Hands
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

      <YStack space={'$2'}>
        <XStack justifyContent="space-between">
          <Text size={15} weight={'semibold'}>
            Alerts
          </Text>
          <div style={{ marginRight: '8px' }}>
            <ChevronRightIcon size={20} />
          </div>
        </XStack>
        <InformationBox
          message="Network: Participation rate below 66%"
          icon={<CloseCircleIcon size={20} />}
          variant="default"
          onClosePress={() => alert('dismissed')}
        />
        <InformationBox
          message="Node: 32 Peers Connected"
          icon={<CloseCircleIcon size={20} />}
          variant="information"
          onClosePress={() => alert('dismissed')}
        />
        <InformationBox
          message="Node / Validator: Process Down"
          icon={<CloseCircleIcon size={20} />}
          variant="error"
          onClosePress={() => alert('dismissed')}
        />
      </YStack>

      <YStack space={'$2'}>
        <XStack justifyContent="space-between">
          <Text size={15} weight={'semibold'}>
            Logs
          </Text>
          <div style={{ marginRight: '8px' }}>
            <ChevronRightIcon size={20} />
          </div>
        </XStack>
        <InformationBox
          message="Critical Logs: 0.01 / M"
          icon={<CloseCircleIcon size={20} />}
          variant="default"
        />
        <InformationBox
          message="Warning Logs: 0.01 / M"
          icon={<CloseCircleIcon size={20} />}
          variant="default"
        />
        <InformationBox
          message="Error Logs: 0.01 / M"
          icon={<CloseCircleIcon size={20} />}
          variant="default"
        />
      </YStack>
    </YStack>
  )
}

export default RightSidebar
