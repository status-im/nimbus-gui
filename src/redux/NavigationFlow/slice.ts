import { createSlice } from '@reduxjs/toolkit'

type NavigationFlowStateType = {
 navigationFlow:string
}

const initialState: NavigationFlowStateType = {
  navigationFlow: '',
}

const NavigationFlow = createSlice({
  name: 'navigationFlow',
  initialState,
  reducers: {
    setNavigationFlow: (state, action) => {
        state.navigationFlow = action.payload
      },
  },
})

export const { setNavigationFlow } = NavigationFlow.actions

export default NavigationFlow.reducer
