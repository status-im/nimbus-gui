import { Stepper, Step } from 'react-form-stepper'
import { useDispatch } from 'react-redux'

import { setActiveStep } from '../../../redux/ValidatorOnboarding/slice'
import './FormStepper.css'

const steps = [
  { label: 'Overview', subtitle: 'Get Started' },
  { label: 'Advisories', subtitle: 'Understand your Duties' },
  { label: 'Client Setup', subtitle: 'Execution & Consensus' },
  { label: 'Validator Setup', subtitle: 'Validators & Withdrawal' },
  { label: 'Key Generation', subtitle: 'Secure your Keypairs' },
  { label: 'Deposit', subtitle: 'Stake your ETH' },
  { label: 'Activation', subtitle: 'Complete Setup' },
]

type FormStepperProps = {
  activeStep: number
}

const FormStepper = ({ activeStep }: FormStepperProps) => {
  const isStepVisible = (index: number) => {
    if (activeStep === 0) {
      // Show the first three steps if the active step is the first one
      return index <= 2;
    } else if (activeStep === steps.length - 1) {
      // Show the last three steps if the active step is the last one
      return index >= steps.length - 3;
    } else {
      // Otherwise, show the previous, current, and next steps
      return index === activeStep || index === activeStep - 1 || index === activeStep + 1;
    }
  }
  
   
  const dispatch = useDispatch()
  
  const changeStepOnClickHandler = (index: number) => {
    if (activeStep > index) {
      dispatch(setActiveStep(index))
    }
  }
  
  const visibleSteps = steps.filter((_, index) => isStepVisible(index));
  return (
    <Stepper
      activeStep={activeStep}
      nonLinear={true}
      styleConfig={stepStyle}
      connectorStyleConfig={customConnectorStyle}
      style={{
        fontSize: '14px',
        zIndex: 1,
        width: '1200px',
        padding: 0,
        marginBottom: '3rem',
        overflow: 'hidden',
      }}
    >
      {visibleSteps.map((step) => {
        const originalIndex = steps.indexOf(step);
        return (
          <Step
            key={originalIndex}
            label={step.label}
            className="custom-step"
            onClick={() => changeStepOnClickHandler(originalIndex)}
            completed={activeStep > originalIndex - 1}
            data-subtitle={step.subtitle}
            data-step={step.label}
          />
        );
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
  circleFontSize: '10px',
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
