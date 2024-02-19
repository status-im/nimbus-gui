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
        message="You should see that you have one keystore per validator. This keystore contains your signing key, encrypted with your password. Warning: Do not store keys on multiple (backup) validator clients at once"
        variant="error"
        icon={<CloseCircleIcon size={20} />}
      />
    </YStack>
  )
}

export default MigratePanel
