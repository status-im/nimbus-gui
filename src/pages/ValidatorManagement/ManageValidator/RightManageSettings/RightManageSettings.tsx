import DefaultPanel from './Panels/DefaultPanel'
import DepositPanel from './Panels/DepositPanel'
import MigratePanel from './Panels/MigratePanel'

const RightManageSettings = () => {
  const isDefault = false
  const isMigrate = false
  const isDeposit = true

  return (
    <div style={{ flexGrow: 1 }}>
      {isDefault && <DefaultPanel />}
      {isMigrate && <MigratePanel />}
      {isDeposit && <DepositPanel />}
    </div>
  )
}

export default RightManageSettings
