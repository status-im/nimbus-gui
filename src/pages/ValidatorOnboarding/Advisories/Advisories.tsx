import { Text } from '@status-im/components'
import { useState, useEffect } from 'react'
import { Stack, XStack, YStack } from 'tamagui'

import AdvisoriesContent from './AdvisoriesContent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { setSubStepAdvisories } from '../../../redux/ValidatorOnboarding/Advisories/slice'
import './advisoriesLayout.css'
import { advisoryTopics } from '../../../constants'

const Advisories = () => {
  const dispatch = useDispatch();
  const { subStepAdvisories } = useSelector((state: RootState) => state.advisories);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [selectedTitle, setSelectedTitle] = useState<string>(Object.keys(advisoryTopics)[0]);

  const unicodeNumbers = ['➀', '➁', '➂', '➃', '➄', '➅'];

  const isCompleted = (index: number): boolean => completedSteps.includes(index);

  const advisoriesIcons = unicodeNumbers.map((number, index) =>
    isCompleted(index) ? '✓' : number,
  );

  useEffect(() => {
    setSelectedTitle(Object.keys(advisoryTopics)[subStepAdvisories]);
    // Add the current step to the completed steps if not already there
    setCompletedSteps((prevSteps) => {
      if (!prevSteps.includes(subStepAdvisories)) {
        return [...prevSteps, subStepAdvisories];
      }
      return prevSteps;
    });
  }, [subStepAdvisories]);

  const handleStepClick = (title: string): void => {
    const index = getIndexTitle(title);
    dispatch(setSubStepAdvisories(index));
  };

  const isCurrent = (currentTitle: string): boolean => {
    const topics = Object.keys(advisoryTopics);
    const index = topics.indexOf(currentTitle);
    return index === subStepAdvisories;
  };

  const getIndexTitle = (title: string): number => {
    const topics = Object.keys(advisoryTopics);
    const index = topics.indexOf(title);
    return index;
  };

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
            onPress={() => handleStepClick(title)}
            style={{ cursor: 'pointer', alignItems: 'center' }}
            space={'$2'}
          >
            <Text
              size={19}
              weight={isCompleted(index) || isCurrent(title) ? 'semibold' : 'normal'}
              color={isCompleted(index) || isCurrent(title) ? 'blue' : 'default'}
            >
              {advisoriesIcons[index]}
            </Text>
            <Text
              size={19}
              weight={isCompleted(index) || isCurrent(title) ? 'semibold' : 'normal'}
              color={isCompleted(index) || isCurrent(title) ? 'blue' : 'default'}
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

export default Advisories;
