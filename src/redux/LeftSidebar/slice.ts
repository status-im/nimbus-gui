import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SidebarButton {
  id: string
  isDotOn: boolean
  isSelected: boolean
  isDisabled?: boolean
  path: string
}

interface LeftSidebarState {
  buttons: SidebarButton[]
}

const initialState: LeftSidebarState = {
  buttons: [
    { id: 'dashboard', isDotOn: false, isSelected: true, path: '/dashboard' },
    {
      id: 'speed',
      isDotOn: false,
      isSelected: false,
      path: '/validator-management',
    },
    {
      id: 'chart',
      isDotOn: false,
      isSelected: false,
      isDisabled: true,
      path: '/',
    },
    {
      id: 'heart',
      isDotOn: false,
      isSelected: false,
      path: '/device-health-check',
    },
    { id: 'codeBlock', isDotOn: false, isSelected: false, path: '/logs' },
    {
      id: 'communities',
      isDotOn: false,
      isSelected: false,
      isDisabled: true,
      path: '/',
    },
    {
      id: 'activityCenter',
      isDotOn: true,
      isSelected: false,
      isDisabled: true,
      path: '/',
    },
    {
      id: 'settings',
      isDotOn: false,
      isSelected: false,
      isDisabled: true,
      path: '/',
    },
  ],
}

const leftSidebarSlice = createSlice({
  name: 'leftSidebar',
  initialState,
  reducers: {
    toggleButtonSelection: (state, action: PayloadAction<string>) => {
      state.buttons.forEach(button => {
        button.isSelected = button.id === action.payload
      })
    },
    toggleDot: (state, action: PayloadAction<string>) => {
      const button = state.buttons.find(button => button.id === action.payload)
      if (button) {
        button.isDotOn = !button.isDotOn
      }
    },
  },
})

export const { toggleButtonSelection, toggleDot } = leftSidebarSlice.actions

export default leftSidebarSlice.reducer
