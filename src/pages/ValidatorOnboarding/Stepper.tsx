import { Text } from '@status-im/components'
import React, { useState } from 'react'
import { Stepper, Step } from 'react-form-stepper'

const FormStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0)

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Stepper
        activeStep={activeStep}
        nonLinear={true}
        styleConfig={stepStyle}
        connectorStyleConfig={customConnectorStyle}
        style={{ fontSize: '14px' }}
      >
        <Step label={'Overview'} onClick={() => setActiveStep(0)} completed={activeStep >= 0} />
        <Step label="ADVISORIES" onClick={() => setActiveStep(1)} completed={activeStep > 0} />
        <Step label="ADVISORIES" onClick={() => setActiveStep(2)} completed={activeStep > 1} />
        <Step label="ADVISORIES" onClick={() => setActiveStep(3)} completed={activeStep > 2} />
        <Step label="ADVISORIES" onClick={() => setActiveStep(4)} completed={activeStep > 3} />
      </Stepper>
    </div>
  )
}

const stepStyle = {
  activeBgColor: '#2A4CF4',
  completedBgColor: '#a10308',
  inactiveBgColor: '#e0e0e0',
  activeTextColor: '#ffffff',
  completedTextColor: '#ffffff',
  inactiveTextColor: '#000000', // assuming you want black text for inactive steps
  size: '2em',
  circleFontSize: '1rem',
  labelFontSize: '0.875rem',
  borderRadius: '50%',
  fontWeight: 500,
}

const customConnectorStyle = {
  activeColor: '#2A4CF4',
  disabledColor: '#bdbdbd', // color when a step is disabled
  completedColor: '#a10308', // color for completed steps
  backgroundColor: '#DDE1E6',
  height: '2px',
  style: 'solid', // style of the connector line
}

export default FormStepper
