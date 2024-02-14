import { createSlice } from '@reduxjs/toolkit'

type LogsTerminalStateType = {
  errorLogs: number
  warningLogs: number
  noticeLogs: number
}

const initialState: LogsTerminalStateType = {
  errorLogs: 0,
  warningLogs: 0,
  noticeLogs: 0,
}

const LogsTerminalSlice = createSlice({
  name: 'logsTerminal',
  initialState,
  reducers: {
    incrementErrorLogs: state => {
      state.errorLogs += 1
    },
    incrementWarningCount: state => {
      state.warningLogs += 1
    },
    incrementNoticeCount: state => {
      state.noticeLogs += 1
    },
  },
})

export const {
  incrementErrorLogs,
  incrementWarningCount,
  incrementNoticeCount,
} = LogsTerminalSlice.actions

export default LogsTerminalSlice.reducer
