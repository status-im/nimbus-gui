import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AdvisoriesState {
    subStepAdvisories: number
    isValidatorSet: boolean
}

const initialState = {
    subStepAdvisories: 0,
    isAdvisoriesComplete: false,
    isValidatorSet: false,
}

const AdvisoriesSlice = createSlice({
    name: 'execClient',
    initialState,
    reducers: {
        setSubStepAdvisories: (state: AdvisoriesState, action: PayloadAction<number>) => {
            state.subStepAdvisories = action.payload
        },
        setIsValidatorSet: (state: AdvisoriesState, action: PayloadAction<boolean>) => {
            state.isValidatorSet = action.payload
        },
    },
})

export const { setSubStepAdvisories, setIsValidatorSet } =
    AdvisoriesSlice.actions

export default AdvisoriesSlice.reducer
