import { XStack, Stack, Text as TextTam, YStack } from 'tamagui'
import PairedDeviceCard from './PairedDeviceCard'
import { Text } from '@status-im/components'
import ExecClientCard from './ExecClientCard'

const ValidatorSetup = () => {
  const execClientCardsContent = [
    {
      name: 'Nethermind',
      icon: '/icons/nethermind-circle.png',
    },
    {
      name: 'Besu',
      icon: '/icons/hyperledger-besu-circle.png',
    },
    {
      name: 'Geth',
      icon: '/icons/gethereum-mascot-circle.png',
      isSelected: true,
    },
    {
      name: 'Erigon',
      icon: '/icons/erigon-circle.png',
    },
    {
      name: 'Nimbus',
      icon: '/icons/NimbusDisabled.svg',
      isComingSoon: true,
    },
  ]
  return (
    <YStack style={{ width: '100%', padding: '16px 32px' }}>
      <XStack justifyContent={'space-between'}>
        <Text size={27} weight={'semibold'}>
          Validator Setup
        </Text>
        <PairedDeviceCard />
      </XStack>

      <YStack>
        <Stack style={{ marginBottom: '4px' }}>
          <Text size={13} color="#647084">
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
        {execClientCardsContent.length &&
          execClientCardsContent.map(e => (
            <ExecClientCard
              name={e.name}
              icon={e.icon}
              isSelected={e.isSelected || false}
              isComingSoon={e.isComingSoon}
            />
          ))}
      </XStack>
    </YStack>
  )
}

export default ValidatorSetup
