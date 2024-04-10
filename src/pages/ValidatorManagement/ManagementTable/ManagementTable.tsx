import { YStack } from 'tamagui'

import ManagementTableHeader from './ManagementTableHeader'
import ManagementTableBody from './ManagementTableBody'
import './ManagementTable.module.css'

const ManagementTable = () => {
  return (
    <YStack>
      <table className="validator-management-table">
        <ManagementTableHeader />
        <ManagementTableBody />
      </table>
    </YStack>
  )
}

export default ManagementTable
