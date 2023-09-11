import { useState, useEffect } from 'react'
import { XStack, Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import Confetti from 'react-confetti'

import ActivationCard from '../Activation/ActivationCard'

const ActivationValidatorSetup = () => {
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false)
    }, 10000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <Stack style={styles.confettiContainer} width={'100%'}>
      {showConfetti && <Confetti style={styles.confettiCanvas} />}
      <YStack style={{ padding: '16px 32px' }}>
        <YStack space={'$3'}>
          <Text size={27} weight={'semibold'}>
            Activation
          </Text>
          <Stack>
            <Text size={27}>
              Congratulations! You have successfully setup your Execution and Consensus clients and
              are currently syncing your nodes. You need to be sufficiently synced prior to setting
              up your validators and making a deposit.
            </Text>
          </Stack>
          <YStack space={'$3'} marginTop={'10px'} width={'33%'}>
            <XStack width={'151%'} space={'$3'}>
              <ActivationCard
                text="Execution Sync Status"
                isGaugeIncluded={true}
                gaugeColor={'#2a4af5'}
                gaugeSynced={123.524}
                gaugeTotal={172.503}
              />
              <ActivationCard
                text="Execution Sync Status"
                isGaugeIncluded={true}
                gaugeColor={'#EB5757'}
                gaugeSynced={123.524}
                gaugeTotal={172.503}
              />
            </XStack>
            <XStack space={'$3'}>
              <ActivationCard text="Validator Queue" value="92603" />
              <ActivationCard text="Estimated Activation Time" value="32 Days" />
              <ActivationCard text="Current APR" value="4.40%" />
            </XStack>
          </YStack>
        </YStack>
      </YStack>
    </Stack>
  )
}

export default ActivationValidatorSetup

const styles = {
  confettiContainer: {
    position: 'relative' as const,
    width: '100%',
    height: '100%',
    justifyContent: 'fit-content',
  },
  confettiCanvas: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
}
