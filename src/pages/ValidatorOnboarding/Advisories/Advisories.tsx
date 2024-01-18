import { Text } from '@status-im/components'
import { useState, useEffect } from 'react'
import { Stack, XStack, YStack } from 'tamagui'

import AdvisoriesContent from './AdvisoriesContent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { setSubStepAdvisories } from '../../../redux/ValidatorOnboarding/Advisories/slice'
import './advisoriesLayout.css'

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
    <XStack className="advisories-container">
      <YStack space={'$2'} marginBottom={'30px'}>
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

