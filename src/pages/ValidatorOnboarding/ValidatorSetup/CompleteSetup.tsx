import { XStack, Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import { useState } from 'react'
const CompleteSetup = () => {
  return (
    <YStack style={{ width: '100%', padding: '16px 32px' }}>
      <XStack justifyContent={'space-between'} style={{ marginBottom: '10px' }}>
        <Text size={27} weight={'semibold'}>
          Validator Setup
        </Text>
      </XStack>
    </YStack>
  )
}

export default CompleteSetup
