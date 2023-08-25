import { Button, Text } from '@status-im/components'
import { useState } from 'react'
import { Stack, XStack, YStack } from 'tamagui'
import AdvisoriesContent from './AdvisoriesContent'
import ValidatorBoxWrapper from '../ValidatorBoxWrapper/ValidatorBoxWrapper'

type AdvisoryTopicsType = {
  [key: string]: string
}

const unicodeNumbers = ['➀', '➁', '➂', '➃', '➄', '➅']

const advisoryTopics: AdvisoryTopicsType = {
  'Proof of Stake': 'This is content for Proof of Stake...',
  Deposit: 'This is content for Deposit...',
  'Key Management': 'This is content for Key Management...',
  'Bad Behaviour':
    'If you try to cheat the system, or act contrary to the specification, you will be liable to incur a penalty known as slashing*. Running your validator keys simultaneously on two or more machines will result in slashing.* Simply being offline with an otherwise healthy network does not result in slashing, but will result in small inactivity penalties.',
  Requirements: 'This is content for Requirements...',
  Risks: 'This is content for Risks...',
}

const Advicsories = () => {
  const [selectedTitle, setSelectedTitle] = useState('Bad Behaviour')

  return (
    <>
      <ValidatorBoxWrapper>
        <XStack justifyContent={'space-between'} space={'$10'} style={{ padding: '16px 32px' }}>
          <YStack justifyContent={'space-between'} space={'$2'}>
            <Stack marginBottom="$6">
              <Text size={27} weight={'semibold'}>
                Advisories
              </Text>
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
          <AdvisoriesContent
            title={selectedTitle}
            content={advisoryTopics[selectedTitle]}
          ></AdvisoriesContent>
        </XStack>
      </ValidatorBoxWrapper>
      <Stack style={{ alignItems: 'end', width: '100%', marginTop: '16px' }}>
        <Button>Continue</Button>
      </Stack>
    </>
  )
}

export default Advicsories
