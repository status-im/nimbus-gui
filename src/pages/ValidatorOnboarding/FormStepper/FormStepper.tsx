import { Stepper, Step } from 'react-form-stepper'
import { useDispatch } from 'react-redux'

import { setActiveStep } from '../../../redux/ValidatorOnboarding/slice'
import { FORM_STEPS } from '../../../constants'
import './FormStepper.css'

type FormStepperProps = {
  activeStep: number
  windowWidth: number
}

const FormStepper = ({ activeStep, windowWidth }: FormStepperProps) => {
  const dispatch = useDispatch()
  const isStepVisible = (index: number) => {
    if (windowWidth < 740) {
      const start = Math.max(0, activeStep - 1)
      const end = Math.min(FORM_STEPS.length - 1, activeStep + 1)
      return index >= start && index <= end
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
  size: '20px',
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
