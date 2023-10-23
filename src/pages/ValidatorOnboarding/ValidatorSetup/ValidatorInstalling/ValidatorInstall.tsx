import { XStack, Stack, YStack } from 'tamagui'
import { InformationBox, Text } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import OsCard from './OsCard'
import SyntaxHighlighterBox from './SyntaxHighlighter'
import { RootState } from '../../../../redux/store'

const ValidatorSetupInstall = () => {
  const [selectedOs, setSelectedOs] = useState('Mac')
  const selectedClient = useSelector((state: RootState) => state.execClient.selectedClient)

  return (
    <YStack style={{ width: '100%', padding: '26px 32px' }}>
      <XStack justifyContent={'space-between'} style={{ marginBottom: '10px' }}>
        <Text size={27} weight={'semibold'}>
          Validator Setup
        </Text>
      </XStack>
      <YStack>
        <Stack style={{ marginBottom: '4px' }}>
          <YStack space={'$3'}>
            <Text size={15} weight={'semibold'}>
              {selectedClient}
            </Text>
            <Text size={15} color="#647084">
              Geth is written in Go, fully open source and licensed under the GNU LGPL v3. Geth is
              one of the three original implementations of the Ethereum protocol.
            </Text>
            <InformationBox
              message="Currently Geth is used by > 66% of the network. Client diversity is extremely important for the network health of Ethereum: A bug in a client with a share of over 33% can cause Ethereum to go offline. If the client has a supermajority (>66%), a bug could cause the chain to incorrectly split, potentially leading to slashing. Learn how Nimbus is helping client diversity →"
              variant="error"
              icon={<CloseCircleIcon size={20} color="$red" />}
            />
            <YStack
              style={{
                border: '1px solid #00000026',
                borderRadius: '16px',
                padding: '19px 16px',
              }}
              space={'$3'}
            >
              <Text size={19}> Installing {selectedClient}</Text>
              <Text size={15} color="#647084" weight={'regular'}>
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
              <XStack justifyContent={'space-between'} my={'15px'}>
                <OsCard
                  icon="/icons/apple-logo.svg"
                  name="MacOS"
                  isSelected={selectedOs === 'Mac'}
                  onClick={() => setSelectedOs('Mac')}
                />
                <OsCard
                  icon="/icons/linux-logo.svg"
                  name="Linux"
                  isSelected={selectedOs === 'Linux'}
                  onClick={() => setSelectedOs('Linux')}
                />
                <OsCard
                  icon="/icons/windows-logo.svg"
                  name="Windows"
                  isSelected={selectedOs === 'Windows'}
                  onClick={() => setSelectedOs('Windows')}
                />
              </XStack>
              <YStack space={'$2'}>
                <Text size={19}>Package Managers</Text>
                <Text size={15} weight={'semibold'}>
                  MacOS via Homebrew
                </Text>
                <Text size={15} color="#647084">
                  The easiest way to install go-ethereum is to use the Geth Homebrew tap. The first
                  step is to check that Homebrew is installed. The following command should return a
                  version number.
                </Text>
                <SyntaxHighlighterBox rows={['brew -v']} />
                <Text size={15} color="#647084">
                  If a version number is returned, then Homebrew is installed. If not, Homebrew can
                  be installed by following the instructions here. With Homebrew installed, the
                  following commands add the Geth tap and install Geth:
                </Text>
                <SyntaxHighlighterBox
                  rows={['brew tap ethereum/ethereum', 'brew install ethereum']}
                />
              </YStack>
            </YStack>
          </YStack>
        </Stack>
      </YStack>
    </YStack>
  )
}

export default ValidatorSetupInstall
