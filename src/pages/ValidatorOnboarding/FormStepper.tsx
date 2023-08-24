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
      style={{ fontSize: '14px', zIndex: 999, width: '100%', padding: 0, marginBottom: '1rem' }}
    >
      <Step
        className="custom-step"
        label={'Overview'}
        onClick={() => changeActiveStep(0)}
        completed={activeStep >= 0}
      />
      <Step
        className="custom-step"
        label="Advicsories"
        onClick={() => changeActiveStep(1)}
        completed={activeStep > 0}
      />
      <Step
        label="Validator Setup"
        className="custom-step"
        onClick={() => changeActiveStep(2)}
        completed={activeStep > 1}
      />
      <Step
        label="Key Generation"
        className="custom-step"
        onClick={() => changeActiveStep(3)}
        completed={activeStep > 2}
      />
      <Step
        label="Activation"
        className="custom-step"
        onClick={() => changeActiveStep(4)}
        completed={activeStep > 3}
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
