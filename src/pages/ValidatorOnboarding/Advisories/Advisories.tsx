import { Text } from '@status-im/components'
import { useState, useEffect } from 'react'
import { Stack, XStack, YStack } from 'tamagui'

import AdvisoriesContent from './AdvisoriesContent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { setSubStepAdvisories } from '../../../redux/ValidatorOnboarding/Advisories/slice'

type AdvisoryTopicsType = {
  [key: string]: string[]
}

const Advisories = () => {
  const dispatch = useDispatch()
  const { subStepAdvisories } = useSelector((state: RootState) => state.advisories)
  const [selectedTitle, setSelectedTitle] = useState(Object.keys(advisoryTopics)[0])

  const unicodeNumbers = ['➀', '➁', '➂', '➃', '➄', '➅']
  const advisoriesIcons = unicodeNumbers.map((number, index) =>
    index <= subStepAdvisories ? '✓' : number,
  )

  useEffect(() => {
    setSelectedTitle(Object.keys(advisoryTopics)[subStepAdvisories])
  }, [subStepAdvisories])

  const isCurrent = (currentTitle: string): boolean => {
    const topics = Object.keys(advisoryTopics)
    const index = topics.indexOf(currentTitle)
    return index <= subStepAdvisories ? true : false
  }

  const getIndexTitle = (title: string): number => {
    const topics = Object.keys(advisoryTopics)
    const index = topics.indexOf(title)
    return index
  }

  return (
    <XStack
      style={{ padding: '30px 33px', justifyContent: 'space-between' }}
      minHeight={'65vh'}
      width={'100%'}
    >
      <YStack space={'$2'}>
        <Stack marginBottom="$6">
          <Text size={27} weight={'semibold'}>
            Advisories
          </Text>
        </Stack>
        {Object.keys(advisoryTopics).map((title, index) => (
          <XStack
            key={title}
            onPress={() => dispatch(setSubStepAdvisories(getIndexTitle(title)))}
            style={{ cursor: 'pointer', alignItems: 'center' }}
            space={'$2'}
          >
            <Text
              size={19}
              weight={isCurrent(title) && 'semibold'}
              color={isCurrent(title) ? 'blue' : ''}
            >
              {advisoriesIcons[index]}
            </Text>
            <Text
              size={19}
              weight={isCurrent(title) ? 'semibold' : ''}
              color={isCurrent(title) ? 'blue' : ''}
            >
              {title}
            </Text>
          </XStack>
        ))}
      </YStack>

      <AdvisoriesContent title={selectedTitle} content={advisoryTopics[selectedTitle]} />
    </XStack>
  )
}

export default Advisories

export const advisoryTopics: AdvisoryTopicsType = {
  'Proof of Stake': [
    'Proof of Stake systems require validators to hold and lock up a certain amount of cryptocurrency to participate.',
    'In Proof of Stake, the chances of creating a block is proportional to the amount of cryptocurrency held.',
    'Unlike Proof of Work, Proof of Stake aims to achieve consensus without intensive computational work.',
  ],
  Deposit: [
    'Deposits are often irreversible, so ensure to double-check transaction details before confirming.',
    'Delay in deposit acknowledgment might be due to network congestion or node synchronization.',
    'Always keep transaction IDs or hashes for records and future references in case of disputes.',
  ],
  'Key Management': [
    'Storing your private keys on a device connected to the internet is susceptible to hacks and malware.',
    'Hardware wallets provide an added layer of security by keeping private keys isolated from online systems.',
    'Regularly back up and encrypt your key management solutions to prevent potential losses.',
  ],
  'Bad Behaviour': [
    'If you try to cheat the system, or act contrary to the specification, you will be liable to incur a penalty known as slashing.',
    'Running your validator keys simultaneously on two or more machines will result in slashing.*',
    'Simply being offline with an otherwise healthy network does not result in slashing, but will result in small inactivity penalties.',
  ],
  Requirements: [
    'Ensure your system meets the minimum software and hardware requirements before initiating any operations.',
    'Staying updated with the latest versions is vital to maintain system integrity and performance.',
    'Failure to meet requirements might result in operational inefficiencies or security vulnerabilities.',
  ],
  Risks: [
    'Cryptocurrency investments are subject to high volatility and can result in both significant gains and losses.',
    'Always do thorough research before making investment decisions or engaging in transactions.',
    'Be wary of phishing scams, malicious software, and too-good-to-be-true offers.',
  ],
}
