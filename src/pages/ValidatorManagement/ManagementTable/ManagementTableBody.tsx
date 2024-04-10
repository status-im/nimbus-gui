import { Text } from '@status-im/components'
import { useSelector } from 'react-redux'

import ManagementTableRow from './ManagementTableRow'
import { RootState } from '../../../redux/store'

const ManagementTableBody = () => {
  const { filteredValidators } = useSelector(
    (state: RootState) => state.validatorManagement,
  )

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
