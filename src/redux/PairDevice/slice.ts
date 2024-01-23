import { createSlice } from '@reduxjs/toolkit'

import { BEACON, BEACON_PORT, DEFAULT_ADDRESS, VALIDATOR_CLIENT, VC_PORT } from '../../constants'

type PairDeviceStateType = {
  beaconPort: string
  vcPort: string
  nodeAddress: string
  beaconAddress: string
  vcAddress: string
  isNodeSwitchOn: boolean
  isBeaconSwitchOn: boolean
  isVcSwitchOn: boolean
}

const initialState: PairDeviceStateType = {
  beaconPort: BEACON_PORT,
  vcPort: VC_PORT,
  nodeAddress: DEFAULT_ADDRESS,
  beaconAddress: DEFAULT_ADDRESS,
  vcAddress: DEFAULT_ADDRESS,
  isNodeSwitchOn: true,
  isBeaconSwitchOn: true,
  isVcSwitchOn: true,
}

const pairDeviceSlice = createSlice({
  name: 'pairDevice',
  initialState,
  reducers: {
    setPort: (state, action) => {
      if (action.payload.portType === BEACON) {
        state.beaconPort = action.payload.value
      } else {
        state.vcPort = action.payload.value
      }
    },
    setAddress: (state, action) => {
      if (action.payload.addressType === BEACON) {
        state.beaconAddress = action.payload.value
      } else if (action.payload.addressType === VALIDATOR_CLIENT) {
        state.vcAddress = action.payload.value
      } else {
        state.nodeAddress = action.payload.value
      }
    },
    setIsSwitchOn: (state, action) => {
      if (action.payload.switchType === BEACON) {
        state.isBeaconSwitchOn = action.payload.value
      } else if (action.payload.switchType === VALIDATOR_CLIENT) {
        state.isVcSwitchOn = action.payload.value
      } else {
        state.isNodeSwitchOn = action.payload.value
      }
    },
  },
})

export const {} = pairDeviceSlice.actions

export default pairDeviceSlice.reducer
