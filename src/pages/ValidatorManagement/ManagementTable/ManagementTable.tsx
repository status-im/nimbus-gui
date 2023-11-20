import { Checkbox, Text } from '@status-im/components'
import { OptionsIcon } from '@status-im/icons'
import { useEffect, useMemo, useState } from 'react'
import { YStack, XStack } from 'tamagui'

import { VALIDATORS_DATA, VALIDATOR_TABS_MANAGEMENT } from '../../../constants'
import ValidatorProfile from '../../../components/General/ValidatorProfile'
import SearchManagement from './SearchManagement'
import DropdownFilter from './DropdownFilter'
import ManagementTableHeader from './ManagementTableHeader'
import './ManagementTable.css'

type ManagementTableProps = {
  tab: string
  searchValue: string
  changeSearchValue: (value: string) => void
}

type Validator = {
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
        <tbody>
          {filteredValidators.map((validator, index) => (
            <tr key={index}>
              <td>
                <Checkbox id={index.toString()} variant="outline" />
              </td>
              <td>
                <ValidatorProfile number={validator.number} address={validator.address} />
              </td>
              <td>
                <Text size={15} color={'#647084'} weight={'semibold'}>
                  {validator.balance}
                </Text>
              </td>
              <td>
                <Text size={15} color={'#647084'} weight={'semibold'}>
                  {validator.income}
                </Text>
              </td>
              <td>
                <Text size={15} color={'#647084'}>
                  {validator.proposals}
                </Text>
              </td>
              <td>
                <Text size={15} color={'#647084'}>
                  {validator.attestations}
                </Text>
              </td>
              <td>
                <Text size={15} color={'#647084'}>
                  {validator.effectiveness}%
                </Text>
              </td>
              <td>
                <Text size={15} color={'#2F80ED'} weight={'semibold'}>
                  {validator.status}
                </Text>
              </td>
              <td>
                <OptionsIcon size={20} color="#647084" style={{ cursor: 'pointer' }} />
              </td>
            </tr>
          ))}
          {filteredValidators.length === 0 && (
            <tr>
              <td colSpan={11}>
                <Text size={15} color={'#647084'} weight={'semibold'}>
                  No validators
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </YStack>
  )
}

export default ManagementTable
