export enum EnumTheme {
  Dark = "dark",
  Light = "light",
  ClassicDark = "classic-dark",
  System = "system",
}

export interface UiStateModel {
  theme: EnumTheme;
  sidebarOpen: boolean;
  userMenuOpen: boolean;
}
