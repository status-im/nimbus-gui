import { XStack, Stack, Text as TextTam, YStack } from 'tamagui'
import PairedDeviceCard from './PairedDeviceCard'
import { Text } from '@status-im/components'
import ConsensusGaugeCard from './ConsensusGaugeCard'
import ConsensusClientCard from './ConsensusClientCard'
import LinkWithArrow from '../../../components/General/LinkWithArrow'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

const ConsensusSelection = () => {
  const selectedClient = useSelector((state: RootState) => state.execClient.selectedClient)

  const a = [
    {
      name: selectedClient,
      icon: '/icons/Nimbus-black.png', // FIXL change icon based on selectedClient
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

      <XStack space={'$8'}>
        <ConsensusClientCard name={a[0].name} icon={a[0].icon} />
        <YStack width={'67%'} space={'$4'}>
          <Text size={27}>The resource efficient Ethereum Clients.</Text>
          <Text size={15}>
            {selectedClient} is a client implementation for both execution and consensus layers that strives
            to be as lightweight as possible in terms of resources used. This allows it to perform
            well on embedded systems, resource-restricted devices -- including Raspberry Pis -- and
            multi-purpose servers.
          </Text>
          <Text size={19} weight={'semibold'}>
            <LinkWithArrow
              textColor="black"
              text="Nimbus Documentation"
              arrowRight={true}
              to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
          </Text>
        </YStack>
      </XStack>
    </YStack>
  )
}

export default ConsensusSelection
