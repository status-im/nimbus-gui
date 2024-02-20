import { Button, InformationBox, Text } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'
import { YStack } from 'tamagui'

import KeystoreBackupsCard from '../../../../ValidatorOnboarding/KeyGeneration/KeystoreFiles/KeystoreBackupsCard'

const MigratePanel = () => {
  const migrateValidatorHandler = () => {}
  return (
    <YStack>
      <Text size={19} weight={'semibold'}>
        Migrate Validator
      </Text>
      <img src="/public/images/migrate.png" alt="migrate" />
      <Text size={15}>
        You are about to Migrate your validator it is not possible for you to
        revert this action! Please make sure you understand the consequences.
      </Text>
      <KeystoreBackupsCard />
      <InformationBox
        message="Please make sure to enforce the file on another node to continue validating with your Validator."
        variant="error"
        icon={<CloseCircleIcon size={20} />}
      />
      <Button onPress={migrateValidatorHandler}>Migrate Validator</Button>
    </YStack>
  )
}

export default MigratePanel
