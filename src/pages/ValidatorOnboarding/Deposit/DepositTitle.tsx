import { Text } from '@status-im/components'
import { useSelector } from 'react-redux'

import { RootState } from '../../../redux/store'

const DepositTitle = () => {
  const { isTransactionConfirmation, isChainParity } = useSelector(
    (state: RootState) => state.deposit,
  )

  const getTitle = () => {
    if (isChainParity) {
      return 'Activate Validators'
    } else if (isTransactionConfirmation) {
      return 'Transaction Confirmation'
    } else {
      return 'Deposit Funds'
    }
  }

  return (
    <Text size={19} weight={'semibold'}>
      {getTitle()}
    </Text>
  )
}

export default DepositTitle
