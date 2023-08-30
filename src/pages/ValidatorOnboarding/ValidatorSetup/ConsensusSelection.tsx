import { XStack, Stack, Text as TextTam, YStack } from 'tamagui'
import PairedDeviceCard from './PairedDeviceCard'
import { Text } from '@status-im/components'
import ExecClientCard from './ExecClientCard'
import { Link } from 'react-router-dom'

const ConsensusSelection = () => {
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

      <Stack marginTop={'10%'}>
        <Text size={15} weight={'semibold'} color="#2A4CF4">
          <Link to={'https://launchpad.ethereum.org/en/faq'}></Link>
          View Execution client comparison chart
        </Text>
      </Stack>
    </YStack>
  )
}

export default ConsensusSelection
