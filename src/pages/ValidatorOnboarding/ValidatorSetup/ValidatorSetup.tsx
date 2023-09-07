import { XStack, Stack, Text as TextTam, YStack } from 'tamagui'
import { Text } from '@status-im/components'

import PairedDeviceCard from './PairedDeviceCard'
import ExecClientCard from './ExecClientCard'
import LinkWithArrow from '../../../components/General/LinkWithArrow'

const ValidatorSetup = () => {
  return (
    <YStack
      style={{ width: '100%', padding: '26px 32px' }}
      minHeight={'65vh'}
      justifyContent={'space-between'}
    >
      <XStack justifyContent={'space-between'} alignItems={'center'}>
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
        <Text size={15}>
          No existing execution client installations have been detected on paired device.
        </Text>
        <Text size={13} color="#828282">
          If you believe this to be incorrect please test your pairing to the correct device and try
          again.
        </Text>
      </YStack>

      <TextTam fontSize={27} style={{ marginTop: '15px', marginLeft: 0, marginBottom: '15px' }}>
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
        style={{ marginTop: '6%', fontWeight: 'bold' }}
      />
    </YStack>
  )
}

export default ValidatorSetup
