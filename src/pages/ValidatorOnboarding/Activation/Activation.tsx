import { useState, useEffect } from 'react'
import { XStack, Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import Confetti from 'react-confetti'

import ActivationCard from './ActivationCard'
import LinkWithArrow from '../../../components/General/LinkWithArrow'

type ActivationProps = {
  validatorsValue: string
  executionSyncStatus1: {
    text: string
    isGaugeIncluded: boolean
    gaugeColor: string
    gaugeSynced: number
    gaugeTotal: number
  }
  executionSyncStatus2: {
    text: string
    isGaugeIncluded: boolean
    gaugeColor: string
    gaugeSynced: number
    gaugeTotal: number
  }
  currentAPRValue: string
  estimatedActivationTimeValue: string
  validatorQueueValue: string
}

const Activation = ({
  validatorsValue,
  executionSyncStatus1,
  executionSyncStatus2,
  currentAPRValue,
  estimatedActivationTimeValue,
  validatorQueueValue,
}: ActivationProps) => {
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
    <Stack style={styles.confettiContainer} width={'100%'} minHeight={'65vh'}>
      {showConfetti && <Confetti style={styles.confettiCanvas} />}
      <YStack style={{ padding: '26px 32px' }}>
        <YStack space={'$5'}>
          <Text size={27} weight={'semibold'}>
            Activation
          </Text>
          <Stack style={{ width: '66%' }}>
            <Text size={19}>
              Congratulations! You have successfully setup your Nimbus
              Validators and are currently syncing your nodes.
            </Text>
          </Stack>
          <YStack space={'$3'} marginTop={'25px'} width={'33%'}>
            <XStack space={'$3'} justifyContent={'space-between'}>
              <ActivationCard text="Validators" value={validatorsValue} />
              <ActivationCard {...executionSyncStatus1} />
              <ActivationCard {...executionSyncStatus2} />
            </XStack>
            <XStack space={'$3'}>
              <ActivationCard text="Current APR" value={currentAPRValue} />
              <ActivationCard
                text="Estimated Activation Time"
                value={estimatedActivationTimeValue}
              />
              <ActivationCard
                text="Validator Queue"
                value={validatorQueueValue}
              />
            </XStack>
          </YStack>
        </YStack>
        <LinkWithArrow
          text="Edit Validators"
          to="/"
          arrowLeft={true}
          style={{ marginTop: '44px', marginBottom: '88px', fontSize: '13px' }}
        />
      </YStack>
    </Stack>
  )
}

export default Activation

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
    zIndex: 0,
  },
}
