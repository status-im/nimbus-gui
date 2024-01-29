import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PinnedMessage {
  id: string
  text: string
  images?: Array<{
    url: string
  }>
  reply?: boolean
  pinned: boolean
}

interface PinnedMessageState {
  pinnedMessage?: PinnedMessage
}

const initialState: PinnedMessageState = {}

const pinnedMessageSlice = createSlice({
  name: 'pinnedMessage',
  initialState,
  reducers: {
    setPinnedMessage: (state, action: PayloadAction<PinnedMessage>) => {
      state.pinnedMessage = action.payload
    },
    clearPinnedMessage: state => {
      state.pinnedMessage = undefined
    },
  },
})

export const { setPinnedMessage, clearPinnedMessage } =
  pinnedMessageSlice.actions

export default pinnedMessageSlice.reducer
