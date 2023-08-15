import { Stack, YStack } from 'tamagui'
import LayoutComponent from '../../components/LayoutComponent'
import NimbusLogo from '../../components/NimbusLogo'
import Titles from '../../components/Titles'
import { Button } from '@status-im/components'

const DeviceSyncStatus = () => {
  return (
    <LayoutComponent
      content={<DeviceSyncStatusContent />}
      rightImageSrc="/background-images/sync-status-background.png"
    />
  )
}

export default DeviceSyncStatus

const DeviceSyncStatusContent = () => {
  return (
    <div className="container-inner landing-page">
      
    </div>
  )
}
