import { createSlice } from '@reduxjs/toolkit'

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
    setPort: (state, action) => {
      if (action.payload.portType === 'Beacon') {
        state.beaconPort = action.payload.value
      } else {
        state.vcPort = action.payload.value
      }
    },
    setAddress: (state, action) => {
      if (action.payload.addressType === 'Beacon') {
        state.beaconAddress = action.payload.value
      } else if (action.payload.addressType === 'Validator Client') {
        state.vcAddress = action.payload.value
      } else {
        state.nodeAddress = action.payload.value
      }
    },
  },
})

export const {} = pairDeviceSlice.actions

export default pairDeviceSlice.reducer
