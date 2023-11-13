import { useMemo } from 'react'
import { Tabs } from '@status-im/components'
import { Stack } from 'tamagui'

import ManagementTable from './ManagementTable/ManagementTable'

const ManagementTabs = () => {
  const VALIDATOR_TABS = useMemo(
    () => [
      {
        value: 'Active',
      },
      {
        value: 'Pending',
      },
      {
        value: 'Inactive',
      },
      {
        value: 'Exited',
      },
      {
        value: 'Withdraw',
      },
      {
        value: 'All',
      },
    ],
    [],
  )

  return (
    <Tabs defaultValue="active">
      <Stack style={{ cursor: 'pointer', width: 'fit-content', margin: '16px 0' }}>
        <Tabs.List size={32}>
          {VALIDATOR_TABS.map(tab => (
            <Tabs.Trigger key={tab.value} type="default" value={tab.value}>
              {tab.value}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Stack>
      {VALIDATOR_TABS.map(tab => (
        <Tabs.Content key={tab.value} value={tab.value} style={{ marginTop: '8px' }}>
          <ManagementTable tab={tab.value} />
        </Tabs.Content>
      ))}
    </Tabs>
  )
}

export default ManagementTabs
