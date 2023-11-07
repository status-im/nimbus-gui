import { useMemo } from 'react'
import { Tabs } from '@status-im/components'
import { Stack } from 'tamagui'

import ManagementTable from './ManagementTable/ManagementTable'

const ManagementTabs = () => {
  const VALIDATOR_TABS = useMemo(
    () => [
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
      {
        label: 'Exited',
        value: 'exited',
      },
      {
        label: 'Withdraw',
        value: 'withdraw',
      },
      {
        label: 'All',
        value: 'all',
      },
    ],
    [],
  )

  return (
    <Tabs defaultValue="active">
      <Stack style={{ cursor: 'pointer', width: 'fit-content' }}>
        <Tabs.List size={32}>
          {VALIDATOR_TABS.map(tab => (
            <Tabs.Trigger key={tab.value} type="default" value={tab.value}>
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Stack>
      {VALIDATOR_TABS.map(tab => (
        <Tabs.Content key={tab.value} value={tab.value} style={{ marginTop: '8px' }}>
          <ManagementTable />
        </Tabs.Content>
      ))}
    </Tabs>
  )
}

export default ManagementTabs
