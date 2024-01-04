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
    setAddress: (
      state,
      action: PayloadAction<{ nodeAddress: string; beaconAddress: string; vcAddress: string }>,
    ) => {
      state.nodeAddress = action.payload.nodeAddress
      state.beaconAddress = action.payload.beaconAddress
      state.vcAddress = action.payload.vcAddress
    },
    setPort: (state, action: PayloadAction<{ beaconPort: string; vcPort: string }>) => {
      state.beaconPort = action.payload.beaconPort
      state.vcPort = action.payload.vcPort
    },
  },
})

export const { setAddress, setPort } = pairDeviceSlice.actions

export default pairDeviceSlice.reducer
