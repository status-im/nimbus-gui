import { createSlice } from '@reduxjs/toolkit'

const initialState: 'light' | 'dark' = 'light'

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (_, action) => {
      return action.payload
    },
  },
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
