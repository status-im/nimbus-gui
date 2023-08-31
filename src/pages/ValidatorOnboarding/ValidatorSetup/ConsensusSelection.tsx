import { XStack, Stack, Text as TextTam, YStack } from 'tamagui'
import PairedDeviceCard from './PairedDeviceCard'
import { Text } from '@status-im/components'
import ConsensusGaugeCard from './ConsensusGaugeCard'
import ConsensusClientCard from './ConsensusClientCard'
 
const ConsensusSelection = () => {
  const a = [
    {
      name: 'Nimbus',
      icon: '/icons/Nimbus-black.png',
    },
  ]
  return (
    <YStack style={{ width: '100%', padding: '32px' }}>
      <XStack justifyContent={'space-between'}>
        <Text size={27} weight={'semibold'}>
          Validator Setup
        </Text>
        <XStack space={'$2'}>
          <ConsensusGaugeCard
            color="blue"
            synced={134879}
            title="Execution Sync Status"
            total={150000}
          />
          <PairedDeviceCard />
        </XStack>
      </XStack>

      <YStack>
        <Stack style={{ marginBottom: '4px' }}>
          <Text size={13} color="#647084">
            Consensus Client Detection
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

      <TextTam fontSize={27} style={{ margin: '5px', marginLeft: 0, marginTop: '50px' }}>
        Install Consensus client
      </TextTam>

      <XStack>
        <ConsensusClientCard name={a[0].name} icon={a[0].icon} />
      </XStack>
    </YStack>
  )
}

export default ConsensusSelection
