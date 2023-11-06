import { DividerLine, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

import TransactionStatus from './TransactionStatus'
import ValidatorProfile from '../../../../components/General/ValidatorProfile'

type ValidatorRequestProps = {
  number: number
  isTransactionConfirmation?: boolean
}

const ValidatorRequest = ({ number, isTransactionConfirmation }: ValidatorRequestProps) => {
  let transactionStatus = 'Complete'
  const isTransactionCompleted = transactionStatus === 'Complete'

  return (
    <YStack space={'$3'} style={{ width: '100%' }}>
      <XStack style={{ justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <XStack style={{ justifyContent: 'space-between', width: '44%', alignItems: 'center' }}>
          <ValidatorProfile number={number} address={'zQ3asdf9d4Gs0'} />
          <Text size={13} color="#647084" weight={'semibold'}>
            Keys Generated
          </Text>
        </XStack>
        <XStack
          style={{
            justifyContent: isTransactionConfirmation ? 'space-between' : 'end',
            width: '53%',
            alignItems: 'center',
          }}
        >
          {isTransactionConfirmation && (
            <Text
              color={isTransactionCompleted ? '#2A4AF5' : '#E0E0E0'}
              size={13}
              weight={'semibold'}
            >
              {isTransactionCompleted ? 32 : 0} ETH
            </Text>
          )}
          <TransactionStatus
            transactionStatus={transactionStatus}
            isTransactionConfirmation={isTransactionConfirmation}
          />
        </XStack>
      </XStack>
      <DividerLine />
    </YStack>
  )
}

export default ValidatorRequest
