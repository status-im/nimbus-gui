import { createSlice } from '@reduxjs/toolkit'

import { VALIDATOR_TABS_MANAGEMENT } from '../../constants'

type ValidatorManagementType = {
  currentTab: string
}

const initialState: ValidatorManagementType = {
  currentTab: VALIDATOR_TABS_MANAGEMENT[0],
}

const ValidatorManagementSlice = createSlice({
  name: 'validatorManagement',
  initialState,
  reducers: {
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload
    },
  },
})

export const { setCurrentTab } = ValidatorManagementSlice.actions

export default ValidatorManagementSlice.reducer
