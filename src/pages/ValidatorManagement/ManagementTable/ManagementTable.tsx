import { OptionsIcon } from '@status-im/icons'

import './ManagementTable.css'
import { Text } from '@status-im/components'

const validators = [
  {
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
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>
            <Text size={15}>Balance</Text>
          </th>
          <th>
            <Text size={15}>Income</Text>
          </th>
          <th>
            <Text size={15}>Proposals</Text>
          </th>
          <th>
            <Text size={15}>Attestations</Text>
          </th>
          <th>
            <Text size={15}>Effectiveness</Text>
          </th>
          <th>
            <Text size={15}>Deposits</Text>
          </th>
          <th>
            <Text size={15}>Rank</Text>
          </th>
          <th>
            <Text size={15}>Status</Text>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {validators.map((validator, index) => (
          <tr key={index}>
            <td></td>
            <td>
              <Text size={15}>{validator.balance}</Text>
            </td>
            <td>
              <Text size={15}>{validator.income}</Text>
            </td>
            <td>
              <Text size={15}>{validator.proposals}</Text>
            </td>
            <td>
              <Text size={15}>{validator.attestations}</Text>
            </td>
            <td>
              <Text size={15}>{validator.effectiveness}</Text>
            </td>
            <td>
              <Text size={15}>{validator.deposits}</Text>
            </td>
            <td>
              <Text size={15}>{validator.rank}</Text>
            </td>
            <td>
              <Text size={15}>{validator.status}</Text>
            </td>
            <td>
              <OptionsIcon size={20} style={{ cursor: 'pointer' }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ManagementTable
