import { OptionsIcon } from '@status-im/icons'

import './ManagementTable.css'

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
          <th>Balance</th>
          <th>Income</th>
          <th>Proposals</th>
          <th>Attestations</th>
          <th>Effectiveness</th>
          <th>Deposits</th>
          <th>Rank</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {validators.map((validator, index) => (
          <tr key={index}>
            <td></td>
            <td>{validator.balance}</td>
            <td>{validator.income}</td>
            <td>{validator.proposals}</td>
            <td>{validator.attestations}</td>
            <td>{validator.effectiveness}</td>
            <td>{validator.deposits}</td>
            <td>{validator.rank}</td>
            <td>{validator.status}</td>
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
