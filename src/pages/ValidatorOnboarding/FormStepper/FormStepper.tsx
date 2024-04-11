import { Stepper, Step } from 'react-form-stepper'
import { useNavigate } from 'react-router-dom'

import {
  FORM_STEPS,
  PATHS,
  VALIDATOR_ONBOARDING_SUB_PATHS,
} from '../../../constants'
import { useWindowSize } from '../../../hooks/useWindowSize'
import styles from './FormStepper.module.css'

type FormStepperProps = {
  activeStep: number
}

const FormStepper = ({ activeStep }: FormStepperProps) => {
  const navigate = useNavigate()
  const windowSize = useWindowSize()

  const stepToUrlMap = [
    `${PATHS.VALIDATOR_ONBOARDING}/`,
    `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.ADVISORIES}`,
    `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.VALIDATOR_SETUP}`,
    `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.VALIDATOR_SETUP_INSTALL}`,
    `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.CONSENSUS_SELECTION}`,
    `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.ACTIVATION_VALIDATOR_SETUP}`,
    `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.CLIENT_SETUP}`,
    `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.KEY_GENERATION}`,
    `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.DEPOSIT}`,
    `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.ACTIVATION}`,
  ]

  const getIsStepVisible = (
    index: number,
    stepsBefore: number,
    stepsAfter: number,
  ) => {
    const totalSteps = FORM_STEPS.length
    let start = activeStep - stepsBefore
    let end = activeStep + stepsAfter

    if (start < 0) {
      end -= start
      start = 0
    }
    if (end >= totalSteps) {
      start -= end - totalSteps + 1
      end = totalSteps - 1
    }

    start = Math.max(0, start)
    end = Math.min(end, totalSteps - 1)

    return index >= start && index <= end
  }

  const isStepVisible = (index: number) => {
    if (windowSize.width < 774) {
      return getIsStepVisible(index, 1, 1)
    } else if (windowSize.width < 963) {
      return getIsStepVisible(index, 1, 2)
    } else if (windowSize.width < 1183) {
      return getIsStepVisible(index, 1, 3)
    } else if (windowSize.width < 1300) {
      return getIsStepVisible(index, 2, 3)
    } else {
      return true
    }
  }

  const changeStepOnClickHandler = (index: number) => {
    const path = stepToUrlMap[index]
    if (path && index < activeStep) {
      navigate(path)
    }
  }
  if (activeStep > 1) {
    activeStep = activeStep < 6 ? 2 : activeStep - 3
  }

  return (
    <Stepper
      activeStep={activeStep}
      nonLinear={true}
      styleConfig={stepStyle}
      connectorStyleConfig={customConnectorStyle}
      style={{
        fontSize: '14px',
        zIndex: 1,
        width: '100%',
        height: 'fit-content',
        padding: 0,
        marginBottom: '3rem',
      }}
    >
      {FORM_STEPS.filter((_, index) => isStepVisible(index)).map(step => {
        const originalIndex = FORM_STEPS.indexOf(step)
        return (
          <Step
            key={originalIndex}
            label={`${step.label}`}
            className={styles['custom-step']}
            onClick={() => changeStepOnClickHandler(originalIndex)}
            completed={activeStep > originalIndex - 1}
            data-subtitle={step.subtitle}
            data-step={step.label}
            style={
              originalIndex === activeStep
                ? { backgroundColor: stepStyle.currentBgColor }
                : {}
            }
          />
        )
      })}
    </Stepper>
  )
}

const stepStyle = {
  // For default dots:
  inactiveBgColor: '#FFFFFF',
  inactiveBorderColor: '#E0E0E0',
  inactiveBorderWidth: '2px',
  // For active dots:
  activeBgColor: '#FFFFFF',
  activeBorderColor: '#2A4CF4',
  activeBorderWidth: '2px',
  // For completed dots:
  completedBgColor: '#2A4CF4',
  activeTextColor: '#ffffff',
  completedTextColor: '#ffffff',
  inactiveTextColor: '#000000',
  size: '28px',
  circleFontSize: '0px',
  labelFontSize: '13px',
  borderRadius: '50%',
  fontWeight: 700,
  currentBgColor: '#808080',
}

const customConnectorStyle = {
  size: '2px',
  activeColor: '#2A4CF4',
  disabledColor: '#bdbdbd',
  completedColor: '#a10308',
  style: 'solid',
}

export default FormStepper
