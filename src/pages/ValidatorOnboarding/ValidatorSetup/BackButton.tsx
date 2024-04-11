import { Text } from '@status-im/components'
import { Stack, XStack } from 'tamagui'
import { ArrowLeftIcon } from '@status-im/icons'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  FORM_STEPS,
  KEY_GENERATION,
  STEPPER_PATHS,
  VALIDATOR_ONBOARDING,
} from '../../../constants'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../../redux/store'
import { setIsConfirmPhraseStage } from '../../../redux/ValidatorOnboarding/KeyGeneration/slice'

const BackButton = () => {
  const dispatch = useDispatch()
  const [prevPageName, setPrevPageName] = useState<string>('Back')
  const isConfirmPhraseStage = useSelector(
    (state: RootState) => state.keyGeneration.isConfirmPhraseStage,
  )
  const { activeStep } = useSelector(
    (state: RootState) => state.validatorOnboarding,
  )
  const navigate = useNavigate()
  const [buttonState, setButtonState] = useState<
    'disabled' | 'enabled' | 'pressed'
  >('disabled')

  useEffect(() => {
    setButtonState(activeStep > 0 ? 'enabled' : 'disabled')
    prevPageNameHandler()
  }, [activeStep])

  const prevPageNameHandler = () => {
    console.log(activeStep)

    let adjustedStepIndex = activeStep - 1
    if (activeStep > 4 && activeStep < 7) {
      adjustedStepIndex -= 2
    } else if (activeStep >= 7) {
      adjustedStepIndex -= isConfirmPhraseStage ? 3 : 4
    }

    const stepLabel = FORM_STEPS[adjustedStepIndex]?.label || 'Back'
    setPrevPageName(stepLabel)
  }

  const handleMouseEnter = () => {
    if (buttonState === 'enabled') {
      setButtonState('pressed')
    }
  }

  const handleMouseLeave = () => {
    if (buttonState === 'pressed') {
      setButtonState('enabled')
    }
  }

  const buttonStyle = {
    color:
      buttonState === 'enabled'
        ? '09101C'
        : buttonState === 'disabled'
          ? 'CED4DB'
          : 'fff',
    fill: buttonState === 'pressed' ? '2A4AF5' : '',
    textColor: buttonState === 'disabled' ? 'CED4DB' : '09101C',
  }
  const handleNavigateBack = () => {
    if (activeStep === 7 && isConfirmPhraseStage) {
      dispatch(setIsConfirmPhraseStage(false))
      navigate(`${VALIDATOR_ONBOARDING}/${KEY_GENERATION}`)
      return
    } else {
      let prevPath = STEPPER_PATHS[activeStep - 1] || `${VALIDATOR_ONBOARDING}/`
      navigate(prevPath)
    }
  }

  return (
    <XStack
      alignItems="center"
      space="$3"
      cursor={buttonState !== 'disabled' ? 'pointer' : 'default'}
      onPress={() => buttonState !== 'disabled' && handleNavigateBack()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Stack
        style={{
          border: `1px solid #${buttonStyle.color}`,
          borderRadius: '8px',
          padding: '10px',
          backgroundColor: `#${buttonStyle.fill}`,
        }}
      >
        <ArrowLeftIcon size={16} color={`#${buttonStyle.color}`} />
      </Stack>
      <Text size={15} color={`#${buttonStyle.textColor}`} weight={'semibold'}>
        {prevPageName}
      </Text>
    </XStack>
  )
}

export default BackButton
