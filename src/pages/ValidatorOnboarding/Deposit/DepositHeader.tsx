import { Text } from '@status-im/components'

type DepositHeaderProps = {
  isTransactionConfirmation: boolean
}

const DepositHeader = ({ isTransactionConfirmation }: DepositHeaderProps) => {
  return (
    <Text size={19} weight={'semibold'}>
      {isTransactionConfirmation ? 'Transaction Confirmation' : 'Deposit Funds'}
    </Text>
  )
}

export default DepositHeader
