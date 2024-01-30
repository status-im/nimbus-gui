import { useState, useEffect } from 'react'
import { XStack, Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import Confetti from 'react-confetti'

import ActivationCard from '../../Activation/ActivationCard'
import { useWindowSize } from '../../../../hooks/useWindowSize'

const ActivationValidatorSetup = () => {
  const [showConfetti, setShowConfetti] = useState(true)
  const windowSize = useWindowSize()
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false)
    }, 10000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <Stack style={styles.confettiContainer} minHeight={'65vh'}>
      {showConfetti && <Confetti style={styles.confettiCanvas} />}
      <YStack style={{ padding: '26px 32px' }}>
        <YStack space={'$5'}>
          <Text size={27} weight={'semibold'}>
            Activation
          </Text>
          <Stack>
            <Text size={19}>
              Congratulations! You have successfully setup your Execution and
              Consensus clients and are currently syncing your nodes. You need
              to be sufficiently synced prior to setting up your validators and
              making a deposit.
            </Text>
          </Stack>
          <YStack marginTop={'25px'}>
            <XStack
              width="100%"
              flexWrap={windowSize.width < 780 ? 'wrap' : 'nowrap'}
            >
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
            <XStack
              flexWrap={windowSize.width < 780 ? 'wrap' : 'nowrap'}
              width="100%"
            >
              <ActivationCard text="Validator Queue" value="92603" />
              <ActivationCard
                text="Estimated Activation Time"
                value="32 Days"
              />
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
