import { Button, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'

import PanelWrapper from './PanelWrapper'

const DepositPanel = () => {
  const connectWalletHandler = () => {}

  return (
    <PanelWrapper>
      <Text size={19} weight={'semibold'}>
        Deposit Funds
      </Text>
      <YStack
        space={'$3'}
        style={{
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '6px',
        }}
      >
        <XStack
          style={{ width: '100%', justifyContent: 'end', marginTop: '6px' }}
        >
          <Button onPress={connectWalletHandler}>Connect Wallet</Button>
        </XStack>
      </YStack>
    </PanelWrapper>
  )
}

export default DepositPanel
