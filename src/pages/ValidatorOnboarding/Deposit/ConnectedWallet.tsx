import { Avatar, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

const ConnectedWallet = () => {
  return (
    <XStack style={{ width: '100%', justifyContent: 'space-between' }}>
      <XStack space={'$2'}>
        <Avatar
          type="icon"
          size={32}
          icon={
            <img src={'/icons/connected-wallet-eth-logo.svg'} alt="connected-wallet-eth-logo" />
          }
        />
        <YStack space={'$1'}>
          <Text size={13} weight={'semibold'}>
            Ethereum Mainnet
          </Text>
          <Text size={13}>0xb9d...c35</Text>
          <Text size={13} color="#2A4CF4">
            Connected
          </Text>
        </YStack>
      </XStack>
      <YStack>
        <Text size={15} weight={'semibold'}>
          Balance
        </Text>
        <Text size={27} weight={'semibold'}>
          68.21 ETH
        </Text>
      </YStack>
    </XStack>
  )
}

export default ConnectedWallet
