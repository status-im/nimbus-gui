import { useState, useEffect } from 'react'
import { XStack, Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import Confetti from 'react-confetti'
import ActivationCard from './ActivationCard'
import LinkWithArrow from '../../../components/General/LinkWithArrow'

const styles = {
  confettiContainer: {
    position: 'relative' as const,
    width: '100%',
    height: '100%',
  },
  confettiCanvas: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
}

const Activation = () => {
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
        <YStack space={'$5'}>
          <Text size={27} weight={'semibold'}>
            Activation
          </Text>
          <Stack style={{ width: '66%' }}>
            <Text size={27}>
              Congratulations! You have successfully setup your Nimbus Validators and are currently
              syncing your nodes.
            </Text>
          </Stack>
          <YStack space={'$3'} marginTop={'10px'} width={'33%'}>
            <XStack space={'$3'} justifyContent={'space-between'}>
              <ActivationCard text="Validators" value="4" />
              <ActivationCard
                text="Execution Sync Status"
                value=""
                isGaugeIncluded={true}
                gaugeColor={'#2a4af5'}
                gaugeSynced={123.524}
                gaugeTotal={172.503}
              />
              <ActivationCard
                text="Execution Sync Status"
                value=""
                isGaugeIncluded={true}
                gaugeColor={'#EB5757'}
                gaugeSynced={123.524}
                gaugeTotal={172.503}
              />
            </XStack>
            <XStack space={'$3'}>
              <ActivationCard text="Current APR" value="4.40%" />
              <ActivationCard text="Estimated Activation Time" value="32 Days" />
              <ActivationCard text="Validator Queue" value="92603" />
            </XStack>
          </YStack>
        </YStack>
        <LinkWithArrow
          text="Edit Validators"
          to="/"
          arrowLeft={true}
          style={{ marginTop: '44px', marginBottom: '88px' }}
        />
      </YStack>
    </Stack>
  )
}

export default Activation
