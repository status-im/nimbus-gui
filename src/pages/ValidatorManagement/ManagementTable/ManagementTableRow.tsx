import { useEffect, useState } from 'react'
import { Checkbox, Text } from '@status-im/components'
import { OptionsIcon } from '@status-im/icons'

import ValidatorProfile from '../../../components/General/ValidatorProfile'
import { Validator } from './ManagementTable'

type ManagementTableRowProps = {
  validator: Validator
  isAllSelected: boolean
}

const ManagementTableRow = ({ validator, isAllSelected }: ManagementTableRowProps) => {
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    setIsSelected(isAllSelected)
  }, [isAllSelected])

  const handleChangeIsSelected = () => {
    setIsSelected(state => !state)
  }

  return (
    <tr>
      <td>
        <Checkbox
          id={validator.address}
          variant="outline"
          selected={isSelected}
          onCheckedChange={handleChangeIsSelected}
        />
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
  )
}

export default ManagementTableRow
