import { DividerLine, InformationBox, Text } from '@status-im/components'
import { PlaceholderIcon } from '@status-im/icons'
import { YStack } from 'tamagui'
import { useState } from 'react'

import ValidatorRequest from './ValidatorRequest'
import Validators from './Validators'
import ConnectWallet from './ConnectWallet'
import ConnectedWallet from './ConnectedWallet'
import DepositTitle from './DepositTitle'
import DepositSubtitle from './DepositSubtitle'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

const Deposit = () => {
  const [isInfoBoxVisible, setIsInfoBoxVisible] = useState(true)
  const [validatorCount, setValidatorCount] = useState(0)
  const { isWalletConnected } = useSelector((state: RootState) => state.deposit)

  const validatorRequests = [1, 2]
  const isTransactionConfirmation = false

  const addValidatorHandler = () => {
    setValidatorCount((state: number) => state + 1)
  }

  const changeValidatorCountHandler = (e: any) => {
    if (!isNaN(e.target.value)) {
      setValidatorCount(Number(e.target.value))
    }
  }

  const onCloseInfoBox = () => {
    setIsInfoBoxVisible(false)
  }

  return (
    <YStack space={'$3'} style={{ width: '100%', padding: '16px 32px', alignItems: 'start' }}>
      <DepositTitle isTransactionConfirmation={isTransactionConfirmation} />
      {isTransactionConfirmation ? (
        <DepositSubtitle />
      ) : (
        <Validators
          validatorCount={validatorCount}
          addValidatorHandler={addValidatorHandler}
          changeValidatorCountHandler={changeValidatorCountHandler}
        />
      )}
      <DividerLine />
      {validatorRequests.map((_, index) => (
        <ValidatorRequest key={index} />
      ))}
      {isInfoBoxVisible && (
        <InformationBox
          message="Your Validator balances currently require a deposit. If you have already made a deposit using Launchpad please wait until the transaction is posted on execution layer to continue."
          variant="error"
          onClosePress={onCloseInfoBox}
          icon={<PlaceholderIcon size={16} />}
        />
      )}
      <Text size={19} weight={'semibold'}>
        Connect Wallet
      </Text>
      {isWalletConnected ? <ConnectedWallet /> : <ConnectWallet />}
    </YStack>
  )
}

export default Deposit
