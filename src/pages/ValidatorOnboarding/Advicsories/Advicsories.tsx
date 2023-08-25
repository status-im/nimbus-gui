import { Text } from '@status-im/components'
import { useState } from 'react'
import { Stack, XStack, YStack } from 'tamagui'
import AdvisoriesContent from './AdvisoriesContent'

type AdvisoryTopicsType = {
  [key: string]: string[]
}

const unicodeNumbers = ['➀', '➁', '➂', '➃', '➄', '➅']

const advisoryTopics: AdvisoryTopicsType = {
  'Proof of Stake': [
    'Proof of Stake systems require validators to hold and lock up a certain amount of cryptocurrency to participate.',
    'In Proof of Stake, the chances of creating a block is proportional to the amount of cryptocurrency held.',
    'Unlike Proof of Work, Proof of Stake aims to achieve consensus without intensive computational work.'
  ],
  Deposit: [
    'Deposits are often irreversible, so ensure to double-check transaction details before confirming.',
    'Delay in deposit acknowledgment might be due to network congestion or node synchronization.',
    'Always keep transaction IDs or hashes for records and future references in case of disputes.'
  ],
  'Key Management': [
    'Storing your private keys on a device connected to the internet is susceptible to hacks and malware.',
    'Hardware wallets provide an added layer of security by keeping private keys isolated from online systems.',
    'Regularly back up and encrypt your key management solutions to prevent potential losses.'
  ],
  'Bad Behaviour': [
    'If you try to cheat the system, or act contrary to the specification, you will be liable to incur a penalty known as slashing.',
    'Running your validator keys simultaneously on two or more machines will result in slashing.',
    'Simply being offline with an otherwise healthy network does not result in slashing, but will result in small inactivity penalties.'
  ],
  Requirements: [
    'Ensure your system meets the minimum software and hardware requirements before initiating any operations.',
    'Staying updated with the latest versions is vital to maintain system integrity and performance.',
    'Failure to meet requirements might result in operational inefficiencies or security vulnerabilities.'
  ],
  Risks: [
    'Cryptocurrency investments are subject to high volatility and can result in both significant gains and losses.',
    'Always do thorough research before making investment decisions or engaging in transactions.',
    'Be wary of phishing scams, malicious software, and too-good-to-be-true offers.'
  ],
}
const Advicsories = () => {
  const [selectedTitle, setSelectedTitle] = useState('Bad Behaviour')

  return (
    <XStack
      className={'layout-left'}
      space={'$10'}
      style={{ padding: '16px 32px' }}
      marginBottom={'$20'}
      width={'100%'}
    >
      <YStack space={'$2'}>
        <Stack marginBottom="$6">
          <Text size={27} weight={'semibold'}>
            Advisories
          </Text>
        </Stack>
        {Object.keys(advisoryTopics).map((title, index) => (
          <Stack key={title} onPress={() => setSelectedTitle(title)} style={{ cursor: 'pointer' }}>
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
  )
}

export default Advicsories
