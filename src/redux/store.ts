import { configureStore } from '@reduxjs/toolkit'

import themeReducer from './theme/slice'
import deviceHealthReducer from './deviceHealthCheck/slice'
import pinnedMessageReducer from './pinnedMessage/slice'
import execClientReducer from './validatorOnboarding/validatorSetup/slice'
import keyGenerationReducer from './validatorOnboarding/keyGeneration/slice'
import depositReducer from './validatorOnboarding/deposit/slice'

const store = configureStore({
  reducer: {
    deviceHealth: deviceHealthReducer,
    pinnedMessage: pinnedMessageReducer,
    execClient: execClientReducer,
    theme: themeReducer,
    keyGeneration: keyGenerationReducer,
    deposit: depositReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
