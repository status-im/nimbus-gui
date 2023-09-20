import { Text } from '@status-im/components'

type DepositTitleProps = {
  isTransactionConfirmation: boolean
}

const DepositTitle = ({ isTransactionConfirmation }: DepositTitleProps) => {
  return (
    <Text size={19} weight={'semibold'}>
      {isTransactionConfirmation ? 'Transaction Confirmation' : 'Deposit Funds'}
    </Text>
  )
}

export default DepositTitle
