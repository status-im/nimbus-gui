import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type DepositState = {
  isWalletConnected: boolean
  isTransactionConfirmation: boolean
}

const initialState: DepositState = {
  isWalletConnected: false,
  isTransactionConfirmation: false,
}

const depositSlice = createSlice({
  name: 'deposit',
  initialState,
  reducers: {
    setIsWalletConnected: (state, action: PayloadAction<boolean>) => {
      state.isWalletConnected = action.payload
    },
    setIsTransactionConfirmation: (state, action: PayloadAction<boolean>) => {
      state.isTransactionConfirmation = action.payload
    },
  },
})

export const { setIsWalletConnected, setIsTransactionConfirmation } = depositSlice.actions

export default depositSlice.reducer
