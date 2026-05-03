import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { RoutesController } from '@/components/RoutesController';
import { checkInitialSession } from '@/store/auth/actions';
import { useAppDispatch } from '@/store/hooks';
import { store } from '@/store';

import './style.scss';

const AppContent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkInitialSession());
  }, [dispatch]);

  return <RoutesController />;
};

const App = () => (
  <Provider store={store}>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AppContent />
    </BrowserRouter>
  </Provider>
);

export default App;
