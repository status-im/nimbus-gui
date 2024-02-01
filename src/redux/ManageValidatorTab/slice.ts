import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ManageValidatorTabStateType = {
  currentTab: number
}

const initialState: ManageValidatorTabStateType = {
  currentTab: 0,
}

const ManageValidatorTabSlice = createSlice({
  name: 'manageValidatorTab',
  initialState,
  reducers: {
    setCurrentTab: (state, action: PayloadAction<number>) => {
      state.currentTab = action.payload
    },
  },
})

export const { setCurrentTab } = ManageValidatorTabSlice.actions

export default ManageValidatorTabSlice.reducer
