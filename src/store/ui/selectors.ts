import type { RootState } from "../index";

export const selectTheme = (state: RootState) => state.ui.theme;

export const selectSidebarOpen = (state: RootState) => state.ui.sidebarOpen;

export const selectUserMenuOpen = (state: RootState) => state.ui.userMenuOpen;
