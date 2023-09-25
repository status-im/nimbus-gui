import { Avatar, Text } from '@status-im/components'
import { Stack, XStack, YStack } from 'tamagui'

import { getFormattedWalletAddress } from '../../../utilities'

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
        <YStack>
          <Text size={13} weight={'semibold'}>
            Ethereum Mainnet
          </Text>
          <Text size={13}>{getFormattedWalletAddress('0xb9dasdfc35')}</Text>
          <Stack style={{ marginTop: '3px' }}>
            <Text size={13} color="#2A4CF4" weight={'semiboldF'}>
              Connected
            </Text>
          </Stack>
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
