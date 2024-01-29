import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ValidatorOnboardingState = {
  activeStep: number
  subStepValidatorSetup: number
}

const initialState: ValidatorOnboardingState = {
  activeStep: 0,
  subStepValidatorSetup: 0,
}

const validatorOnboardingSlice = createSlice({
  name: 'validatorOnboarding',
  initialState,
  reducers: {
    setActiveStep(state, action: PayloadAction<number>) {
      state.activeStep = action.payload
    },
    setSubStepValidatorSetup(state, action: PayloadAction<number>) {
      state.subStepValidatorSetup = action.payload
    },
  },
})

export const { setActiveStep, setSubStepValidatorSetup } =
  validatorOnboardingSlice.actions

export default validatorOnboardingSlice.reducer
