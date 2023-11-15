import { Tabs } from '@status-im/components'
import { Stack } from 'tamagui'

import ManagementTable from './ManagementTable/ManagementTable'
import { VALIDATOR_TABS } from '../../constants'

const ManagementTabs = () => {
  return (
    <div style={{ width: '100%' }}>
      <Tabs defaultValue={VALIDATOR_TABS[0]}>
        <Stack style={{ cursor: 'pointer', width: 'fit-content', margin: '16px 0' }}>
          <Tabs.List size={32}>
            {VALIDATOR_TABS.map(tab => (
              <Tabs.Trigger key={tab} type="default" value={tab}>
                {tab}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Stack>
        {VALIDATOR_TABS.map(tab => (
          <Tabs.Content key={tab} value={tab} style={{ marginTop: '8px' }}>
            <ManagementTable tab={tab} />
          </Tabs.Content>
        ))}
      </Tabs>
    </div>
  )
}

export default ManagementTabs
