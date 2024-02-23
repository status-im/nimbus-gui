import { InformationBox, Text } from '@status-im/components'
import { PlaceholderIcon } from '@status-im/icons'
import { YStack } from 'tamagui'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import PanelWrapper from './PanelWrapper'
import { RootState } from '../../../../../redux/store'
import ConnectedWallet from '../../../../../components/General/ConnectedWallet'
import ConnectWallet from '../../../../../components/General/ConnectWallet'
import ChainParity from '../../../../ValidatorOnboarding/Deposit/ChainParity'

const DepositPanel = () => {
  const [isInfoBoxVisible, setIsInfoBoxVisible] = useState(true)
  const { isWalletConnected, isTransactionConfirmation, isChainParity } =
    useSelector((state: RootState) => state.deposit)

  const onCloseInfoBox = () => {
    setIsInfoBoxVisible(false)
  }

  return (
    <PanelWrapper title={'Deposit Funds'}>
      {isChainParity ? (
        <ChainParity />
      ) : (
        <YStack
          space={'$3'}
          style={{
            width: '100%',
          }}
        >
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
