import { Tabs } from '@status-im/components'

import ValidatorsList from './ValidatorsList'

const ValidatorsTabs = () => {
  return (
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
  )
}

export default ValidatorsTabs
