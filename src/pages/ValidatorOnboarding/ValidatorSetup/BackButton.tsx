import { Text } from '@status-im/components'
import { Stack, XStack } from 'tamagui'
import { ArrowLeftIcon } from '@status-im/icons'
import { useEffect, useState } from 'react'
import { FORM_STEPS, STEPPER_PATHS } from '../../../constants'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { setIsConfirmPhraseStage } from '../../../redux/ValidatorOnboarding/KeyGeneration/slice'
import { setActiveStep } from '../../../redux/ValidatorOnboarding/slice'

const BackButton = () => {
  const dispatch = useDispatch()  
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
  }, [activeStep])

  const prevPageName = () => {
    let name = FORM_STEPS[activeStep - 1]?.label || 'Back'
    if (activeStep === 7) {
      name = 'Key Generation'
    }
    return name
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
      navigate('/validator-onboarding/key-generation')
      return
    } else {
      // Handle other cases as before
      let prevPath = STEPPER_PATHS[activeStep - 1] || '/validator-onboarding/'
      navigate(prevPath)
    }
  }

  return (
    <XStack
      alignItems="center"
      space="$3"
      cursor={buttonState !== 'disabled' ? 'pointer' : 'default'}
      onClick={() => buttonState !== 'disabled' && handleNavigateBack()}
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
        {prevPageName()}
      </Text>
    </XStack>
  )
}

export default BackButton
