import { Avatar, Button } from '@status-im/components'
import { useAccountCenter, useConnectWallet } from '@web3-onboard/react'
import { XStack } from 'tamagui'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { setIsWalletConnected } from '../../../redux/ValidatorOnboarding/Deposit/slice'

const ConnectWallet = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const updateAccountCenter = useAccountCenter()
  const dispatch = useDispatch()

  useEffect(() => {
    if (wallet) {
      dispatch(setIsWalletConnected(true))
    } else {
      dispatch(setIsWalletConnected(false))
    }
  }, [wallet])

  const onConnectWalletClick = () => {
    if (wallet) {
      disconnect(wallet)
    } else {
      connect()
      updateAccountCenter({ enabled: false })
    }
  }

  return (
    <XStack space={'$2'} alignItems={'center'}>
      <Avatar
        type="icon"
        size={32}
        icon={<img src={'/icons/eth-logo.svg'} alt="eth-logo" />}
      />
      <Button disabled={connecting} onPress={onConnectWalletClick}>
        {connecting
          ? 'Connecting'
          : wallet
          ? 'Disconnect Wallet'
          : 'Connect Wallet'}
      </Button>
    </XStack>
  )
}

export default ConnectWallet
