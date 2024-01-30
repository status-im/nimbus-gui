import { Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { RootState } from '../../../../redux/store'
import { DOCUMENTATIONS } from './documentations'
import { MAC } from '../../../../constants'
import OSCards from './OSCards'
import Markdown from '../../../../components/General/Markdown/Markdown'
import { setPinnedMessage } from '../../../../redux/PinnedMessage/slice'

function extractBashCommands(documentation: any) {
  const bashCommandRegex = /```bash\n([\s\S]*?)\n```/g
  const matches = []
  let match

  while ((match = bashCommandRegex.exec(documentation)) !== null) {
    matches.push(match[1])
  }
  return matches.join('\n\n')
}

const ValidatorSetupInstall = () => {
  const dispatch = useDispatch()
  const [selectedOS, setSelectedOS] = useState(MAC)
  const selectedClient = useSelector((state: RootState) => state.execClient.selectedClient)
  const docText = DOCUMENTATIONS[selectedClient].documentation[selectedOS]
  const bashCommands = extractBashCommands(docText)

  const handleOSCardClick = (os: string) => {
    setSelectedOS(os)
  }

  const copyCommands = () => {
    navigator.clipboard.writeText(bashCommands)
    dispatch(
      setPinnedMessage({
        id: '123',
        text: 'You have successfully copied the commands to your clipboard.',
        pinned: true,
      }),
    )
    setTimeout(() => {
      dispatch(
        setPinnedMessage({
          id: '123',
          text: 'You have successfully copied the commands to your clipboard.',
          pinned: false,
        }),
      )
    }, 3000)
  }

  return (
    <YStack style={{ padding: '26px 32px', width: '100%' }}>
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
          <Stack onPress={() => copyCommands()}>
            <Markdown children={DOCUMENTATIONS[selectedClient].documentation[selectedOS]} />
          </Stack>
        </Stack>
      </YStack>
    </YStack>
  )
}

export default ValidatorSetupInstall
