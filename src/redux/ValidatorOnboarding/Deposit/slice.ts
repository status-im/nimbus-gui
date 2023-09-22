import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type DepositState = {
  isWalletConnected: boolean
}

const initialState: DepositState = {
  isWalletConnected: false,
}

const depositSlice = createSlice({
  name: 'deposit',
  initialState,
  reducers: {
    setIsWalletConnected: (state, action: PayloadAction<boolean>) => {
      state.isWalletConnected = action.payload
    },
  },
})

export const { setIsWalletConnected } = depositSlice.actions

export default depositSlice.reducer
