import { XStack, Stack, YStack } from 'tamagui'
import { InformationBox, Text } from '@status-im/components'
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
              message="Currently Geth is used by > 66% of the network.
              Client diversity is extremely important for the network health of Ethereum: A bug in a client with a share of over 33% can cause Ethereum to go offline. If the client has a supermajority (>66%), a bug could cause the chain to incorrectly split, potentially leading to slashing.Learn how Nimbus is helping client diversity →"
              variant="error"
              icon={<CloseCircleIcon size={20} color="$red" />}
            />
            <YStack
              style={{
                border: '1px solid #E7EAEE',
                borderRadius: '15px',
                padding: '6px 12px',
              }}
            >
              <Text size={27}> Installing Geth</Text>
              <Text size={13}>
                There are several ways to install Geth, including via a package manager, downloading
                a pre-built bundle, running as a docker container or building from downloaded source
                code. On this page the various installation options are explained for several major
                operating systems. Users prioritizing ease of installation should choose to use a
                package manager or prebuilt bundle. Users prioritizing customization should build
                from source. It is important to run the latest version of Geth because each release
                includes bugfixes and improvements over the previous versions. The stable releases
                are recommended for most users because they have been fully tested. A list of stable
                releases can be found here. Instructions for updating existing Geth installations
                are also provided in each section.
              </Text>
            </YStack>
          </YStack>
        </Stack>
      </YStack>
    </YStack>
  )
}

export default ValidatorSetupInstall
