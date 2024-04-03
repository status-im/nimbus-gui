import { Tabs } from '@status-im/components'
import { Stack, XStack } from 'tamagui'
import { useState } from 'react'

import { VALIDATOR_TABS_MANAGEMENT } from '../../constants'
import ManagementTable from './ManagementTable/ManagementTable'
import SearchManagement from './ManagementTable/SearchManagement'
import DropdownFilter from './ManagementTable/DropdownFilter'

const ManagementTabs = () => {
  const [searchValue, setSearchValue] = useState('')

  const changeSearchValue = (value: string) => {
    setSearchValue(value)
  }

  return (
    <div
      style={{
        width: '100%',
        border: '1px solid #E7EAEE',
        borderRadius: '16px',
        borderBottom: 'none',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
      }}
    >
      <Tabs defaultValue={VALIDATOR_TABS_MANAGEMENT[0]}>
        <div
          className="tabs transparent-scrollbar"
          style={{
            borderBottom: '1px solid #E7EAEE',
            padding: '12px',
          }}
        >
          <XStack
            space={'$3'}
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack
              maxWidth={'120px'}
              style={{ cursor: 'pointer', margin: '8px 0' }}
            >
              <Tabs.List size={32} variant="grey">
                {VALIDATOR_TABS_MANAGEMENT.map(tab => (
                  <Tabs.Trigger key={tab} type="default" value={tab}>
                    {tab}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
            </Stack>
            <SearchManagement
              searchValue={searchValue}
              changeSearchValue={changeSearchValue}
            />
            <DropdownFilter />
          </XStack>
        </div>
        {VALIDATOR_TABS_MANAGEMENT.map(tab => (
          <Tabs.Content key={tab} value={tab} style={{ marginTop: '8px' }}>
            <ManagementTable tab={tab} searchValue={searchValue} />
          </Tabs.Content>
        ))}
      </Tabs>
    </div>
  )
}

export default ManagementTabs
