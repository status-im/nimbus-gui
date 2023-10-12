import { InformationBox, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
import { CloseCircleIcon, ChevronRightIcon } from '@status-im/icons'

const LogsList = () => {
  return (
    <YStack space={'$2'}>
      <XStack justifyContent="space-between">
        <Text size={15} weight={'semibold'}>
          Logs
        </Text>
        <div style={{ marginRight: '8px' }}>
          <ChevronRightIcon size={20} />
        </div>
      </XStack>
      <InformationBox
        message="Critical Logs: 0.01 / M"
        icon={<CloseCircleIcon size={20} />}
        variant="default"
      />
      <InformationBox
        message="Warning Logs: 0.01 / M"
        icon={<CloseCircleIcon size={20} />}
        variant="default"
      />
      <InformationBox
        message="Error Logs: 0.01 / M"
        icon={<CloseCircleIcon size={20} />}
        variant="default"
      />
    </YStack>
  )
}

export default LogsList
