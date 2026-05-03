import { createSlice } from '@reduxjs/toolkit';

import { EnumTheme } from './model';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { UiStateModel } from './model';

const initialState: UiStateModel = {
  theme: EnumTheme.System,
  sidebarOpen: true,
  userMenuOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<EnumTheme>) => {
      state.theme = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    toggleUserMenu: (state) => {
      state.userMenuOpen = !state.userMenuOpen;
    },
    closeUserMenu: (state) => {
      state.userMenuOpen = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
