import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ValidatorSetupState = {
  isValidatorSet: boolean
}
const initialState: ValidatorSetupState = {
  isValidatorSet: false,
}

const validatorSetup = createSlice({
  name: 'validatorSetup',
  initialState,
  reducers: {
    setIsValidatorSet: (state: ValidatorSetupState, action: PayloadAction<boolean>) => {
      state.isValidatorSet = action.payload
    },
  },
})

export const { setIsValidatorSet } = validatorSetup.actions

export default validatorSetup.reducer
