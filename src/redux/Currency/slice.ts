import { createSlice } from '@reduxjs/toolkit'

import { CURRENCIES } from '../../constants'

export type CurrencyType = keyof typeof CURRENCIES

const currencySlice = createSlice({
  name: 'currency',
  initialState: Object.keys(CURRENCIES)[0],
  reducers: {
    setCurrency: (_, action) => {
      return action.payload
    },
  },
})

export const {} = currencySlice.actions

export default currencySlice.reducer
