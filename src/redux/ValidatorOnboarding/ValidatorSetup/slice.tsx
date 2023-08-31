import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ExecClientState {
  selectedClient: string
}
const initialState: ExecClientState = {
  selectedClient: '',
}
const execClientSlice = createSlice({
  name: 'execClient',
  initialState,
  reducers: {
    selectClient: (state: ExecClientState, action: PayloadAction<string>) => {
      state.selectedClient = action.payload
    },
  },
})

export const { selectClient } = execClientSlice.actions

export default execClientSlice.reducer
