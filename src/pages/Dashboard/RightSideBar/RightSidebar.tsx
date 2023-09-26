import { Avatar, Tabs, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
import ValidatorListItem from './ValidatorListItem'
import InputSearch from './SearchInput'
// import { NodeIcon } from '@status-im/icons'

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
          <InputSearch />
          <YStack>
            <ValidatorListItem name={'Validator 1'} avatarKey={'37880sfsef38fsb'} selected={true} />
            <ValidatorListItem name={'Validator 2'} avatarKey={'37880sfsef38fsb'} />
            <ValidatorListItem name={'Validator 3'} avatarKey={'37880sfsef38fsb'} />
            <ValidatorListItem name={'Validator 4'} avatarKey={'37880sfsef38fsb'} />
          </YStack>
        </Tabs.Content>
        <Tabs.Content value="pending"></Tabs.Content>
        <Tabs.Content value="inactive"></Tabs.Content>
      </Tabs>
    </YStack>
  )
}

export default RightSidebar
