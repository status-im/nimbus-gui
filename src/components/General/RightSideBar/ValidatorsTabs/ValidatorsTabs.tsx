import { Tabs } from '@status-im/components'
import { Stack } from 'tamagui'

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
      <Stack style={{ cursor: 'pointer', width: 'fit-content' }}>
        <Tabs.List size={32}>
          {VALIDATOR_TABS.map(tab => (
            <Tabs.Trigger type="default" value={tab.value}>
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Stack>
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
