import { Stepper, Step } from 'react-form-stepper'
import { useNavigate } from 'react-router-dom'
import { DepositStatusSteps, FORM_STEPS } from '../../../constants'
import { useWindowSize } from '../../../hooks/useWindowSize'
import styles from './DepositStepper.module.css'
type DepositStepperProps = {
  activeStep: number
}

const DepositStepper = ({ activeStep }: DepositStepperProps) => {
  const navigate = useNavigate()
  const windowSize = useWindowSize()

  const stepToUrlMap = [
    '/validator-management/',
    // fix paths
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
        width: '40%',
        height: 'fit-content',
        padding: 0,
        paddingBottom: '10px',
      }}
    >
      {DepositStatusSteps.filter((_, index) => isStepVisible(index)).map(
        step => {
          const originalIndex = DepositStatusSteps.indexOf(step)
          return (
            <Step
              key={originalIndex}
              label={`${step.label}`}
              className={styles['custom-step']}
              onClick={() => changeStepOnClickHandler(originalIndex)}
              completed={activeStep > originalIndex - 1}
              data-step={step.label}
              style={
                originalIndex === activeStep
                  ? { backgroundColor: stepStyle.currentBgColor }
                  : {}
              }
            />
          )
        },
      )}
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
  size: '13px',
  circleFontSize: '0px',
  labelFontSize: '11px',
  borderRadius: '50%',
  fontWeight: 700,
  currentBgColor: '#2A4CF4',
}

const customConnectorStyle = {
  size: '2px',
  activeColor: '#2A4CF4',
  disabledColor: '#bdbdbd',
  completedColor: '#a10308',
  style: 'solid',
}

export default DepositStepper
