import { XStack, Stack, Text as TextTam, YStack } from 'tamagui'
import { Text } from '@status-im/components'

import PairedDeviceCard from '../ConsensusClient/PairedDeviceCard'
import ExecClientCard from './ExecClientCard'
import LinkWithArrow from '../../../../components/General/LinkWithArrow'

const ValidatorSetup = () => {
  return (
    <YStack style={{ width: '100%', padding: '16px 32px' }}>
      <XStack justifyContent={'space-between'}>
        <Text size={27} weight={'semibold'}>
          Validator Setup
        </Text>
        <PairedDeviceCard isVisibleState={true} />
      </XStack>

      <YStack>
        <Stack style={{ marginBottom: '4px' }}>
          <Text size={13} color="#647084" weight={'semibold'}>
            Execution Client Detection
          </Text>
        </Stack>
        <Text size={15} weight={'regular'}>
          No existing execution client installations have been detected on paired device.
        </Text>
        <Text size={13} color="#828282">
          If you believe this to be incorrect please test your pairing to the correct device and try
          again.
        </Text>
      </YStack>

      <TextTam fontSize={27} style={{ margin: '5px', marginLeft: 0 }}>
        Select Execution client
      </TextTam>
      <XStack justifyContent={'space-between'}>
        <ExecClientCard name={'Nethermind'} icon={'/icons/nethermind-circle.png'} />
        <ExecClientCard name={'Besu'} icon={'/icons/hyperledger-besu-circle.png'} />
        <ExecClientCard name={'Geth'} icon={'/icons/gethereum-mascot-circle.png'} />
        <ExecClientCard name={'Erigon'} icon={'/icons/erigon-circle.png'} />
        <ExecClientCard name={'Nimbus'} icon={'/icons/NimbusDisabled.svg'} isComingSoon={true} />
      </XStack>
      <LinkWithArrow
        to="/"
        text="View Execution client comparison chart"
        style={{ marginTop: '3%' }}
      />
    </YStack>
  )
}

export default ValidatorSetup