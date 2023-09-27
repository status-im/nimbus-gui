import { DividerLine, InformationBox, Text } from '@status-im/components'
import { PlaceholderIcon } from '@status-im/icons'
import { YStack } from 'tamagui'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import ValidatorRequest from './ValidatorRequest'
import ValidatorsMenuWithPrice from '../../../components/General/ValidatorsMenuWithPrice'
import ConnectWallet from './ConnectWallet'
import ConnectedWallet from './ConnectedWallet'
import DepositTitle from './DepositTitle'
import DepositSubtitle from './DepositSubtitle'
import { RootState } from '../../../redux/store'

const Deposit = () => {
  const [isInfoBoxVisible, setIsInfoBoxVisible] = useState(true)
  const [validatorCount, setValidatorCount] = useState(2)
  const { isWalletConnected } = useSelector((state: RootState) => state.deposit)
  const isTransactionConfirmation = false

  const changeValidatorCountHandler = (value: string) => {
    const numberValue = Number(value)
    if (!isNaN(numberValue)) {
      setValidatorCount(numberValue)
    }
  }

  const onCloseInfoBox = () => {
    setIsInfoBoxVisible(false)
  }

  return (
    <YStack
      space={'$3'}
      style={{ width: '100%', padding: '16px 32px', alignItems: 'start', paddingBottom: '30px' }}
    >
      <DepositTitle isTransactionConfirmation={isTransactionConfirmation} />
      {isTransactionConfirmation ? (
        <DepositSubtitle />
      ) : (
        <ValidatorsMenuWithPrice
          validatorCount={validatorCount}
          changeValidatorCountHandler={changeValidatorCountHandler}
        />
      )}
      <DividerLine />
      {Array.from({ length: validatorCount }).map((_, index) => (
        <ValidatorRequest key={index} number={index + 1} />
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
