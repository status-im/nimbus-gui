import { useEffect, useMemo, useState } from 'react'
import { YStack, XStack } from 'tamagui'

import { VALIDATORS_DATA, VALIDATOR_TABS_MANAGEMENT } from '../../../constants'
import SearchManagement from './SearchManagement'
import DropdownFilter from './DropdownFilter'
import ManagementTableHeader from './ManagementTableHeader'
import ManagementTableBody from './ManagementTableBody'
import './ManagementTable.css'

type ManagementTableProps = {
  tab: string
  searchValue: string
  changeSearchValue: (value: string) => void
}

export type Validator = {
  number: number
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
    tabStatus === VALIDATOR_TABS_MANAGEMENT[VALIDATOR_TABS_MANAGEMENT.length - 1]
  ) {
    return true
  }
  return false
}

const isValidNumberOrAddress = (
  validatorNumber: number,
  validatorAddress: string,
  searchValue: string,
) => {
  if (validatorNumber.toString().includes(searchValue) || validatorAddress.includes(searchValue)) {
    return true
  }
  return false
}

const ManagementTable = ({ tab, searchValue, changeSearchValue }: ManagementTableProps) => {
  const [validators, setValidators] = useState<Validator[]>([])

  useEffect(() => {
    setValidators(VALIDATORS_DATA)
  }, [])

  const filteredValidators = useMemo(() => {
    return validators
      .filter(validator => isValidStatus(validator.status, tab))
      .filter(validator => isValidNumberOrAddress(validator.number, validator.address, searchValue))
  }, [validators, tab, searchValue])

  return (
    <YStack>
      <XStack space={'$3'} justifyContent="space-between" alignItems="center">
        <SearchManagement searchValue={searchValue} changeSearchValue={changeSearchValue} />
        <DropdownFilter />
      </XStack>
      <table>
        <ManagementTableHeader validatorsAmount={filteredValidators.length} />
        <ManagementTableBody filteredValidators={filteredValidators} />
      </table>
    </YStack>
  )
}

export default ManagementTable
