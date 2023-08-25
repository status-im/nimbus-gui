import { Button } from '@status-im/components'
import { Stack, YStack } from 'tamagui'
import ValidatorBoxWrapper from '../ValidatorBoxWrapper/ValidatorBoxWrapper'

const ValidatorSetup = () => {
  return (
    <>
      <ValidatorBoxWrapper>
        <YStack></YStack>
      </ValidatorBoxWrapper>
      <Stack style={{ alignItems: 'end', width: '100%', marginTop: '16px' }}>
        <Button>Continue</Button>
      </Stack>
    </>
  )
}

export default ValidatorSetup
