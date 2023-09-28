import { Avatar, DividerLine, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
import { useSelector } from 'react-redux'

import { getFormattedValidatorAddress } from '../../../utilities'
import TransactionStatus from './TransactionStatus'
import { RootState } from '../../../redux/store'

type ValidatorRequestProps = {
  number: number
}

const ValidatorRequest = ({ number }: ValidatorRequestProps) => {
  const { isTransactionConfirmation } = useSelector((state: RootState) => state.deposit)

  let transactionStatus = 'Complete'
  const isTransactionCompleted = transactionStatus === 'Complete'

  return (
    <YStack space={'$3'} style={{ width: '100%' }}>
      <XStack style={{ justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <XStack style={{ justifyContent: 'space-between', width: '44%', alignItems: 'center' }}>
          <XStack space={'$2'}>
            <Avatar
              type="user"
              size={32}
              src="/icons/validator-request.svg"
              name={number.toString()}
              indicator="online"
            />
            <YStack>
              <Text size={13} weight={'semibold'}>
                Validator {number}
              </Text>
              <Text size={13} color="#647084">
                {getFormattedValidatorAddress('zQ3asdf9d4Gs0')}
              </Text>
            </YStack>
          </XStack>
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
          <TransactionStatus transactionStatus={transactionStatus} />
        </XStack>
      </XStack>
      <DividerLine />
    </YStack>
  )
}

export default ValidatorRequest
