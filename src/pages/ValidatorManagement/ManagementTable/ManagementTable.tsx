import { Checkbox, DropdownMenu, Text } from '@status-im/components'
import { OptionsIcon, SortIcon } from '@status-im/icons'
import { useState } from 'react'
import { YStack, XStack, Stack } from 'tamagui'

import ValidatorProfile from '../../../components/General/ValidatorProfile'
import SearchManagement from './SearchManagement'
import './ManagementTable.css'

const validators = [
  {
    number: 1,
    address: 'zQ3asdf9d4Gs0',
    balance: 100,
    income: 100,
    proposals: 100,
    attestations: 100,
    effectiveness: 100,
    deposits: 100,
    rank: 100,
    status: 'Active',
  },
  {
    number: 1,
    address: 'zQ3asdf9d4Gs0',
    balance: 100,
    income: 100,
    proposals: 100,
    attestations: 100,
    effectiveness: 100,
    deposits: 100,
    rank: 100,
    status: 'Active',
  },
  {
    number: 1,
    address: 'zQ3asdf9d4Gs0',
    balance: 100,
    income: 100,
    proposals: 100,
    attestations: 100,
    effectiveness: 100,
    deposits: 100,
    rank: 100,
    status: 'Active',
  },
  {
    number: 1,
    address: 'zQ3asdf9d4Gs0',
    balance: 100,
    income: 100,
    proposals: 100,
    attestations: 100,
    effectiveness: 100,
    deposits: 100,
    rank: 100,
    status: 'Active',
  },
]

const ManagementTable = () => {
  const [searchValue, setSearchValue] = useState('')

  const changeSearchValue = (value: string) => {
    setSearchValue(value)
  }

  return (
    <YStack>
      <XStack space={'$3'} justifyContent="space-between" alignItems="center">
        <SearchManagement searchValue={searchValue} changeSearchValue={changeSearchValue} />
        <DropdownMenu>
          <Stack style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <SortIcon
              size={20}
              color="#647084"
              style={{
                border: '1px solid #DCE0E5',
                borderRadius: '10px',
                padding: '8px',
                cursor: 'pointer',
              }}
            />
            <Stack
              style={{
                position: 'absolute',
                right: -2,
                top: -1.5,
                width: '9px',
                height: '9px',
                borderRadius: '50%',
                backgroundColor: '#1992D7',
                border: '1.5px solid #fff',
              }}
            />
          </Stack>
          <DropdownMenu.Content sideOffset={5} position="absolute" zIndex={999}>
            <DropdownMenu.Item key={'name'} label={'name'} onSelect={() => {}} />
            <DropdownMenu.Item key={'address'} label={'address'} onSelect={() => {}} />
          </DropdownMenu.Content>
        </DropdownMenu>
      </XStack>
      <table>
        <thead>
          <tr>
            <th>
              <Checkbox id="table" variant="outline" />
            </th>
            <th>
              <Text size={15} color={'#647084'}>
                {validators.length} Validators
              </Text>
            </th>
            <th>
              <Text size={15} color={'#647084'}>
                Balance
              </Text>
            </th>
            <th>
              <Text size={15} color={'#647084'}>
                Income
              </Text>
            </th>
            <th>
              <Text size={15} color={'#647084'}>
                Proposals
              </Text>
            </th>
            <th>
              <Text size={15} color={'#647084'}>
                Attestations
              </Text>
            </th>
            <th>
              <Text size={15} color={'#647084'}>
                Effectiveness
              </Text>
            </th>
            <th>
              <Text size={15} color={'#647084'}>
                Deposits
              </Text>
            </th>
            <th>
              <Text size={15} color={'#647084'}>
                Rank
              </Text>
            </th>
            <th>
              <Text size={15} color={'#647084'}>
                Status
              </Text>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {validators.map((validator, index) => (
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
                  {validator.effectiveness}
                </Text>
              </td>
              <td>
                <Text size={15} color={'#647084'}>
                  {validator.deposits}
                </Text>
              </td>
              <td>
                <Text size={15} color={'#647084'}>
                  {validator.rank}
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
        </tbody>
      </table>
    </YStack>
  )
}

export default ManagementTable
