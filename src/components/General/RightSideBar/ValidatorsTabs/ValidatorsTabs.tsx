import { Tabs } from '@status-im/components'
import { Stack } from 'tamagui'

import ValidatorsList from './ValidatorsList'
import { useMemo } from 'react'

const ValidatorsTabs = () => {
  const VALIDATOR_TABS = useMemo(
    () => [
      {
        label: 'Active',
        value: 'active',
        children: <ValidatorsList />,
      },
      {
        label: 'Pending',
        value: 'pending',
        children: <ValidatorsList />,
      },
      {
        label: 'Inactive',
        value: 'inactive',
        children: <ValidatorsList />,
      },
    ],
    [],
  )

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
      {VALIDATOR_TABS.map(tab => (
        <Tabs.Content value={tab.value} style={{ marginTop: '8px' }}>
          {tab.children}
        </Tabs.Content>
      ))}
    </Tabs>
  )
}

export default ValidatorsTabs
