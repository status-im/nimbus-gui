import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SidebarButton {
    id: string;
    isDotOn: boolean;
    isSelected: boolean;
    isDisabled?: boolean;
}

interface LeftSidebarState {
    buttons: SidebarButton[];
}

const initialState: LeftSidebarState = {
    buttons: [
        { id: 'dashboard', isDotOn: false, isSelected: true },
        { id: 'speed', isDotOn: false, isSelected: false },
        { id: 'chart', isDotOn: false, isSelected: false, isDisabled: true },
        { id: 'heart', isDotOn: false, isSelected: false },
        { id: 'codeBlock', isDotOn: false, isSelected: false },
        { id: 'communities', isDotOn: false, isSelected: false },
        { id: 'activityCenter', isDotOn: true, isSelected: false },
        { id: 'settings', isDotOn: false, isSelected: false },
    ],
};

const leftSidebarSlice = createSlice({
    name: 'leftSidebar',
    initialState,
    reducers: {
    },
});

export const { toggleButtonSelection, toggleDot } = leftSidebarSlice.actions;

