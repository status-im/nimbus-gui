import DefaultPanel from './DefaultPanel'

const RightManageSettings = () => {
  const isDefault = false
  // const isMigrate = true
  // const isDeposit = false

  return <>{isDefault && <DefaultPanel />}</>
}

export default RightManageSettings
