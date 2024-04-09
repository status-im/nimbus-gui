import { YStack } from 'tamagui'

import ManagementTableHeader from './ManagementTableHeader'
import ManagementTableBody from './ManagementTableBody'
import { Validator } from '../ManagementTabs'
import './ManagementTable.module.css'

type ManagementTableProps = {
  filteredValidators: Validator[]
}

const ManagementTable = ({ filteredValidators }: ManagementTableProps) => {
  return (
    <YStack>
      <table className="validator-management-table">
        <ManagementTableHeader />
        <ManagementTableBody filteredValidators={filteredValidators} />
      </table>
    </YStack>
  )
}

export default ManagementTable
