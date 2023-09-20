import { Avatar, Button } from '@status-im/components'
import { XStack } from 'tamagui'

const ConnectWallet = () => {
  const onConnectWalletClick = () => {}

  return (
    <XStack space={'$2'} alignItems={'center'}>
      <Avatar
        type="icon"
        size={32}
        icon={<img src={'/icons/eth-logo.svg'} alt="eth-logo" style={{ width: '100%' }} />}
      />
      <Button onPress={onConnectWalletClick}>Connect Wallet</Button>
    </XStack>
  )
}

export default ConnectWallet
