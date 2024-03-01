import { DividerLine, Text } from '@status-im/components'
import { YStack } from 'tamagui'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import ValidatorRequest from './ValidatorRequest/ValidatorRequest'
import ConnectWallet from '../../../components/General/ConnectWallet'
import ConnectedWallet from '../../../components/General/ConnectedWallet'
import ChainParity from './ChainParity'
import ValidatorsMenuWithPrice from '../../../components/General/ValidatorsMenuWithPrice'
import { RootState } from '../../../redux/store'
import { DEPOSIT_SUBTITLE } from '../../../constants'
import { getDepositTitle } from '../../../utilities'
import styles from './deposit.module.css'
import ValidatorBalanceInfoBox from './ValidatorBalanceInfoBox'

const Deposit = () => {
  const [validatorCount, setValidatorCount] = useState(2)
  const { isWalletConnected, isTransactionConfirmation, isChainParity } =
    useSelector((state: RootState) => state.deposit)

  const changeValidatorCountHandler = (value: string) => {
    const numberValue = Number(value)
    if (!isNaN(numberValue)) {
      setValidatorCount(numberValue)
    }
  }

  return (
    <YStack space={'$3'} className={styles['deposit-container']}>
      <Text size={19} weight={'semibold'}>
        {getDepositTitle({ isChainParity, isTransactionConfirmation })}
      </Text>
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
          <ValidatorBalanceInfoBox />
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
