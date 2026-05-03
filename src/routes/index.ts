export const routes = () =>
  ({
    home: "/",
    login: "/login",
    register: "/register",
    account: "/account",
    security: "/security",
    settings: "/settings",
    bills: "/bills",
    payments: "/payments",
    usage: "/usage",
  }) as const;

export type AppRoutesModel = ReturnType<typeof routes>;
export type AppRouteModel = AppRoutesModel[keyof AppRoutesModel];
