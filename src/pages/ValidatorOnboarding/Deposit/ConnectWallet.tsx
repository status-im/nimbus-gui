import { Avatar, Button } from '@status-im/components'
import { useWeb3Modal } from '@web3modal/react'
import { XStack } from 'tamagui'

const ConnectWallet = () => {
  const { open } = useWeb3Modal()

  const onConnectWalletClick = () => {
    open()
  }

  return (
    <XStack space={'$2'} alignItems={'center'}>
      <Avatar type="icon" size={32} icon={<img src={'/icons/eth-logo.svg'} alt="eth-logo" />} />
      <Button onPress={onConnectWalletClick}>Connect Wallet</Button>
    </XStack>
  )
}

export default ConnectWallet
