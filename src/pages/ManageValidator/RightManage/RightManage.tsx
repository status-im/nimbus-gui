import DefaultPanel from './Panels/DefaultPanel'
import DepositPanel from './Panels/DepositPanel'
import ExitPanel from './Panels/ExitPanel'
import MigratePanel from './Panels/MigratePanel'

const RightManage = () => {
  const lastUrlSegment = window.location.pathname.split('/').pop()

  const getPanel = () => {
    switch (lastUrlSegment) {
      case 'migrate':
        return <MigratePanel />
      case 'deposit':
        return <DepositPanel />
      case 'exit':
        return <ExitPanel />
      default:
        return <DefaultPanel />
    }
  }

  return <div style={{ flexGrow: 1 }}>{getPanel()}</div>
}

export default RightManage
