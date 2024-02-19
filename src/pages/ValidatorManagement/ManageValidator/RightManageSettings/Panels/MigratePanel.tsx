import { InformationBox, Text } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'
import { YStack } from 'tamagui'

const MigratePanel = () => {
  return (
    <YStack>
      <Text size={19} weight={'semibold'}>
        Migrate Validator
      </Text>
      <Text size={15}>
        You are about to Migrate your validator it is not possible for you to
        revert this action! Please make sure you understand the consequences.
      </Text>
      <InformationBox
        message="Please make sure to enforce the file on another node to continue validating with your Validator."
        variant="error"
        icon={<CloseCircleIcon size={20} />}
      />
    </YStack>
  )
}

export default MigratePanel
