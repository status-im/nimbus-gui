import { Tabs } from '@status-im/components'

import ValidatorsList from './ValidatorsList'

const VALIDATOR_TABS = [
  {
    label: 'Active',
    value: 'active',
  },
  {
    label: 'Pending',
    value: 'pending',
  },
  {
    label: 'Inactive',
    value: 'inactive',
  },
]

const ValidatorsTabs = () => {
  return (
    <Tabs defaultValue="active">
      <Tabs.List size={32}>
        {VALIDATOR_TABS.map(tab => (
          <Tabs.Trigger type="default" value={tab.value}>
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <Tabs.Content value="active" style={{ marginTop: '8px' }}>
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
