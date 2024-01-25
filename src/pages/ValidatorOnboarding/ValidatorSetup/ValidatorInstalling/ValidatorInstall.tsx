import { Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import { useSelector } from 'react-redux'
import { useState } from 'react'

import { RootState } from '../../../../redux/store'
import { DOCUMENTATIONS } from './documentations'
import { MAC } from '../../../../constants'
import OSCards from './OSCards'
import Markdown from '../../../../components/General/Markdown/Markdown'

const ValidatorSetupInstall = () => {
  const [selectedOS, setSelectedOS] = useState(MAC)
  const selectedClient = useSelector((state: RootState) => state.execClient.selectedClient)

  const handleOSCardClick = (os: string) => {
    setSelectedOS(os)
  }

  return (
    <YStack style={{ padding: '26px 32px', width:'100%' }}>
      <Text size={27} weight={'semibold'}>
        Client Setup
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
        <Text size={19} weight={'semibold'}>
          Installing {selectedClient}
        </Text>
        <Stack>
          <Markdown children={DOCUMENTATIONS[selectedClient].general} />
          <OSCards selectedOS={selectedOS} handleOSCardClick={handleOSCardClick} />

          <Markdown children={DOCUMENTATIONS[selectedClient].documentation[selectedOS]} />
        </Stack>
      </YStack>
    </YStack>
  )
}

export default ValidatorSetupInstall
