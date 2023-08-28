import { XStack, Stack, YStack } from 'tamagui'
import { InformationBox, Text } from '@status-im/components'
import { Link } from 'react-router-dom'
import { CloseCircleIcon } from '@status-im/icons'

const ValidatorSetupInstall = () => {
  return (
    <YStack style={{ width: '100%', padding: '16px 32px' }}>
      <XStack justifyContent={'space-between'} style={{ marginBottom: '10px' }}>
        <Text size={27} weight={'semibold'}>
          Validator Setup
        </Text>
      </XStack>

      <YStack>
        <Stack style={{ marginBottom: '4px' }}>
          <YStack space={'$3'}>
            <Text size={15} weight={'semibold'}>
              Geth
            </Text>

            <Text size={13} color="#647084">
              Geth is written in Go, fully open source and licensed under the GNU LGPL v3. Geth is
              one of the three original implementations of the Ethereum protocol.
            </Text>
            <InformationBox
              message="No connection has been created to a Nimbus service for over 3 minutes. Please ensure that the generated pairing ID was input into the CLI. If you are unable to pair device, consider connect via IP.   "
              variant="error"
              icon={<CloseCircleIcon size={20} color="$red" />}
            />
          </YStack>
        </Stack>
      </YStack>

     
    </YStack>
  )
}

export default ValidatorSetupInstall
