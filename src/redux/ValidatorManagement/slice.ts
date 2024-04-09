import { createSlice } from '@reduxjs/toolkit'

type ValidatorManagementType = {
  currentTab: string
}

const initialState: ValidatorManagementType = {
  currentTab: '',
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
