import { Button, Shadow, Text } from '@status-im/components'
import { useState } from 'react'
import { Stack, XStack, YStack } from 'tamagui'
import AdvisoriesContent from './AdvisoriesContent'

const Advicsories = () => {
  const [selectedTitle, setSelectedTitle] = useState('Bad Behaviour')

  const advisoryTopics = {
    'Proof of Stake': 'This is content for Proof of Stake...',
    Deposit: 'This is content for Deposit...',
    'Key Management': 'This is content for Key Management...',
    'Bad Behaviour':
      'If you try to cheat the system, or act contrary to the specification, you will be liable to incur a penalty known as slashing*. Running your validator keys simultaneously on two or more machines will result in slashing.* Simply being offline with an otherwise healthy network does not result in slashing, but will result in small inactivity penalties.',
    Requirements: 'This is content for Requirements...',
    Risks: 'This is content for Risks...',
  }
  const unicodeNumbers = ['➀', '➁', '➂', '➃', '➄', '➅']
  return (
    <>
      <Shadow
        variant="$1"
        style={{
          borderRadius: '16px',
          border: 'none',
          backgroundColor: '#fff',
          padding: '16px 32px',
        }}
      >
        <XStack
          justifyContent={'space-between'}
          className="layout-left"
          space={10}
          style={{ padding: '16px 32px' }}
        >
          <YStack>
            <Stack>
              <Text size={27}>Advisories</Text>
            </Stack>
            {Object.keys(advisoryTopics).map((title, index) => (
              <Stack
                key={title}
                onPress={() => setSelectedTitle(title)}
                style={{ cursor: 'pointer' }}
              >
                <Text
                  size={15}
                  weight={selectedTitle === title && 'semibold'}
                  color={selectedTitle === title ? 'blue' : undefined}
                >
                  {unicodeNumbers[index]} {title}
                </Text>
              </Stack>
            ))}
          </YStack>
          <YStack>
            <AdvisoriesContent
              title={selectedTitle}
              content={advisoryTopics[selectedTitle]}
            ></AdvisoriesContent>
          </YStack>
        </XStack>
      </Shadow>
      <Stack style={{ alignItems: 'end', width: '100%', marginTop: '16px' }}>
        <Button>Continue</Button>
      </Stack>
    </>
  )
}

export default Advicsories
