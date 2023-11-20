import { Tabs } from '@status-im/components'
import { Stack } from 'tamagui'

import ValidatorsList from './ValidatorsList'
import { VALIDATOR_TABS_RIGHT_SIDEBAR } from '../../../../constants'

const ValidatorsTabs = () => {
  return (
    <Tabs defaultValue="active">
      <Stack style={{ cursor: 'pointer', width: 'fit-content' }}>
        <Tabs.List size={32}>
          {VALIDATOR_TABS_RIGHT_SIDEBAR.map(tab => (
            <Tabs.Trigger key={tab} type="default" value={tab}>
              {tab}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Stack>
      {VALIDATOR_TABS_RIGHT_SIDEBAR.map(tab => (
        <Tabs.Content key={tab} value={tab} style={{ marginTop: '8px' }}>
          <ValidatorsList />
        </Tabs.Content>
      ))}
    </Tabs>
  )
}

export default ValidatorsTabs
