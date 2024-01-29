import { Text } from '@status-im/components'

import { Validator } from './ManagementTable'
import ManagementTableRow from './ManagementTableRow'

type ManagementTableBodyProps = {
  filteredValidators: Validator[]
  isAllSelected: boolean
}

const ManagementTableBody = ({
  filteredValidators,
  isAllSelected,
}: ManagementTableBodyProps) => {
  return (
    <tbody>
      {filteredValidators.map(validator => (
        <ManagementTableRow
          key={validator.address}
          validator={validator}
          isAllSelected={isAllSelected}
        />
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
