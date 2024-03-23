import { DividerLine, Text } from '@status-im/components'
import { YStack } from 'tamagui'
import { useSelector } from 'react-redux'

import PanelWrapper from './PanelWrapper'
import { getDepositTitle } from '../../../../utilities'
import { RootState } from '../../../../redux/store'
import ConnectedWallet from '../../../../components/General/ConnectedWallet'
import ConnectWallet from '../../../../components/General/ConnectWallet'
import ChainParity from '../../../../components/General/ChainParity'
import ValidatorRequest from '../../../../components/General/ValidatorRequest/ValidatorRequest'
import ValidatorBalanceInfoBox from '../../../../components/General/ValidatorBalanceInfoBox'
import DepositValidator from './DepositValidator'

const DepositPanel = () => {
  const { isWalletConnected, isTransactionConfirmation, isChainParity } =
    useSelector((state: RootState) => state.deposit)

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
          <DepositValidator />
          <DividerLine />
          <ValidatorRequest
            key={2}
            name={'2'}
            isTransactionConfirmation={isTransactionConfirmation}
          />
          <ValidatorBalanceInfoBox />
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
