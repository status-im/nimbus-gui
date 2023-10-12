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
  const dispatch = useDispatch()

  const changeStepOnClickHandler = (index: number) => {
    if (activeStep > index) {
      dispatch(setActiveStep(index))
    }
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
        padding: 0,
        marginBottom: '3rem',
      }}
    >
      {steps.map((step, index) => (
        <Step
          key={index}
          label={step.label}
          className="custom-step"
          onClick={() => changeStepOnClickHandler(index)}
          completed={activeStep > index - 1}
          data-subtitle={step.subtitle}
          data-step={step.label}
        />
      ))}
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
