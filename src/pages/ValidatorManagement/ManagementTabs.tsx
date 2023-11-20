import { Tabs } from '@status-im/components'
import { Stack } from 'tamagui'
import { useState } from 'react'

import ManagementTable from './ManagementTable/ManagementTable'
import { VALIDATOR_TABS_MANAGEMENT } from '../../constants'

const ManagementTabs = () => {
  const [searchValue, setSearchValue] = useState('')

  const changeSearchValue = (value: string) => {
    setSearchValue(value)
  }

  return (
    <div style={{ width: '100%' }}>
      <Tabs defaultValue={VALIDATOR_TABS_MANAGEMENT[0]}>
        <Stack style={{ cursor: 'pointer', width: 'fit-content', margin: '16px 0' }}>
          <Tabs.List size={32}>
            {VALIDATOR_TABS_MANAGEMENT.map(tab => (
              <Tabs.Trigger key={tab} type="default" value={tab}>
                {tab}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Stack>
        {VALIDATOR_TABS_MANAGEMENT.map(tab => (
          <Tabs.Content key={tab} value={tab} style={{ marginTop: '8px' }}>
            <ManagementTable
              tab={tab}
              searchValue={searchValue}
              changeSearchValue={changeSearchValue}
            />
          </Tabs.Content>
        ))}
      </Tabs>
    </div>
  )
}

export default ManagementTabs
