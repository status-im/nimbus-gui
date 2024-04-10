import { Tabs } from '@status-im/components'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { VALIDATOR_TABS_MANAGEMENT, VALIDATORS_DATA } from '../../constants'
import ManagementTable from './ManagementTable/ManagementTable'
import SearchManagement from './ManagementTable/SearchManagement'
import DropdownFilter from './ManagementTable/DropdownFilter'
import { RootState } from '../../redux/store'
import styles from './validatorManagement.module.css'

export type Validator = {
  name: string
  address: string
  balance: number
  income: number
  proposals: string
  attestations: string
  effectiveness: number
  status: string
}

const isValidStatus = (validatorStatus: string, tabStatus: string) =>
  validatorStatus === tabStatus ||
  tabStatus === VALIDATOR_TABS_MANAGEMENT[VALIDATOR_TABS_MANAGEMENT.length - 1]

const isValidNameOrAddress = (
  validatorName: string,
  validatorAddress: string,
  searchValue: string,
) =>
  validatorName.includes(searchValue) || validatorAddress.includes(searchValue)

const ManagementTabs = () => {
  const [searchValue, setSearchValue] = useState('')
  const [validators, setValidators] = useState<Validator[]>([])
  const { currentTab, filteredValidators } = useSelector(
    (state: RootState) => state.validatorManagement,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    setValidators(VALIDATORS_DATA)
  }, [])

  useEffect(() => {
    const newValidators = validators
      .filter(validator => isValidStatus(validator.status, currentTab))
      .filter(validator =>
        isValidNameOrAddress(validator.name, validator.address, searchValue),
      )

    dispatch({
      type: 'validatorManagement/setFilteredValidators',
      payload: newValidators,
    })
  }, [validators, searchValue, currentTab])

  const changeSearchValue = (value: string) => {
    setSearchValue(value)
  }

  const changeCurrentTabHandler = (value: string) => {
    dispatch({ type: 'validatorManagement/setCurrentTab', payload: value })
  }

  return (
    <div className={styles['tabs-container']}>
      <Tabs
        defaultValue={VALIDATOR_TABS_MANAGEMENT[0]}
        onValueChange={changeCurrentTabHandler}
      >
        <div className={styles['tabs-settings-container']}>
          <div
            className={`${styles['tabs-list-container']} transparent-scrollbar`}
          >
            <div style={{ cursor: 'pointer' }}>
              <Tabs.List size={32} variant="grey">
                {VALIDATOR_TABS_MANAGEMENT.map(tab => (
                  <Tabs.Trigger key={tab} type="default" value={tab}>
                    {`${currentTab === tab ? filteredValidators.length.toString() : ''} ${tab}`}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
            </div>
          </div>
          <div
            className={`${styles['search-filter-container']} transparent-scrollbar`}
          >
            <SearchManagement
              searchValue={searchValue}
              changeSearchValue={changeSearchValue}
            />
            <DropdownFilter />
          </div>
        </div>
        {VALIDATOR_TABS_MANAGEMENT.map(tab => (
          <Tabs.Content key={tab} value={tab} style={{ marginTop: '8px' }}>
            <ManagementTable />
          </Tabs.Content>
        ))}
      </Tabs>
    </div>
  )
}

export default ManagementTabs
