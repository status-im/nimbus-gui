import { Text } from '@status-im/components'
import { FullscreenMacOsIcon, CloseMacOsIcon, MinimizeMacOsIcon } from '@status-im/icons'
import { XStack } from 'tamagui'

type VTransactionStatusProps = {
  isTransactionConfirmation: boolean
  transactionStatus: string
}

const TransactionStatus = ({
  isTransactionConfirmation,
  transactionStatus,
}: VTransactionStatusProps) => {
  return (
    <>
      {isTransactionConfirmation ? (
        <XStack space={'$2'} alignItems={'center'}>
          {transactionStatus === 'Complete' && <FullscreenMacOsIcon size={16} />}
          {transactionStatus === 'Failed' && <CloseMacOsIcon size={16} />}
          {transactionStatus === 'Pending' && <MinimizeMacOsIcon size={16} />}
          <Text size={13} color="#2F80ED" weight={'semibold'}>
            Transaction {transactionStatus}
          </Text>
        </XStack>
      ) : (
        <Text size={13} color="#2F80ED" weight={'semibold'}>
          Requires Deposit
        </Text>
      )}
    </>
  )
}

export default TransactionStatus
