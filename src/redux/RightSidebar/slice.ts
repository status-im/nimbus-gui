import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type RightSidebarStateType = {
  countOfValidators: number
}

const initialState: RightSidebarStateType = {
  countOfValidators: 0,
}

const rightSidebarSlice = createSlice({
  name: 'rightSidebar',
  initialState,
  reducers: {
    setCountOfValidators: (state, action: PayloadAction<number>) => {
      state.countOfValidators = action.payload
    },
  },
})

export const { setCountOfValidators } = rightSidebarSlice.actions

export default rightSidebarSlice.reducer
