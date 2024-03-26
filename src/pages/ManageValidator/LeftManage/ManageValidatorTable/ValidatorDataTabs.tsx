import { Stack } from 'tamagui'
import { MANAGE_VALIDATOR_TABS } from '../../../../constants'
import { Tabs } from '@status-im/components'
import { useDispatch, useSelector } from 'react-redux'

import ValidatorTable from './ValidatorTable'
import { RootState } from '../../../../redux/store'
import { setCurrentTab } from '../../../../redux/ManageValidatorTab/slice'

const ValidatorDataTabs = () => {
  const dispatch = useDispatch()
  const currentTab = useSelector(
    (state: RootState) => state.manageValidatorTab.currentTab,
  )
  return (
    <Stack>
      <Tabs
        defaultValue={'' + MANAGE_VALIDATOR_TABS[currentTab]}
        onValueChange={(value: string) =>
          dispatch(setCurrentTab(MANAGE_VALIDATOR_TABS.indexOf(value)))
        }
      >
        <div className="tabs transparent-scrollbar">
          <Stack style={{ cursor: 'pointer', margin: '8px 0' }}>
            <Tabs.List size={32} variant="grey">
              {MANAGE_VALIDATOR_TABS.map((tab, index) => (
                <Tabs.Trigger key={index} type="default" value={tab}>
                  {tab}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </Stack>
        </div>
        {MANAGE_VALIDATOR_TABS.map(tab => (
          <Tabs.Content key={tab} value={tab}>
            <ValidatorTable />
          </Tabs.Content>
        ))}
      </Tabs>
    </Stack>
  )
}

export default ValidatorDataTabs
