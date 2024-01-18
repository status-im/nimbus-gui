import { Stepper, Step } from 'react-form-stepper'
import { useDispatch } from 'react-redux'

import { setActiveStep } from '../../../redux/ValidatorOnboarding/slice'
import { FORM_STEPS } from '../../../constants'
import { useWindowSize } from '../../../hooks/useWindowSize'
import './FormStepper.css'

type FormStepperProps = {
  activeStep: number
}

const FormStepper = ({ activeStep }: FormStepperProps) => {
  const dispatch = useDispatch()
  const windowSize = useWindowSize()

  const getIsStepVisible = (index: number, startNumber: number, endNumber: number) => {
    const start = Math.min(startNumber, activeStep - 1)
    const end = Math.max(FORM_STEPS.length - endNumber, activeStep + 1)
    return index >= start && index <= end
  }

  const isStepVisible = (index: number) => {
    if (windowSize.width < 774) {
      return getIsStepVisible(index, 3, 5)
    } else if (windowSize.width < 963) {
      return getIsStepVisible(index, 2, 4)
    } else if (windowSize.width < 1152) {
      return getIsStepVisible(index, 1, 3)
    } else if (windowSize.width < 1300) {
      return getIsStepVisible(index, 0, 2)
    } else {
      return true
    }
  }

  const changeStepOnClickHandler = (index: number) => {
    if (activeStep > index) {
      dispatch(setActiveStep(index))
    }
  }

  const visibleSteps = FORM_STEPS.filter((_, index) => isStepVisible(index))

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
      {visibleSteps.map(step => {
        const originalIndex = FORM_STEPS.indexOf(step)
        return (
          <Step
            key={originalIndex}
            label={`${step.label}`}
            className="custom-step"
            onClick={() => changeStepOnClickHandler(originalIndex)}
            completed={activeStep > originalIndex - 1}
            data-subtitle={step.subtitle}
            data-step={step.label}
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
  labelFontSize: '14px',
  borderRadius: '50%',
  fontWeight: 700,
}

const customConnectorStyle = {
  size: '2px',
  activeColor: '#2A4CF4',
  disabledColor: '#bdbdbd',
  completedColor: '#a10308',
  style: 'solid',
}

export default FormStepper
