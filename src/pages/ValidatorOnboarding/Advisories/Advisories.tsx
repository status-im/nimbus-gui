import { Text } from '@status-im/components'
import { useState, useEffect } from 'react'
import { Stack, XStack, YStack } from 'tamagui'

import AdvisoriesContent from './AdvisoriesContent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { setSubStepAdvisories } from '../../../redux/ValidatorOnboarding/Advisories/slice'
import { ADVISORY_TOPICS } from '../../../constants'
import styles from './advisoriesLayout.module.css'

const Advisories = () => {
  const dispatch = useDispatch()
  const { subStepAdvisories } = useSelector(
    (state: RootState) => state.advisories,
  )
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [selectedTitle, setSelectedTitle] = useState<string>(
    Object.keys(ADVISORY_TOPICS)[0],
  )

  const unicodeNumbers = ['➀', '➁', '➂', '➃', '➄', '➅']

  const isCompleted = (index: number): boolean => completedSteps.includes(index)

  const advisoriesIcons = unicodeNumbers.map((number, index) =>
    isCompleted(index) ? '✓' : number,
  )

  useEffect(() => {
    setSelectedTitle(Object.keys(ADVISORY_TOPICS)[subStepAdvisories])

    setCompletedSteps(prevSteps => {
      if (!prevSteps.includes(subStepAdvisories)) {
        return [...prevSteps, subStepAdvisories]
      }
      return prevSteps
    })
  }, [subStepAdvisories])

  const handleStepClick = (title: string): void => {
    const index = getIndexTitle(title)
    dispatch(setSubStepAdvisories(index))
  }

  const isCurrent = (currentTitle: string): boolean => {
    const topics = Object.keys(ADVISORY_TOPICS)
    const index = topics.indexOf(currentTitle)
    return index === subStepAdvisories
  }

  const getIndexTitle = (title: string): number => {
    const topics = Object.keys(ADVISORY_TOPICS)
    const index = topics.indexOf(title)
    return index
  }

  return (
    <div className={styles['advisories-container']}>
      <YStack space={'$2'} marginBottom={'30px'}>
        <Stack marginBottom="$6">
          <Text size={27} weight={'semibold'}>
            Advisories
          </Text>
        </Stack>
        <div className={styles['advisories-nav']}>
          {Object.keys(ADVISORY_TOPICS).map((title, index) => (
            <XStack
              key={title}
              onPress={() => handleStepClick(title)}
              style={{ cursor: 'pointer', alignItems: 'center' }}
              space={'$2'}
            >
              <Text
                size={27}
                weight={
                  isCompleted(index) || isCurrent(title)
                    ? 'semibold'
                    : 'regular'
                }
                color={
                  isCompleted(index) || isCurrent(title) ? 'blue' : 'default'
                }
              >
                {advisoriesIcons[index]}
              </Text>
              <Text
                size={19}
                weight={
                  isCompleted(index) || isCurrent(title)
                    ? 'semibold'
                    : 'regular'
                }
                color={
                  isCompleted(index) || isCurrent(title) ? 'blue' : 'default'
                }
              >
                {title}
              </Text>
            </XStack>
          ))}
        </div>
      </YStack>

      <AdvisoriesContent
        title={selectedTitle}
        content={ADVISORY_TOPICS[selectedTitle]}
      />
    </div>
  )
}

export default Advisories
