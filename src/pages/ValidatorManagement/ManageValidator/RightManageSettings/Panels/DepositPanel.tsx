import { DividerLine, InformationBox, Input, Text } from '@status-im/components'
import { ClearIcon, PlaceholderIcon } from '@status-im/icons'
import { XStack, YStack } from 'tamagui'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import PanelWrapper from './PanelWrapper'
import { RootState } from '../../../../../redux/store'
import ConnectedWallet from '../../../../../components/General/ConnectedWallet'
import ConnectWallet from '../../../../../components/General/ConnectWallet'
import ChainParity from '../../../../ValidatorOnboarding/Deposit/ChainParity'
import ValidatorRequest from '../../../../ValidatorOnboarding/Deposit/ValidatorRequest/ValidatorRequest'
import CurrencyDropdown from '../../../../../components/General/CurrencyDropdown'
import { CurrencyType } from '../../../../../components/General/ValidatorsMenuWithPrice'
import { CURRENCIES } from '../../../../../constants'
import {
  formatNumbersWithComa,
  getDepositTitle,
} from '../../../../../utilities'

const DepositPanel = () => {
  const [isInfoBoxVisible, setIsInfoBoxVisible] = useState(true)
  const [depositAmount, setDepositAmount] = useState('')
  const [currency, setCurrency] = useState(
    Object.keys(CURRENCIES)[0] as CurrencyType,
  )
  const { isWalletConnected, isTransactionConfirmation, isChainParity } =
    useSelector((state: RootState) => state.deposit)
  const totalPrice = 1594

  const onCloseInfoBox = () => {
    setIsInfoBoxVisible(false)
  }

  const changeCurrency = (currency: CurrencyType) => {
    if (CURRENCIES[currency]) {
      setCurrency(currency)
    }
  }

  const changeDepositAmountHandler = (value: string) => {
    const numberValue = Number(value)
    if (isNaN(numberValue) === false) {
      setDepositAmount(value)
    }
  }

  const removeDepositAmountHandler = () => {
    setDepositAmount('')
  }

  return (
    <PanelWrapper
      title={getDepositTitle({ isChainParity, isTransactionConfirmation })}
    >
      {isChainParity ? (
        <ChainParity />
      ) : (
        <YStack
          space={'$3'}
          style={{
            width: '100%',
          }}
        >
          <XStack
            space={'$3'}
            style={{
              width: '100%',
            }}
          >
            <YStack space={'$2'}>
              <Text size={15} weight="regular" color={'#647084'}>
                Deposit validator
              </Text>
              <Input
                icon={
                  <ClearIcon
                    size={20}
                    style={{ cursor: 'pointer' }}
                    onClick={removeDepositAmountHandler}
                  />
                }
                placeholder="Deposit Amount"
                value={depositAmount}
                onChangeText={changeDepositAmountHandler}
              />
            </YStack>
            <YStack space={'$2'}>
              <XStack style={{ justifyContent: 'space-between' }}>
                <Text size={15} weight={'semibold'}>
                  {currency}
                </Text>
                <CurrencyDropdown changeCurrency={changeCurrency} />
              </XStack>
              <Text size={27} weight={'semibold'}>
                {formatNumbersWithComa(totalPrice)} {currency}
              </Text>
            </YStack>
          </XStack>
          <DividerLine />
          <ValidatorRequest
            key={2}
            name={'2'}
            isTransactionConfirmation={isTransactionConfirmation}
          />
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
              {isWalletConnected ? (
                <ConnectedWallet />
              ) : (
                <ConnectWallet isConnectBtnJustifyEnd={true} />
              )}
            </YStack>
          )}
        </YStack>
      )}
    </PanelWrapper>
  )
}

export default DepositPanel
