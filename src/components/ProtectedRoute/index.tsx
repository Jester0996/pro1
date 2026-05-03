import { Navigate } from "react-router-dom";

import { routes } from "@/routes";
import { selectIsAuth } from "@/store/auth/selectors";
import { useAppSelector } from "@/store/hooks";

import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuth = useAppSelector(selectIsAuth);

  if (!isAuth) {
    return <Navigate to={routes().login} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
