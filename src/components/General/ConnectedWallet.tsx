import { Avatar, Text } from '@status-im/components'
import { Stack, XStack, YStack } from 'tamagui'
import { useConnectWallet } from '@web3-onboard/react'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

import { formatToFixed4, getFormattedWalletAddress } from '../../utilities'

const ConnectedWallet = () => {
  const [{ wallet }] = useConnectWallet()
  const [address, setAddress] = useState('')
  const [balance, setBalance] = useState('')
  const [networkName, setNetworkName] = useState('')

  useEffect(() => {
    const fetchBalance = async () => {
      if (wallet?.provider) {
        const ethProvider = new ethers.BrowserProvider(wallet.provider)
        const signer = ethProvider.getSigner()

        const address = (await signer).address
        const userBalance = await ethProvider.getBalance(address)
        const network = await ethProvider.getNetwork()

        setAddress(address)
        setBalance(ethers.formatEther(userBalance))
        setNetworkName(network.name)
      }
    }

    fetchBalance()
  }, [wallet])

  return (
    <XStack style={{ width: '100%', justifyContent: 'space-between' }}>
      <XStack space={'$2'}>
        <Avatar
          type="icon"
          size={32}
          icon={
            <img
              src={'/icons/connected-wallet-eth-logo.svg'}
              alt="connected-wallet-eth-logo"
            />
          }
        />
        <YStack>
          <Text size={15} weight={'semibold'}>
            {networkName}
          </Text>
          <Text size={13} weight={'semibold'}>
            {getFormattedWalletAddress(address)}
          </Text>
          <Stack style={{ marginTop: '3px' }}>
            <Text size={13} color="#2A4CF4" weight={'semibold'}>
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
          {formatToFixed4(balance)} ETH
        </Text>
      </YStack>
    </XStack>
  )
}

export default ConnectedWallet
