import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type DepositState = {
  isWalletConnected: boolean
  isTransactionConfirmation: boolean
  isChainParity: boolean
}

const initialState: DepositState = {
  isWalletConnected: false,
  isTransactionConfirmation: false,
  isChainParity: false,
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
    setIsChainParity: (state, action: PayloadAction<boolean>) => {
      state.isChainParity = action.payload
    },
  },
})

export const {
  setIsWalletConnected,
  setIsTransactionConfirmation,
  setIsChainParity,
} = depositSlice.actions

export default depositSlice.reducer
