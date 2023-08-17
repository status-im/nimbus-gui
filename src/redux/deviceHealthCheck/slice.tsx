import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DeviceHealthState {
  storage: number;
  maxStorage: number;
  cpuLoad: number[];
  memory: number[];
  maxMemory: number;
  uploadRate: number[];
  downloadRate: number[];
  usedStorage: number;
  maxRamMemory: number;
  usedRamMemory: number;
  cpuClockRate: number;
  networkLatency: number;
}

const initialState: DeviceHealthState = {
  storage: 0,
  maxStorage: 0,
  cpuLoad: [],
  memory: [],
  maxMemory: 0,
  uploadRate: [],
  downloadRate: [],
  usedStorage: 0,
  maxRamMemory: 0,
  usedRamMemory: 0,
  cpuClockRate: 0,
  networkLatency: 0,
};

const deviceHealthSlice = createSlice({
  name: 'deviceHealth',
  initialState,
  reducers: {
    setStorage: (state, action: PayloadAction<{ storage: number; maxStorage: number }>) => {
      state.storage = action.payload.storage;
      state.maxStorage = action.payload.maxStorage;
    },
    setCpuLoad: (state, action: PayloadAction<number[]>) => {
      state.cpuLoad = action.payload;
    },
    setMemory: (state, action: PayloadAction<{ memory: number[]; maxMemory: number }>) => {
      state.memory = action.payload.memory;
      state.maxMemory = action.payload.maxMemory;
    },
    setNetworkHealth: (state, action: PayloadAction<{ uploadRate: number[]; downloadRate: number[] }>) => {
      state.uploadRate = action.payload.uploadRate;
      state.downloadRate = action.payload.downloadRate;
    },
    setHealthInfo: (state, action: PayloadAction<{
      usedStorage: number;
      maxRamMemory: number;
      usedRamMemory: number;
      cpuClockRate: number;
      networkLatency: number;
    }>) => {
      state.usedStorage = action.payload.usedStorage;
      state.maxRamMemory = action.payload.maxRamMemory;
      state.usedRamMemory = action.payload.usedRamMemory;
      state.cpuClockRate = action.payload.cpuClockRate;
      state.networkLatency = action.payload.networkLatency;
    },
  }
});

export const {
  setStorage,
  setCpuLoad,
  setMemory,
  setNetworkHealth,
  setHealthInfo
} = deviceHealthSlice.actions;

export default deviceHealthSlice.reducer;
