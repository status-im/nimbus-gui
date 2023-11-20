import { Checkbox, Text } from '@status-im/components'
import { OptionsIcon } from '@status-im/icons'

import ValidatorProfile from '../../../components/General/ValidatorProfile'
import { Validator } from './ManagementTable'

type ManagementTableBodyProps = {
  filteredValidators: Validator[]
}

const ManagementTableBody = ({ filteredValidators }: ManagementTableBodyProps) => {
  return (
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
  )
}

export default ManagementTableBody
