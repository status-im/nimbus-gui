import { Stack, XStack, YStack } from 'tamagui'
import { Text } from '@status-im/components'

import ExecClientCard from './ExecClientCard'
import { DOCUMENTATION } from '../../../../constants'

const ExecClientCards = () => {
  return (
    <YStack space={'$2'}>
      <Stack style={{ marginTop: '15px', marginLeft: 0, marginBottom: '15px' }}>
        <Text size={27}>Select Execution client</Text>
      </Stack>
      <XStack justifyContent={'space-between'}>
        {DOCUMENTATION}
        <ExecClientCard name={'Nethermind'} icon={'/icons/nethermind-circle.png'} />
        <ExecClientCard name={'Besu'} icon={'/icons/hyperledger-besu-circle.png'} />
        <ExecClientCard name={'Geth'} icon={'/icons/gethereum-mascot-circle.png'} />
        <ExecClientCard name={'Erigon'} icon={'/icons/erigon-circle.png'} />
        <ExecClientCard name={'Nimbus'} icon={'/icons/NimbusDisabled.svg'} isComingSoon={true} />
      </XStack>
    </YStack>
  )
}

export default ExecClientCards
