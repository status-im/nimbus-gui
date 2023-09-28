import { Text } from '@status-im/components'
import { useSelector } from 'react-redux'

import { RootState } from '../../../redux/store'

const DepositTitle = () => {
  const { isTransactionConfirmation } = useSelector((state: RootState) => state.deposit)

  return (
    <Text size={19} weight={'semibold'}>
      {isTransactionConfirmation ? 'Transaction Confirmation' : 'Deposit Funds'}
    </Text>
  )
}

export default DepositTitle
