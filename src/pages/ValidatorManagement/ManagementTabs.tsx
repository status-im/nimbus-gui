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
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
        paddingBottom: '12px',
      }}
    >
      <Tabs defaultValue={VALIDATOR_TABS_MANAGEMENT[0]}>
        <div
          className="tabs transparent-scrollbar"
          style={{
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            borderBottom: '1px solid #E7EAEE',
            backgroundColor: '#fafbfc',
          }}
        >
          <XStack
            space={'$3'}
            justifyContent="space-between"
            alignItems="center"
            style={{ padding: '8px 16px' }}
          >
            <Stack maxWidth={'120px'} style={{ cursor: 'pointer' }}>
              <Tabs.List size={32} variant="grey">
                {VALIDATOR_TABS_MANAGEMENT.map(tab => (
                  <Tabs.Trigger key={tab} type="default" value={tab}>
                    {tab}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
            </Stack>
            <XStack space={'$3'} alignItems="center">
              <SearchManagement
                searchValue={searchValue}
                changeSearchValue={changeSearchValue}
              />
              <DropdownFilter />
            </XStack>
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
