import './StepperStyles.css'
import React, { useState } from 'react'
import { Stepper, Step } from 'react-form-stepper'

const FormStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0)

  return (
    <div style={{ width: '100%', justifyContent: 'center' }}>
      <Stepper
        activeStep={activeStep}
        nonLinear={true}
        styleConfig={stepStyle}
        connectorStyleConfig={customConnectorStyle}
        style={{ fontSize: '14px' }}
      >
        <Step
          className="custom-step"
          label={'Overview'}
          onClick={() => setActiveStep(0)}
          completed={activeStep >= 0}
        />
        <Step
          className="custom-step"
          label="ADVISORIES"
          onClick={() => setActiveStep(1)}
          completed={activeStep > 0}
        />
        <Step
          label="ADVISORIES"
          className="custom-step"
          onClick={() => setActiveStep(2)}
          completed={activeStep > 1}
        />
        <Step
          label="ADVISORIES"
          className="custom-step"
          onClick={() => setActiveStep(3)}
          completed={activeStep > 2}
        />
        <Step
          label="ADVISORIES"
          className="custom-step"
          onClick={() => setActiveStep(4)}
          completed={activeStep > 3}
        />
      </Stepper>
    </div>
  )
}
const stepStyle = {
  // For default dots:
  inactiveBgColor: '#FFFFFF',
  inactiveBorderColor: '#E0E0E0', // added this for border color
  inactiveBorderWidth: '2px', // added this for border width

  // For active dots:
  activeBgColor: '#FFFFFF',
  activeBorderColor: '#2A4CF4', // added this for border color
  activeBorderWidth: '2px', // added this for border width

  // For completed dots:
  completedBgColor: '#2A4CF4',

  activeTextColor: '#ffffff',
  completedTextColor: '#ffffff',
  inactiveTextColor: '#000000', // assuming you want black text for inactive steps
  size: '20px', // Width & height of the circle dot
  circleFontSize: '10px', // This makes the numbers in the circle smaller
  labelFontSize: '0.875rem',
  borderRadius: '50%',
  fontWeight: 500,
}

const customConnectorStyle = {
  size: '2px',
  activeColor: '#2A4CF4',
  disabledColor: '#bdbdbd', // color when a step is disabled
  completedColor: '#a10308', // color for completed steps
  style: 'solid', // style of the connector line
}

export default FormStepper
