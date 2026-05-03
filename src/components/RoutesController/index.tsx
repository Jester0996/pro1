import { Navigate, Route, Routes } from 'react-router-dom';
import { CircularProgress } from '@mui/material';


import ProtectedRoute from "@/components/ProtectedRoute";
import Layout from "@/layouts/Layout";
import AccountPage from "@/pages/AccountPage";
import BillsPage from "@/pages/BillsPage";
import HomePage from "@/pages/HomePage";
import Login from "@/pages/Login";
import PaymentsPage from "@/pages/PaymentsPage";
import Registration from "@/pages/Registration";
import SecurityPage from "@/pages/SecurityPage";
import SettingsPage from "@/pages/SettingsPage";
import UsagePage from "@/pages/UsagePage";
import { routes } from "@/routes";
import {
  selectIsAuth,
  selectIsInitialSessionPending,
} from "@/store/auth/selectors";
import { useAppSelector } from "@/store/hooks";

const AuthRedirectLogin = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return isAuth ? <Navigate to={routes().home} replace /> : <Login />;
};

const AuthRedirectRegister = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return isAuth ? <Navigate to={routes().home} replace /> : <Registration />;
};

export const RoutesController = () => {
  const isInitialSessionPending = useAppSelector(selectIsInitialSessionPending);

  if (isInitialSessionPending) {
    return (
      <div className="route-loader">
        <CircularProgress />
      </div>
    );
  }

  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path={routes().home} element={<HomePage />} />
        <Route path={routes().account} element={<AccountPage />} />
        <Route path={routes().security} element={<SecurityPage />} />
        <Route path={routes().settings} element={<SettingsPage />} />
        <Route path={routes().bills} element={<BillsPage />} />
        <Route path={routes().payments} element={<PaymentsPage />} />
        <Route path={routes().usage} element={<UsagePage />} />
      </Route>

      <Route path={routes().login} element={<AuthRedirectLogin />} />
      <Route path={routes().register} element={<AuthRedirectRegister />} />
      <Route path="*" element={<Navigate to={routes().home} replace />} />
    </Routes>
  );
};
