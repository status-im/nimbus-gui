import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DeviceHealthState {
  storage: number
  maxStorage: number
  cpuLoad: number[]
  memory: number[]
  maxMemory: number
  latency: number[]

}

const initialState: DeviceHealthState = {
  storage: 44,
  maxStorage: 100,
  cpuLoad: [25, 31, 5, 14, 20, 81, 50, 34, 12, 123, 4, 90, 56, 35, 90],
  memory: [15, 31, 5, 14, 20, 81, 50, 34, 12, 123, 4, 90, 56, 35, 90],
  maxMemory: 120,
  latency: [55, 31, 5, 14, 20, 81, 50, 34, 12, 50, 4, 90, 56, 35, 59],

}

const deviceHealthSlice = createSlice({
  name: 'deviceHealth',
  initialState,
  reducers: {
    setStorage: (
      state: DeviceHealthState,
      action: PayloadAction<{ storage: number; maxStorage: number }>,
    ) => {
      state.storage = action.payload.storage
      state.maxStorage = action.payload.maxStorage
    },
    setCpuLoad: (state: DeviceHealthState, action: PayloadAction<number[]>) => {
      state.cpuLoad = action.payload
    },
    setMemory: (
      state: DeviceHealthState,
      action: PayloadAction<{ memory: number[]; maxMemory: number }>,
    ) => {
      state.memory = action.payload.memory
      state.maxMemory = action.payload.maxMemory
    },
    setNetworkHealth: (
      state: DeviceHealthState,
      action: PayloadAction<{ latency: number[] }>,
    ) => {
      state.latency = action.payload.latency

    },
  },
})

export const { setStorage, setCpuLoad, setMemory, setNetworkHealth } = deviceHealthSlice.actions

export default deviceHealthSlice.reducer
