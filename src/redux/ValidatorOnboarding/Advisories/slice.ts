import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AdvisoriesState {
  subStepAdvisories: number
}

const initialState = {
  subStepAdvisories: 0,
}

const AdvisoriesSlice = createSlice({
  name: 'advisories',
  initialState,
  reducers: {
    setSubStepAdvisories: (state: AdvisoriesState, action: PayloadAction<number>) => {
      state.subStepAdvisories = action.payload
    },
  },
})

export const { setSubStepAdvisories } = AdvisoriesSlice.actions

export default AdvisoriesSlice.reducer
