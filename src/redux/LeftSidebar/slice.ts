import { createSlice } from '@reduxjs/toolkit'

interface SidebarButton {
  isDotOn: boolean
  isDisabled?: boolean
  path: string
  tooltip?: string
}

interface LeftSidebarState {
  buttons: SidebarButton[]
}

const initialState: LeftSidebarState = {
  buttons: [
    { isDotOn: false, path: '/dashboard', tooltip: 'Dashboard' },
    {
      isDotOn: false,
      path: '/validator-management',
      tooltip: 'Validator Management',
    },
    {
      isDotOn: false,
      isDisabled: true,
      path: '/charts',
    },
    {
      isDotOn: false,
      path: '/device-health-check',
      tooltip: 'Device Health Check',
    },
    { isDotOn: false, path: '/logs', tooltip: 'Logs' },
    {
      isDotOn: false,
      isDisabled: true,
      path: '/communities',
    },
    {
      isDotOn: true,
      isDisabled: true,
      path: '/activityCenter',
    },
    {
      isDotOn: false,
      isDisabled: true,
      path: '/settings',
    },
  ],
}

const leftSidebarSlice = createSlice({
  name: 'leftSidebar',
  initialState,
  reducers: {},
})

export const {} = leftSidebarSlice.actions

export default leftSidebarSlice.reducer
