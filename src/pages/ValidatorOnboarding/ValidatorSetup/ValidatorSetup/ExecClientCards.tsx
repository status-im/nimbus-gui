import { Stack, XStack, YStack } from 'tamagui'
import { Text } from '@status-im/components'

import ExecClientCard from './ExecClientCard'

export const EXEC_CLIENTS_ICONS: Record<string, string> = {
  Nethermind: '/icons/nethermind-circle.png',
  Besu: '/icons/hyperledger-besu-circle.png',
  Geth: '/icons/gethereum-mascot-circle.png',
  Erigon: '/icons/erigon-circle.png',
  Nimbus: '/icons/NimbusDisabled.svg',
}

const ExecClientCards = () => {
  return (
    <YStack space={'$2'}>
      <Stack style={{ marginTop: '15px', marginLeft: 0, marginBottom: '15px' }}>
        <Text size={27}>Select Execution client</Text>
      </Stack>
      <XStack justifyContent={'space-between'}>
        {Object.entries(EXEC_CLIENTS_ICONS).map(([name, icon], index) => (
          <ExecClientCard key={index} name={name} icon={icon} />
        ))}
      </XStack>
    </YStack>
  )
}

export default ExecClientCards
