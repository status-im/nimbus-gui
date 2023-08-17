import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DeviceHealthState {
  storage: number
  maxStorage: number
  cpuLoad: number[]
  memory: number[]
  maxMemory: number
  uploadRate: number[]
  downloadRate: number[]
}

const initialState: DeviceHealthState = {
  storage: 44,
  maxStorage: 100,
  cpuLoad: [12, 123, 4, 90],
  memory: [25, 31, 5, 14, 20, 81],
  maxMemory: 120,
  uploadRate: [1, 4, 25, 65],
  downloadRate: [20, 3, 50, 30],
}

const deviceHealthSlice = createSlice({
  name: 'deviceHealth',
  initialState,
  reducers: {
    setStorage: (state, action: PayloadAction<{ storage: number; maxStorage: number }>) => {
      state.storage = action.payload.storage
      state.maxStorage = action.payload.maxStorage
    },
    setCpuLoad: (state, action: PayloadAction<number[]>) => {
      state.cpuLoad = action.payload
    },
    setMemory: (state, action: PayloadAction<{ memory: number[]; maxMemory: number }>) => {
      state.memory = action.payload.memory
      state.maxMemory = action.payload.maxMemory
    },
    setNetworkHealth: (
      state,
      action: PayloadAction<{ uploadRate: number[]; downloadRate: number[] }>,
    ) => {
      state.uploadRate = action.payload.uploadRate
      state.downloadRate = action.payload.downloadRate
    },
  },
})

export const { setStorage, setCpuLoad, setMemory, setNetworkHealth} =
  deviceHealthSlice.actions

export default deviceHealthSlice.reducer
