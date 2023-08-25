import { Button } from '@status-im/components'
import { Stack, YStack } from 'tamagui'
import ValidatorBoxWrapper from '../ValidatorBoxWrapper/ValidatorBoxWrapper'

const KeyGeneration = () => {
  return (
    <>
      <ValidatorBoxWrapper>
        <YStack space={'$2'}></YStack>
      </ValidatorBoxWrapper>
      <Stack style={{ alignItems: 'end', width: '100%', marginTop: '16px' }}>
        <Button>Continue</Button>
      </Stack>
    </>
  )
}

export default KeyGeneration
