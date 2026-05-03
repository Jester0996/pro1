import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/App';

import './index.css';

const enableMocks = async () => {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser');

    await worker.start({
      onUnhandledRequest: 'warn',
    });
  }
};

enableMocks().then(() => {
  const root = createRoot(document.getElementById('root') as HTMLElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
