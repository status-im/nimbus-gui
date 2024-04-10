import { createSlice } from '@reduxjs/toolkit'

import { VALIDATOR_TABS_MANAGEMENT } from '../../constants'
import { Validator } from '../../pages/ValidatorManagement/ManagementTabs'

type ValidatorManagementType = {
  currentTab: string
  filteredValidators: Validator[]
}

const initialState: ValidatorManagementType = {
  currentTab: VALIDATOR_TABS_MANAGEMENT[0],
  filteredValidators: [],
}

const ValidatorManagementSlice = createSlice({
  name: 'validatorManagement',
  initialState,
  reducers: {
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload
    },
    setFilteredValidators: (state, action) => {
      state.filteredValidators = action.payload
    },
  },
})

export const { setCurrentTab, setFilteredValidators } =
  ValidatorManagementSlice.actions

export default ValidatorManagementSlice.reducer
