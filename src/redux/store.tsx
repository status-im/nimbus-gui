import { configureStore } from '@reduxjs/toolkit'
import deviceHealthReducer from './deviceHealthCheck/slice'
import pinnedMessageReducer from './PinnedMessage/slice'
import execClientReducer from './ValidatorOnboarding/ValidatorSetup/slice'

const store = configureStore({
  reducer: {
    deviceHealth: deviceHealthReducer,
    pinnedMessage: pinnedMessageReducer,
    execClient: execClientReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
