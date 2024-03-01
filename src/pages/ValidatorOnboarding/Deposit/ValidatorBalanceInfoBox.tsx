import { InformationBox } from '@status-im/components'
import { PlaceholderIcon } from '@status-im/icons'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../../redux/store'

const ValidatorBalanceInfoBox = () => {
  const [isInfoBoxVisible, setIsInfoBoxVisible] = useState(true)
  const { isTransactionConfirmation } = useSelector(
    (state: RootState) => state.deposit,
  )

  const onCloseInfoBox = () => {
    setIsInfoBoxVisible(false)
  }

  return (
    <>
      {isInfoBoxVisible && !isTransactionConfirmation && (
        <InformationBox
          message="Your Validator balances currently require a deposit. If you have already made a deposit using Launchpad please wait until the transaction is posted on execution layer to continue."
          variant="error"
          onClosePress={onCloseInfoBox}
          icon={<PlaceholderIcon size={16} />}
        />
      )}
    </>
  )
}

export default ValidatorBalanceInfoBox
