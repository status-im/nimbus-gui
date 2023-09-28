import { DividerLine, InformationBox, Text } from '@status-im/components'
import { PlaceholderIcon } from '@status-im/icons'
import { YStack } from 'tamagui'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import ValidatorRequest from './ValidatorRequest/ValidatorRequest'
import ConnectWallet from './ConnectWallet'
import ConnectedWallet from './ConnectedWallet'
import DepositTitle from './DepositTitle'
import ValidatorsMenuWithPrice from '../../../components/General/ValidatorsMenuWithPrice'
import { RootState } from '../../../redux/store'
import { DEPOSIT_SUBTITLE } from '../../../constants'

const Deposit = () => {
  const [isInfoBoxVisible, setIsInfoBoxVisible] = useState(true)
  const [validatorCount, setValidatorCount] = useState(2)
  const { isWalletConnected, isTransactionConfirmation } = useSelector(
    (state: RootState) => state.deposit,
  )

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
      <DepositTitle />
      {isTransactionConfirmation ? (
        <Text size={15} weight="regular" color={'#647084'}>
          {DEPOSIT_SUBTITLE}
        </Text>
      ) : (
        <ValidatorsMenuWithPrice
          validatorCount={validatorCount}
          changeValidatorCountHandler={changeValidatorCountHandler}
          label={DEPOSIT_SUBTITLE}
        />
      )}
      {isTransactionConfirmation && <ConnectedWallet />}
      <DividerLine style={{ marginTop: isTransactionConfirmation ? '0px' : '15px' }} />
      {Array.from({ length: validatorCount }).map((_, index) => (
        <ValidatorRequest
          key={index}
          number={index + 1}
          isTransactionConfirmation={isTransactionConfirmation}
        />
      ))}
      {isInfoBoxVisible && !isTransactionConfirmation && (
        <InformationBox
          message="Your Validator balances currently require a deposit. If you have already made a deposit using Launchpad please wait until the transaction is posted on execution layer to continue."
          variant="error"
          onClosePress={onCloseInfoBox}
          icon={<PlaceholderIcon size={16} />}
        />
      )}
      {!isTransactionConfirmation && (
        <YStack space={'$3'}>
          <Text size={19} weight={'semibold'}>
            Connect Wallet
          </Text>
          {isWalletConnected ? <ConnectedWallet /> : <ConnectWallet />}
        </YStack>
      )}
    </YStack>
  )
}

export default Deposit
