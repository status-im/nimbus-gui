import { useState, useEffect } from 'react'
import { XStack, Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import Confetti from 'react-confetti'
import ActivationCard from './ActivationCard'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@status-im/icons'

const Activation = () => {
  const [showConfetti, setShowConfetti] = useState(true)
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
            Validator Setup
          </Text>
          <Text size={19}>
            Congratulations! You have successfully setup your Nimbus Validators and are currently
            syncing your nodes.{' '}
          </Text>
          <YStack space={'$3'} marginTop={'10px'} width={'33%'}>
            <XStack space={'$3'} justifyContent={'space-between'}>
              <ActivationCard text="Validators" value="4" />
              <ActivationCard
                text="Execution Sync Status"
                value=""
                isGaugeIncluded={true}
                gaugeSynced={135324}
                gaugeTotal={200000}
              />
              <ActivationCard
                text="Execution Sync Status"
                value=""
                isGaugeIncluded={true}
                gaugeColor={'#EB5757'}
                gaugeSynced={35324}
                gaugeTotal={200000}
              />
            </XStack>
            <XStack space={'$3'}>
              <ActivationCard text="Current APR" value="4.40%" />
              <ActivationCard text="Estimated Activation Time" value="32 Days" />
              <ActivationCard text="Estimated Activation Time" value="92603" />
            </XStack>
          </YStack>
        </YStack>
        <Stack style={{ maxWidth: 'fit-content', marginTop: '50px' }}>
          <Text size={15}>
            <XStack space={'$1'} style={{ alignItems: 'center' }}>
              <ArrowLeftIcon size={16} color="#2A4CF4" />
              <Link style={{ color: '#2A4CF4' }} to={'/'}>
                Edit Validators
              </Link>
            </XStack>
          </Text>
        </Stack>
      </YStack>
    </Stack>
  )
}

export default Activation
