import { YStack } from 'tamagui'
import LayoutComponent from '../../components/LayoutComponent'

const DeviceHealthCheck = () => {
  return (
    <LayoutComponent
      content={<DeviceHeanlthCheckContent />}
      rightImageSrc="/background-images/eye-background.png"
    />
  )
}

export default DeviceHealthCheck

const DeviceHeanlthCheckContent = () => {
  return (
    <div className="container-inner landing-page">
      <YStack></YStack>
    </div>
  )
}
