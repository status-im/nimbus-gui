import { Stepper, Step } from 'react-form-stepper'
import './FormStepper.css'

type FormStepperProps = {
  activeStep: number
  changeActiveStep: (step: number) => void
}

const FormStepper = ({ activeStep, changeActiveStep }: FormStepperProps) => {
  return (
    <Stepper
      activeStep={activeStep}
      nonLinear={true}
      styleConfig={stepStyle}
      connectorStyleConfig={customConnectorStyle}
      style={{ fontSize: '14px', zIndex: 999, width: '100%', padding: 0, marginBottom: '2rem' }}
    >
      <Step
        label={'Overview'}
        className="custom-step"
        onClick={() => changeActiveStep(0)}
        completed={activeStep >= 0}
        data-subtitle="Get Started"
        data-step="Overview"
      />
      <Step
        label="Advicsories"
        className="custom-step"
        onClick={() => changeActiveStep(1)}
        completed={activeStep > 0}
        data-subtitle="Understand your Duties"
        data-step="Advicsories"
      />
      <Step
        label="Client Setup"
        className="custom-step"
        onClick={() => changeActiveStep(2)}
        completed={activeStep > 1}
        data-subtitle="Execution & Consensus"
        data-step="Advicsories"
      />
      <Step
        label="Validator Setup"
        className="custom-step"
        onClick={() => changeActiveStep(3)}
        completed={activeStep > 2}
        data-subtitle="Validators & Withdrawal"
        data-step="Validator Setup"
      />
      <Step
        label="Key Generation"
        className="custom-step"
        onClick={() => changeActiveStep(4)}
        completed={activeStep > 3}
        data-subtitle="Secure your Keypairs"
        data-step="Key Generation"
      />
      <Step
        label="Activation"
        className="custom-step"
        onClick={() => changeActiveStep(5)}
        completed={activeStep > 4}
        data-subtitle="Complete Setup"
        data-step="Activation"
      />
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
