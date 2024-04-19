import { createSlice } from '@reduxjs/toolkit'
import { INITIAL_CURRENCY } from '../../constants'

const currencySlice = createSlice({
  name: 'currency',
  initialState: INITIAL_CURRENCY,
  reducers: {
    setCurrency: (_, action) => {
      return action.payload
    },
  },
})

export const {} = currencySlice.actions

export default currencySlice.reducer
