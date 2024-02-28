import { createSlice } from '@reduxjs/toolkit'

import { CURRENCIES } from '../../constants'

export type CurrencyType = keyof typeof CURRENCIES

const pairDeviceSlice = createSlice({
  name: 'pairDevice',
  initialState: Object.keys(CURRENCIES)[0],
  reducers: {
    setCurrency: (_, action) => {
      return action.payload
    },
  },
})

export const {} = pairDeviceSlice.actions

export default pairDeviceSlice.reducer
