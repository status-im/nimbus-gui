import { Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

const TitleLogo = () => {
  return (
    <XStack>
      {/* <Avatar type="icon" size={80} icon={<img src={'/icons/dashboard-logo.png'} />} /> */}
      <YStack>
        <Text size={27} color="#09101C" weight={'semibold'}>
          Nimbus
        </Text>
        <Text size={19} color="#647084">
          Node Management Dashboard
        </Text>
      </YStack>
    </XStack>
  )
}

export default TitleLogo
