import React, { useState } from 'react';
import { Stepper, Step } from 'react-form-stepper';

const FormStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Stepper 
        activeStep={activeStep} 
        style={{fontSize: '14px'}}
      >
        <Step 
          label="Overview" 
          subLabel={{label:'gosho'}}
          onClick={() => setActiveStep(0)} 
        />
        {Array(4).fill(0).map((_, index) => (
          <Step 
            key={index}
            label="ADVISORIES" 
            subLabel={<span style={{fontSize: '12px', color: '#a1a1a1'}}>Understand your Duties</span>}
            onClick={() => setActiveStep(index + 1)} 
          />
        ))}
      </Stepper>
    </div>
  );
}

const stepStyle = {
  defaultColor: '#FFFFFF',
  activeColor: '#2A4CF4',
};

const customConnectorStyle = {
  backgroundColor: '#DDE1E6',
  height: '2px',
};

export default FormStepper;
