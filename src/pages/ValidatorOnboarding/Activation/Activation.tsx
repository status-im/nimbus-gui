import React, { useState, useEffect } from 'react'
import { XStack, Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import Confetti from 'react-confetti'
import ActivationCard from './ActivationCard'

const Activation = () => {
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false)
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <Stack width={'100%'}>
      {showConfetti && <Confetti width={1000} height={800} style={{ zIndex: 0 }} />}
      <YStack style={{ padding: '16px 32px' }}>
        <YStack space={'$5'}>
          <Text size={27} weight={'semibold'}>
            Validator Setup
          </Text>
          <Text size={19}>
            Congratulations! You have successfully setup your Nimbus Validators and are currently
            syncing your nodes.{' '}
          </Text>
          <YStack space={'$2'} marginTop={'10px'} width={'33%'}>
            <XStack space={'$2'} justifyContent={'space-between'}>
              <ActivationCard text="Validators" value="4" />
              <ActivationCard text="Execution Sync Status" value="" isGaugeIncluded={true} />
              <ActivationCard text="Execution Sync Status" value="" isGaugeIncluded={true} gaugeColor={'#EB5757'} />
            </XStack>
            <XStack space={'$2'}>
              <ActivationCard text="Current APR" value="4.40%" />
              <ActivationCard text="Estimated Activation Time" value="32 Days" />
              <ActivationCard text="Estimated Activation Time" value="" />
            </XStack>
          </YStack>
        </YStack>
      </YStack>
    </Stack>
  )
}

export default Activation
