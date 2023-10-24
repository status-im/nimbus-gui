import { YStack } from 'tamagui'
import { Text } from '@status-im/components'
import { useSelector } from 'react-redux'
import { useState } from 'react'

import { RootState } from '../../../../redux/store'
import SyntaxHighlighterBox from './SyntaxHighlighter'
import OSCards from './OSCards'
import { DOCUMENTATIONS } from './documentations'
import { MAC } from '../../../../constants'

const ValidatorSetupInstall = () => {
  const [selectedOs, setSelectedOs] = useState(MAC)
  const selectedClient = useSelector((state: RootState) => state.execClient.selectedClient)

  const handleOsCardClick = (os: string) => {
    setSelectedOs(os)
  }

  return (
    <YStack style={{ width: '100%', padding: '26px 32px' }}>
      <Text size={27} weight={'semibold'}>
        Validator Setup
      </Text>
      <YStack
        style={{
          border: '2px solid #1B273D0D',
          borderRadius: '16px',
          padding: '19px 16px',
          marginBottom: '4px',
          marginTop: '10px',
        }}
        space={'$2'}
      >
        <Text size={19}>Installing {selectedClient}</Text>
        <Text size={15} color="#647084" weight={'regular'}>
          {DOCUMENTATIONS[selectedClient].general}
        </Text>
        <OSCards selectedOs={selectedOs} handleOsCardClick={handleOsCardClick} />
        <YStack space={'$2'}>
          <Text size={19}>Package Managers</Text>
          <Text size={15} weight={'semibold'}>
            MacOS via Homebrew
          </Text>
          <Text size={15} color="#647084">
            The easiest way to install go-ethereum is to use the Geth Homebrew tap. The first step
            is to check that Homebrew is installed. The following command should return a version
            number.
          </Text>
          <SyntaxHighlighterBox rows={['brew -v']} />
          <Text size={15} color="#647084">
            If a version number is returned, then Homebrew is installed. If not, Homebrew can be
            installed by following the instructions here. With Homebrew installed, the following
            commands add the Geth tap and install Geth:
          </Text>
          <SyntaxHighlighterBox rows={['brew tap ethereum/ethereum', 'brew install ethereum']} />
        </YStack>
      </YStack>
    </YStack>
  )
}

export default ValidatorSetupInstall
