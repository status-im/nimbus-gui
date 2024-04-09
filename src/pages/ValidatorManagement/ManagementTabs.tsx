import { Tabs } from '@status-im/components'
import { Stack, XStack } from 'tamagui'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { VALIDATOR_TABS_MANAGEMENT, VALIDATORS_DATA } from '../../constants'
import ManagementTable from './ManagementTable/ManagementTable'
import SearchManagement from './ManagementTable/SearchManagement'
import DropdownFilter from './ManagementTable/DropdownFilter'
import { RootState } from '../../redux/store'

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

const isValidStatus = (validatorStatus: string, tabStatus: string) => {
  if (
    validatorStatus === tabStatus ||
    tabStatus ===
      VALIDATOR_TABS_MANAGEMENT[VALIDATOR_TABS_MANAGEMENT.length - 1]
  ) {
    return true
  }
  return false
}

const isValidNameOrAddress = (
  validatorName: string,
  validatorAddress: string,
  searchValue: string,
) => {
  if (
    validatorName.includes(searchValue) ||
    validatorAddress.includes(searchValue)
  ) {
    return true
  }
  return false
}

const ManagementTabs = () => {
  const [searchValue, setSearchValue] = useState('')
  const [validators, setValidators] = useState<Validator[]>([])
  const { currentTab } = useSelector(
    (state: RootState) => state.validatorManagement,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    setValidators(VALIDATORS_DATA)
  }, [])

  const filteredValidators = useMemo(() => {
    return validators
      .filter(validator => isValidStatus(validator.status, currentTab))
      .filter(validator =>
        isValidNameOrAddress(validator.name, validator.address, searchValue),
      )
  }, [validators, searchValue, currentTab])

  const changeSearchValue = (value: string) => {
    setSearchValue(value)
  }

  const changeCurrentTabHandler = (value: string) => {
    dispatch({ type: 'validatorManagement/setCurrentTab', payload: value })
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
      <Tabs
        defaultValue={VALIDATOR_TABS_MANAGEMENT[0]}
        onValueChange={changeCurrentTabHandler}
      >
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
                    {`${filteredValidators.length.toString()} ${tab}`}
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
            <ManagementTable filteredValidators={filteredValidators} />
          </Tabs.Content>
        ))}
      </Tabs>
    </div>
  )
}

export default ManagementTabs
