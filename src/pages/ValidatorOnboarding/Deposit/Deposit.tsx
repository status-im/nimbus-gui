import { Avatar, Button, DividerLine, InformationBox, Input, Text } from '@status-im/components'
import { Stack, XStack, YStack } from 'tamagui'

const Deposit = () => {
  return (
    <YStack space={'$2'} style={{ width: '100%', padding: '16px 32px', alignItems: 'start' }}>
      <Text size={19} weight={'semibold'}>
        Deposit Funds
      </Text>
      <DividerLine />
      <Stack space={'$2'}>
        <Text size={15} weight="regular" color={'#647084'}>
          Connect you Wallet to stake required ETH for new validators
        </Text>
        <Input style={{ fontWeight: 'bold' }} />
      </Stack>
      <InformationBox
        message="Your Validator balances currently require a deposit. If you have already made a deposit using Launchpad please wait until the transaction is posted on execution layer to continue."
        variant="error"
      />
      <Text size={19} weight={'semibold'}>
        Connect Wallet
      </Text>
      <XStack space={'$2'} alignItems={'center'}>
        <Avatar
          type="icon"
          size={32}
          icon={<img src={'/icons/eth-logo.svg'} alt="eth-logo" style={{ width: '100%' }} />}
        />
        <Button>Connect Wallet</Button>
      </XStack>
    </YStack>
  )
}

export default Deposit
