import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PairDeviceStateType = {
  beaconPort: string
  vcPort: string
  nodeAddress: string
  beaconAddress: string
  vcAddress: string
}

const initialState: PairDeviceStateType = {
  beaconPort: '5052',
  vcPort: '9000',
  nodeAddress: 'http://124.0.0.1',
  beaconAddress: 'http://124.0.0.1',
  vcAddress: 'http://124.0.0.1',
}

const pairDeviceSlice = createSlice({
  name: 'pairDevice',
  initialState,
  reducers: {
    setBeaconPort: (state, action: PayloadAction<string>) => {
      state.beaconPort = action.payload
    },
    setVcPort: (state, action: PayloadAction<string>) => {
      state.vcPort = action.payload
    },
    setBeaconAddress: (state, action: PayloadAction<string>) => {
      state.beaconAddress = action.payload
    },
    setVcAddress: (state, action: PayloadAction<string>) => {
      state.vcAddress = action.payload
    },
    setNodeAddress: (state, action: PayloadAction<string>) => {
      state.nodeAddress = action.payload
    },
  },
})

export const {} = pairDeviceSlice.actions

export default pairDeviceSlice.reducer
