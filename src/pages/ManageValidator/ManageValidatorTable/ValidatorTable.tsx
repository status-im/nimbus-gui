import ValidatorTableBody from './ValidatorTableBody'
import ValidatorTableHeader from './ValidatorTableHeader'

const ValidatorTable = () => {
  return (
    <table className="manage-validator-table">
      <ValidatorTableHeader />
      <ValidatorTableBody />
    </table>
  )
}

export default ValidatorTable
