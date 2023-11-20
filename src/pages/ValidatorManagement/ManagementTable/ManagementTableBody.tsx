import { Text } from '@status-im/components'

import { Validator } from './ManagementTable'
import ManagementTableRow from './ManagementTableRow'

type ManagementTableBodyProps = {
  filteredValidators: Validator[]
}

const ManagementTableBody = ({ filteredValidators }: ManagementTableBodyProps) => {
  return (
    <tbody>
      {filteredValidators.map(validator => (
        <ManagementTableRow key={validator.address} validator={validator} />
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
  )
}

export default ManagementTableBody
