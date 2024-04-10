import { createSlice } from '@reduxjs/toolkit'

interface SidebarButton {
  isDotOn: boolean
  isDisabled?: boolean
  path: string
}

interface LeftSidebarState {
  buttons: SidebarButton[]
}

const initialState: LeftSidebarState = {
  buttons: [
    { isDotOn: false, path: '/dashboard' },
    {
      isDotOn: false,
      path: '/validator-management',
    },
    {
      isDotOn: false,
      isDisabled: true,
      path: '/charts',
    },
    {
      isDotOn: false,
      path: '/device-health-check',
    },
    { isDotOn: false, path: '/logs' },
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
