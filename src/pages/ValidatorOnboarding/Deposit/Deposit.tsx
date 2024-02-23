import { DividerLine, InformationBox, Text } from '@status-im/components'
import { PlaceholderIcon } from '@status-im/icons'
import { YStack } from 'tamagui'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import ValidatorRequest from './ValidatorRequest/ValidatorRequest'
import ConnectWallet from '../../../components/General/ConnectWallet'
import ConnectedWallet from '../../../components/General/ConnectedWallet'
import DepositTitle from './DepositTitle'
import ChainParity from './ChainParity'
import ValidatorsMenuWithPrice from '../../../components/General/ValidatorsMenuWithPrice'
import { RootState } from '../../../redux/store'
import { DEPOSIT_SUBTITLE } from '../../../constants'
import styles from './deposit.module.css'

const Deposit = () => {
  const [isInfoBoxVisible, setIsInfoBoxVisible] = useState(true)
  const [validatorCount, setValidatorCount] = useState(2)
  const { isWalletConnected, isTransactionConfirmation, isChainParity } =
    useSelector((state: RootState) => state.deposit)

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
    <YStack space={'$3'} className={styles['deposit-container']}>
      <DepositTitle />
      {isChainParity ? (
        <ChainParity />
      ) : (
        <YStack space={'$3'} style={{ width: '100%' }}>
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
          <DividerLine
            style={{ marginTop: isTransactionConfirmation ? '0px' : '15px' }}
          />
          {Array.from({ length: validatorCount }).map((_, index) => (
            <ValidatorRequest
              key={index}
              name={(index + 1).toString()}
              isTransactionConfirmation={isTransactionConfirmation}
              isWithDivider={true}
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
            <YStack space={'$3'} style={{ width: '100%' }}>
              <Text size={19} weight={'semibold'}>
                Connect Wallet
              </Text>
              {isWalletConnected ? <ConnectedWallet /> : <ConnectWallet />}
            </YStack>
          )}
        </YStack>
      )}
    </YStack>
  )
}

export default Deposit
