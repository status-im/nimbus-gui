import { Text } from '@status-im/components'

const ManagementTableHeader = () => {
  return (
    <thead>
      <tr>
        <th />
        <th style={{ textAlign: 'start' }}>
          <Text size={15} color={'#647084'}>
            Validator
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
            Status
          </Text>
        </th>
        <th />
      </tr>
    </thead>
  )
}

export default ManagementTableHeader
