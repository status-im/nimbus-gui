import './ManagementTable.css'

const ManagementTable = () => {
  const validators = []

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
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ManagementTable
