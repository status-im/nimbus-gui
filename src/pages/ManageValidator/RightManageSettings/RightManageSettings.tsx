import DefaultPanel from './Panels/DefaultPanel'
import DepositPanel from './Panels/DepositPanel'
import ExitPanel from './Panels/ExitPanel'
import MigratePanel from './Panels/MigratePanel'

const RightManageSettings = () => {
  const isDefault = false
  const isMigrate = false
  const isDeposit = false
  const isExit = true

  return (
    <div style={{ flexGrow: 1 }}>
      {isDefault && <DefaultPanel />}
      {isMigrate && <MigratePanel />}
      {isDeposit && <DepositPanel />}
      {isExit && <ExitPanel />}
    </div>
  )
}

export default RightManageSettings
