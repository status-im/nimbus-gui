import { configureStore } from '@reduxjs/toolkit'

import themeReducer from './theme/slice'
import deviceHealthReducer from './deviceHealthCheck/slice'
import pinnedMessageReducer from './PinnedMessage/slice'
import execClientReducer from './ValidatorOnboarding/ValidatorSetup/slice'
import keyGenerationReducer from './ValidatorOnboarding/KeyGeneration/slice'
import depositReducer from './ValidatorOnboarding/Deposit/slice'

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
